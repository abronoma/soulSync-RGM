import { SoulModel } from "../models/soul.js";
import {FollowUpModel} from "../models/followup.js";

// GET /api/reports?month=2025-09
export const getMonthlyReport = async (req, res) => {
  try {
    const { month } = req.query; 
    if (!month) {
      return res.status(400).json({ message: "Month is required (format YYYY-MM)" });
    }

    // Date range for the month
    const startDate = new Date(`${month}-01T00:00:00.000Z`);
    const endDate = new Date(new Date(startDate).setMonth(startDate.getMonth() + 1));

    // Souls Won (within month)
    const totalSoulsWon = await SoulModel.countDocuments({
      status: "won",
      createdAt: { $gte: startDate, $lt: endDate }
    });

    // Souls Contacted (all souls entries in that month)
    const soulsContacted = await SoulModel.countDocuments({
      createdAt: { $gte: startDate, $lt: endDate }
    });

    // Follow-ups (all in that month)
    const totalFollowUps = await FollowUpModel.countDocuments({
      createdAt: { $gte: startDate, $lt: endDate }
    });

    // Completed Follow-ups
    const completedFollowUps = await FollowUpModel.countDocuments({
      status: "completed",
      createdAt: { $gte: startDate, $lt: endDate }
    });

    // Pending Follow-ups
    const pendingFollowUps = await FollowUpModel.countDocuments({
      status: "pending",
      createdAt: { $gte: startDate, $lt: endDate }
    });

    // Active Outreach (you can define: e.g. follow-ups scheduled OR souls contacted)
    const activeOutreach = await FollowUpModel.countDocuments({
      status: "scheduled",
      createdAt: { $gte: startDate, $lt: endDate }
    });

    return res.status(200).json({
      totalSoulsWon,
      totalFollowUps,
      activeOutreach,
      pendingFollowUps,
      soulsContacted,
      completedFollowUps,
    });
  } catch (err) {
    console.error("Error fetching monthly report:", err);
    res.status(500).json({ message: "Error fetching monthly report", error: err.message });
  }
};
