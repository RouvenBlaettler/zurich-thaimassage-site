import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const date = req.query.date;
    const response = await fetch(
        `https://api.cal.com/v2/slots?eventTypeId=6696438&start=${date}T00:00:00Z&end=${date}T23:59:59Z&timeZone=Europe%2FZurich`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.CAL_API_KEY}`,
                "cal-api-version": "2024-09-04"
            }
        }
    );

    const data = await response.json();


    console.log(
        "Cal.com availability:",
        JSON.stringify(data, null, 2)
    );

    res.json(data);


});

export default router;