import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AiAssistant = () => {
    const { t } = useTranslation();
    const [messages, setMessages] = useState([{
        id: 1,
        role: 'ai',
        text: t('ai.greeting')
    }]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);
    const hasInitialized = useRef(false);

    // Update initial message when language changes
    useEffect(() => {
        if (hasInitialized.current) return;
        setMessages(prev => prev.map(msg =>
            msg.id === 1 ? { ...msg, text: t('ai.greeting') } : msg
        ));
    }, [t]);

    // Mark as initialized after mount
    useEffect(() => {
        hasInitialized.current = true;
    }, []);

    const SUGGESTIONS = t('ai.suggestions', { returnObjects: true }) || [];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const processMessage = (text) => {
        const lowerText = text.toLowerCase();

        // Multi-language keywords matching
        const isSkill = lowerText.includes('skill') || lowerText.includes('stack') || lowerText.includes('tech') || lowerText.includes('compétence') || lowerText.includes('techno') || lowerText.includes('مهار');
        const isProject = lowerText.includes('project') || lowerText.includes('work') || lowerText.includes('portfolio') || lowerText.includes('show') || lowerText.includes('projet') || lowerText.includes('travail') || lowerText.includes('مشاريع') || lowerText.includes('عمل');
        const isContact = lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('reach') || lowerText.includes('contacter') || lowerText.includes('twsal') || lowerText.includes('تواصل') || lowerText.includes('بريد');
        const isExperience = lowerText.includes('experience') || lowerText.includes('history') || lowerText.includes('background') || lowerText.includes('tell') || lowerText.includes('expérience') || lowerText.includes('parcours') || lowerText.includes('خبرة');
        const isHire = lowerText.includes('hire') || lowerText.includes('job') || lowerText.includes('work with') || lowerText.includes('embauch') || lowerText.includes('emploi') || lowerText.includes('توظيف') || lowerText.includes('عمل');
        const isHello = lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey') || lowerText.includes('bonjour') || lowerText.includes('salut') || lowerText.includes('mrhba') || lowerText.includes('مرحبا') || lowerText.includes('اهلين');

        if (isSkill) {
            return t('ai.responses.skills');
        } else if (isProject) {
            return t('ai.responses.projects');
        } else if (isContact) {
            return t('ai.responses.contact');
        } else if (isExperience) {
            return t('ai.responses.experience');
        } else if (isHire) {
            return t('ai.responses.hire');
        } else if (isHello) {
            return t('ai.responses.hello');
        }
        return t('ai.responses.default');
    };

    const handleSend = (text = input) => {
        if (!text.trim()) return;

        const userMsg = { id: Date.now(), role: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const responseText = processMessage(text);
            setMessages(prev => [...prev, { id: Date.now() + 1, role: 'ai', text: responseText }]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="flex flex-col h-full min-h-[350px]">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
                    <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="font-semibold text-white text-sm">{t('ai.title')}</h3>
                    <p className="text-[11px] text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {t('ai.online')}
                    </p>
                </div>
            </div>

            <div className="h-4"></div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto pr-2" ref={scrollRef}>
                <AnimatePresence>
                    {messages.map((msg, index) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            style={{ marginBottom: '12px' }}
                        >
                            {/* AI Avatar */}
                            {msg.role === 'ai' && (
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
                                    <Bot size={14} className="text-white" />
                                </div>
                            )}

                            {/* Message Bubble */}
                            <div
                                className={`max-w-[75%] px-3 py-2 text-[13px] leading-relaxed ${msg.role === 'ai'
                                    ? 'bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm text-white/80'
                                    : 'bg-[#58a6ff] rounded-2xl rounded-tr-sm text-white'
                                    }`}
                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                            >
                                {msg.text}
                            </div>

                            {/* User Avatar */}
                            {msg.role === 'user' && (
                                <div className="w-7 h-7 rounded-full bg-[#58a6ff] flex items-center justify-center shrink-0">
                                    <User size={14} className="text-white" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-2"
                    >
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
                            <Sparkles size={14} className="text-white animate-pulse" />
                        </div>
                        <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="h-4"></div>

            {/* Quick Suggestions */}
            {messages.length <= 2 && (
                <div className="pb-3">
                    <div className="flex flex-wrap gap-2">
                        {SUGGESTIONS.map((suggestion, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(suggestion)}
                                className="px-3 py-1.5 text-[11px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/60 hover:text-white transition-all"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="pt-3 border-t border-white/10">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={t('ai.placeholder')}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-3 pr-10 text-[13px] focus:outline-none focus:border-[#58a6ff]/50 transition-all placeholder-white/30 text-white"
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-1.5 p-1.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg text-white hover:opacity-90 transition-all disabled:opacity-30"
                    >
                        <Send size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AiAssistant;
