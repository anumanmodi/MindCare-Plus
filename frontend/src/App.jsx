import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>MindCare+ Mental Health AI</h1>

      <textarea
        rows="6"
        cols="60"
        placeholder="Type how you feel..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button>Analyze</button>
    </div>
  );
}

export default App;