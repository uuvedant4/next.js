"use client";

import styles from "./page.module.css";
import { useChat } from "ai/react";

const Bot = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/bot",
  });

  return (
    <div>
      <div>
        <ul>
          {messages.map((m, index) => (
            <li key={index}>
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </li>
          ))}
        </ul>
      </div>
      <input
        placeholder="ask me anything..."
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>click</button>
    </div>
  );
};

export default Bot;
