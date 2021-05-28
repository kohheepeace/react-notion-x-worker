const express = require("express");
const logger = require("morgan");
const notionClient = require("notion-client");

const app = express();
const PORT = process.env.PORT || 3000;
const notion = new notionClient.NotionAPI();

app.use(logger("dev"));

app.get("/pages/:id", async (req, res) => {
	const id = req.params.id;
	const recordMap = await notion.getPage(id);
	res.json(recordMap);
});

app.listen(PORT, () => {
	console.log(`Our app is running on port ${PORT}`);
});
