import express from "express";
const router = express.Router();

router.post("/faketasktable", (req, res) => {
  console.log(req.body);
  res.json({ message: "todo Post method" });
});

router.get("/faketasktable", (req, res) => {
  res.json({ message: "todo get method" });
});

router.put("/faketasktable", (req, res) => {
  res.json({ message: "todo put method" });
});

router.delete("/faketasktable", (req, res) => {
  res.json({ message: "todo delete method" });
});
export default router;
