import { useState } from "react";
import axios from "axios";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [emotion, setEmotion] = useState(null);
  const [risk, setRisk] = useState(null);

  const analyzeText = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        { text: message }
      );

      setEmotion(response.data.emotion);
      setRisk(response.data.risk_score);
    } catch (error) {
      alert("Backend not connected");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4">
        How are you feeling today?
      </h2>

      <textarea
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="5"
        placeholder="Type your thoughts here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={analyzeText}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Analyze
      </button>

      {emotion && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p><strong>Detected Emotion:</strong> {emotion}</p>
          <p><strong>Risk Score:</strong> {risk}%</p>
        </div>
      )}
    </div>
  );
}

export default ChatBox;