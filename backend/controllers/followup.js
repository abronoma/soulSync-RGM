import {mongoose }from "mongoose"
import cron from "node-cron";
import twilio from "twilio";
import FollowUp from "../models/followup.js";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

// Add follow-up
export const scheduleFollowUp = async (req, res) => {
  try {
    const { volunteerId, soulId, date, time, notes, phone } = req.body;

    // Save follow-up
    const followUp = await FollowUp.create({
      volunteerId,
      soulId,
      date,
      time,
      notes,
      status: "scheduled"
    });

    // Send immediate confirmation
    await client.messages.create({
      body: `✅ Follow-up scheduled on ${date} at ${time}. Notes: ${notes || "N/A"}`,
      from: process.env.TWILIO_PHONE,
      to: phone
    });

    // Schedule reminder
    const [hour, minute] = time.split(":");
    const [year, month, day] = date.split("-");

    cron.schedule(
      `${minute} ${hour} ${day} ${month} *`,
      async () => {
        await client.messages.create({
          body: `⏰ Reminder: You have a follow-up TODAY at ${time}. Notes: ${notes || "N/A"}`,
          from: process.env.TWILIO_PHONE,
          to: phone
        });
      },
      {
        scheduled: true,
        timezone: "Africa/Accra" 
      }
    );

    res.status(201).json({
      message: "Follow-up scheduled, SMS confirmation sent, reminder set",
      followUp
    });
  } catch (error) {
    console.error("Follow-up scheduling error:", error);
    res.status(500).json({ message: "Failed to schedule follow-up", error });
  }
};



// Get all follow-ups for a soul
export const getFollowUpsBySoul = async (req, res) => {
  try {
    const { soulId } = req.params;

    const followUps = await FollowUpModel.find({ soul: soulId })
      .populate("volunteer", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json(followUps);
  } catch (error) {
    res.status(500).json({ message: "Error fetching follow-ups", error: error.message });
  }
};

// Get all follow-ups for a volunteer
export const getFollowUpsByVolunteer = async (req, res) => {
  try {
    const volunteerId = req.params.volunteerId;

    const followUps = await FollowUpModel.find({ volunteer: volunteerId })
      .populate("soul", "fullName phoneNumber outreachStatus")
      .sort({ createdAt: -1 });

    res.status(200).json(followUps);
  } catch (error) {
    res.status(500).json({ message: "Error fetching follow-ups", error: error.message });
  }
};

//Mark follow up as complete
export const completeFollowUp = async (req, res) => {
  try {
    const { followUpId } = req.params;

    // Update follow-up
    const followUp = await FollowUp.findByIdAndUpdate(
      followUpId,
      { status: "completed", completedAt: new Date() },
      { new: true }
    );

    if (!followUp) {
      return res.status(404).json({ message: "Follow-up not found" });
    }

    // Update reports
    await Report.findOneAndUpdate(
      { volunteerId: followUp.volunteerId },
      { $inc: { completedFollowUps: 1 } }, // increments completed count
      { upsert: true, new: true }
    );

    res.json({
      message: "Follow-up marked as completed, report updated",
      followUp
    });
  } catch (error) {
    console.error("Error completing follow-up:", error);
    res.status(500).json({ message: "Error completing follow-up", error });
  }
};




// Update follow-up
export const updateFollowUp = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const followUp = await FollowUpModel.findByIdAndUpdate(id, updates, { new: true });

    if (!followUp) return res.status(404).json({ message: "Follow-up not found" });

    res.json({ message: "Follow-up updated successfully", data: followUp });
  } catch (error) {
    res.status(500).json({ message: "Error updating follow-up", error: error.message });
  }
};

// Delete follow-up
export const deleteFollowUp = async (req, res) => {
  try {
    const { id } = req.params;

    const followUp = await FollowUpModel.findByIdAndDelete(id);

    if (!followUp) return res.status(404).json({ message: "Follow-up not found" });

    res.json({ message: "Follow-up deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting follow-up", error: error.message });
  }
};
