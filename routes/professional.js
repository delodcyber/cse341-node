const express = require("express");
const router = express.Router();

const Professional = require("../DB/professional");

router.get("/", async (req, res) => {
    try {
        console.log("Database:", Professional.db.name);
        console.log("Collection:", Professional.collection.collectionName);
        const professional = await Professional.collection.findOne({});

        console.log(professional);

        res.json(professional);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

module.exports = router;