import { useState } from "react";

function ChatBox() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>

      <textarea
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="5"
        placeholder="Type your thoughts here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Analyze
      </button>
    </div>
  );
}

export default ChatBox;