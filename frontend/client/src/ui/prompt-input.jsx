"use client";

import { useState } from "react";

export default function PromptInput() {
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      // Handle the question submission here
      console.log("Question submitted: ", question);

      const response = await fetch("http://localhost:9002/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      //pass question to output prompt
      setQuestion("");

      const data = await response.json();
      console.log("Server response " + data.answer);
    }
  };

  return (
    <textarea
      id="question-input"
      placeholder="Ask me something..."
      className="w-full h-full p-2"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      onKeyDown={handleSubmit}
    ></textarea>
  );
}
