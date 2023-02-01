require("dotenv").config();
// const fetch = require("node-fetch");

const generateAction = async (req, res) => {
  console.log("Received request");

  const input = JSON.parse(req.body).input;

  const response = await fetch(
    `https://api-inference.huggingface.co/models/buildspace/ai-avatar-generator`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_KEY}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        inputs: input
      })
    }
  );

  // Check for different statuses to send proper payload
  if (response.ok) {
    const buffer = await response.arrayBuffer();
    res.status(200).json({ image: buffer });
  } else if (response.status === 503) {
    const json = await response.json();
    res.status(503).json(json);
  } else {
    const json = await response.json();
    res.status(response.status).json({ error: response.statusText });
  }
};

export default generateAction;
