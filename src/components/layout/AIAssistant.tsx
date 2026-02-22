"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, Compass } from "lucide-react";
import styles from '@/styles/layout/AIAssistant.module.css';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
    role?: 'system' | 'user' | 'assistant';
}

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Greetings. I am your Aethelgard Collections concierge. How may I assist in architecting your next extraordinary voyage?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMsgText = input;
        const userMsgId = Date.now();
        setMessages(prev => [...prev, { id: userMsgId, text: userMsgText, sender: 'user' }]);
        setInput("");

        setIsTyping(true);

        try {
            // Prepare message history for OpenAI
            const history = messages.map(m => ({
                role: m.sender === 'bot' ? 'assistant' as const : 'user' as const,
                content: m.text
            })).concat({ role: 'user' as const, content: userMsgText });

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: history }),
            });

            const data = await response.json();

            if (data.error) {
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: "I apologize, but I'm encountering a temporary lapse in my archives. Please try again or contact our human concierge.",
                    sender: 'bot'
                }]);
            } else {
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: data.text,
                    sender: 'bot'
                }]);
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, {
                id: Date.now(),
                text: "I seem to be having trouble connecting to the network. Please ensure your connection is stable.",
                sender: 'bot'
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className={styles.container}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.chatWindow}
                        initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className={styles.chatHeader}>
                            <Sparkles className={styles.headerIcon} size={20} />
                            <span>Legacy Concierge</span>
                            <button className={styles.closeBtn} style={{ marginLeft: 'auto', background: 'none', border: 'none' }} onClick={() => setIsOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.messages} data-lenis-prevent>
                            {messages.map((msg) => (
                                <div key={msg.id} className={`${styles.message} ${msg.sender === 'bot' ? styles.bot : styles.user}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className={styles.typing}>
                                    Concierge is architecting
                                    <div className={styles.dot} />
                                    <div className={styles.dot} />
                                    <div className={styles.dot} />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className={styles.inputArea}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                type="text"
                                placeholder="Inquire about your next journey..."
                                className={styles.input}
                            />
                            <button onClick={handleSend} className={styles.sendBtn} disabled={isTyping}>
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={styles.buttonWrapper} onClick={() => setIsOpen(!isOpen)}>
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            className={styles.buttonTag}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Open AI Assistant
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    className={styles.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isOpen ? <X size={28} /> : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4 21H6.5L8.5 16H15.5L17.5 21H20L12 2ZM9.5 14L12 8L14.5 14H9.5Z" fill="currentColor" />
                        </svg>
                    )}
                    {!isOpen && <div className={styles.pulse} />}
                </motion.button>
            </div>
        </div>
    );
}
