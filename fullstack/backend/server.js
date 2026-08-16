import express from "express"
import cors from "cors"

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/status', (req,res) => {
    res.json({message: "server is running"});
});

app.listen(PORT, () => {
    console.log('backend läuft auf http://localhost:4000');
});
