import express from "express";

const router = express.Router();

router.post("/", (req,res) => {
    console.log(req.body);

    res.json({
    message: `Hallo ${req.body.firstname}, Buchung erhalten!`,
    booking: req.body
    });
});

export default router;