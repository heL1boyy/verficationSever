const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: "https://verification-form-flax.vercel.app", // Allow this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions)); // Apply the CORS options

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
