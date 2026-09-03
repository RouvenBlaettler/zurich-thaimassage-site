import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    console.log(req.body);

    const url = "https://api.cal.com/v2/bookings";

    const bookingData = {
        start: "2026-09-10T10:00:00Z",

        eventTypeId: 6696438,

        attendee: {
            name: "Test User",
            email: "vanshisbossofficial@gmail.com",
            timeZone: "Europe/Zurich",
            language: "en"
        },

        metadata: {}
    };

    try {
        const response = await fetch(url, {
            method: "POST",

            headers: {
                "Authorization": `Bearer ${process.env.CAL_API_KEY}`,
                "Content-Type": "application/json",
                "cal-api-version": "2026-02-25"
            },

            body: JSON.stringify(bookingData)
        });

        const data = await response.json();

        console.log("Cal.com response:", data);

        if (!response.ok) {
            throw new Error(
                `Error: ${response.status} - ${JSON.stringify(data)}`
            );
        }

        console.log("Booking created successfully:", data);

        res.status(200).json(data);

    } catch (error) {
        console.error("Failed to create booking:", error);

        res.status(500).json({
            error: error.message
        });
    }
});

export default router;