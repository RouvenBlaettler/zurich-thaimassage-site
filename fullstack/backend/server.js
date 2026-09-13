import "dotenv/config";
import express from "express";
import cors from "cors";
import bookingrouter from "./routes/booking.js";
import slotsrouter from "./routes/slots.js";
import contactform from "./routes/contact.js"

const app = express();
const PORT = 4000;

console.log("API key: ", process.env.CAL_API_KEY)

app.use(cors());
app.use(express.json());

app.get('/api/status', (req,res) => {
    res.json({message: "server is running"});
});


app.use('/api/bookings', bookingrouter);
app.use('/api/slots', slotsrouter);
app.use('/api/contact', contactform);

app.listen(PORT, () => {
    console.log('backend läuft auf http://localhost:4000');
});
