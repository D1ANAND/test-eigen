// pages/api/estimate-gas.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const lowerBound = 0.000000000001000273;
    const upperBound = 0.000000000001000283;

    // Generate random number between the bounds
    const randomNumber = Math.random() * (upperBound - lowerBound) + lowerBound;

    // Format the number to full precision
    const formattedNumber = randomNumber.toFixed(18);

    // Send response
    return res.status(200).json({ random_number: formattedNumber });
  } else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
