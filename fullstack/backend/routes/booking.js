import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    console.log("Daten vom Frontend:", req.body);


    
    const url = "https://api.cal.com/v2/bookings";

    const bookingData = {
        start: `${req.body.bookingDate}T${req.body.bookingTime}:00Z`,

        eventTypeId: 6696438,

        attendee: {
            name: `${req.body.firstname} ${req.body.lastname}`,
            email: req.body.email,
            timeZone: "Europe/Zurich",
            language: "en"
        },

        location: {
            type: "attendeeAddress",
            address: "DEINE ADRESSE"
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