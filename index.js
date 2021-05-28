const express = require("express");
const logger = require("morgan");
const notionClient = require("notion-client");

const app = express();
const PORT = process.env.PORT || 3000;
const notion = new notionClient.NotionAPI();

app.use(logger("dev"));

app.get("/pages/:id", async (req, res, next) => {
	const id = req.params.id;
	try {
		const recordMap = await notion.getPage(id);
		res.json(recordMap);
	} catch (err) {
		next(err);
	}
});

app.listen(PORT, () => {
	console.log(`Our app is running on port ${PORT}`);
});

app.use(function (req, res, next) {
	res.status(404).send("Invalid URL");
});
