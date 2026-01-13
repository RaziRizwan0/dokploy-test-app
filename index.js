import express from "express";

const app = express();
const PORT = process.env.PORT || 3100;

app.get("/", (req, res) => {
  res.send("✅ Dokploy GitHub deploy works! with autodeploy yoo-yooo");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
