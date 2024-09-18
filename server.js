const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // To parse JSON request bodies

// POST /verify endpoint
app.post("/verify", (req, res) => {
  const { code } = req.body;

  if (code.length !== 6 || code[5] === "7") {
    return res
      .status(400)
      .json({ success: false, message: "Verification failed" });
  }

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
