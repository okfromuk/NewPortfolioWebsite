import React, { useEffect, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function MiniChatBot() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m OmkarBot 👋 — Ask me anything about my work!" }
  ]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { from: "bot", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {show && (
        <div className="backdrop-blur-md bg-white/90 border border-gray-300 shadow-2xl rounded-2xl w-80 h-[460px] flex flex-col p-4 mb-3 transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-lg font-bold text-gray-800">OmkarBot 🤖</h4>
            <button onClick={() => setShow(false)}>
              <X className="text-gray-500 hover:text-red-400 transition" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.from === "bot" && (
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 font-bold flex items-center justify-center rounded-full text-sm shadow">
                    OB
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow ${
                    msg.from === "bot"
                      ? "bg-slate-100 text-gray-800"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.from === "user" && (
                  <div className="w-8 h-8 bg-gray-300 text-white font-bold flex items-center justify-center rounded-full text-sm shadow">
                    U
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="text-xs text-gray-600 animate-pulse flex items-center gap-1 pl-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100" />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300" />
              </div>
            )}
            <div ref={chatRef} />
          </div>

          {/* Input */}
          <div className="mt-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnter}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setShow(!show)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition"
      >
        <MessageSquare size={20} />
      </button>
    </div>
  );
}
