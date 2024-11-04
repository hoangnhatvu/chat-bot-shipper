// ChatBot.tsx
"use client"
import React, { useState } from "react";
import { context } from "./initChat";
import { chat } from "./helper";

interface IMessage {
    sender: "user" | "bot";
    text: string;
}

export interface IMessageData {
    role: string;
    content: string;
}

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [input, setInput] = useState("");

    const [messagesData, setMessagesData] = useState<IMessageData[]>(context);


    const getResponse = async (context: IMessageData[]) => {
        try {
            const response = await chat(context);

            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: response.choices[0].message.content }
            ]);

            setMessagesData((prevData) => [
                ...prevData,
                { role: 'assistant', content: response.choices[0].message.content },
            ]);
        } catch (error) {
            console.error("Error fetching response from bot:", error);
        }
    };


    const onSend = () => {
        if (input.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "user", text: input }
            ]);

            setMessagesData((prevData) => [
                ...prevData,
                { role: 'user', content: input },
            ]);

            getResponse([...messagesData, { role: 'user', content: input }]);
            setInput("");
        }
    };


    return (
        <div className="w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
            <div className="p-4 bg-blue-600 text-white rounded-t-lg">Chatbot</div>

            <div className="p-4 h-96 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex p-4 space-x-2 border-t border-gray-300">
                <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-lg text-black"
                    placeholder="Type something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSend()}
                />
                <button
                    onClick={onSend}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
