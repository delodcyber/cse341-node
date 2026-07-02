const express = require("express");
const cors = require("cors");
const connectDB = require("./DB/connection");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/professional", require("./routes/professional"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});