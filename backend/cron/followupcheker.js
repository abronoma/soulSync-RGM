import cron from "node-cron";
import FollowUp from "../models/followup.js";
import Report from "../models/Report.js";

const checkMissedFollowUps = () => {
  // Runs every hour
  cron.schedule("0 * * * *", async () => {
    console.log("⏰ Checking missed follow-ups...");

    try {
      const now = new Date();

      // Find all scheduled follow-ups where the date/time has passed
      const missedFollowUps = await FollowUp.find({
        status: "scheduled",
        $expr: {
          $lt: [
            { $dateFromString: { dateString: { $concat: ["$date", "T", "$time"] } } },
            now
          ]
        }
      });

      for (let followUp of missedFollowUps) {
        followUp.status = "missed";
        await followUp.save();

        // Update reports
        await Report.findOneAndUpdate(
          { volunteerId: followUp.volunteerId },
          { $inc: { missedFollowUps: 1 } },
          { upsert: true }
        );
      }

      if (missedFollowUps.length > 0) {
        console.log(`⚠️ ${missedFollowUps.length} follow-ups marked as missed.`);
      }
    } catch (err) {
      console.error("Error checking missed follow-ups:", err);
    }
  });
};

export default checkMissedFollowUps;
