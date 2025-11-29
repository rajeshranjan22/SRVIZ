const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/lead.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/lead", leadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});
