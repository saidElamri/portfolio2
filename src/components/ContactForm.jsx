import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, Mail, Github, Linkedin } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [focused, setFocused] = useState(null);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Note: This is an example. user would need to npm install @emailjs/browser
            // and replace with their actual service/template/public key
            // For now, we simulate a delay for the portfolio effect
            await new Promise(resolve => setTimeout(resolve, 1500));

            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        } catch (error) {
            console.error('Failed to send message:', error);
            setStatus('error');
        }
    };

    return (
        <div>
            {/* Header */}
            <h2 className="text-xl font-bold text-white">{t('contact.title')}</h2>

            <div className="h-3"></div>

            <p className="text-white/50 text-sm">{t('contact.subtitle')}</p>

            <div className="h-6"></div>

            {/* Social Links */}
            <div className="flex gap-3">
                <a
                    href="https://github.com/saidElamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all hover:scale-105"
                    style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
                >
                    <Github className="w-5 h-5" style={{ color: theme.textMuted }} />
                </a>
                <a
                    href="https://linkedin.com/in/saidelamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all hover:scale-105"
                    style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
                >
                    <Linkedin className="w-5 h-5" style={{ color: theme.textMuted }} />
                </a>
                <a
                    href="mailto:said.elamri.evil@gmail.com"
                    className="p-3 rounded-xl transition-all hover:scale-105"
                    style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
                >
                    <Mail className="w-5 h-5" style={{ color: theme.textMuted }} />
                </a>
            </div>

            <div className="h-8"></div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={t('contact.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl outline-none transition-all placeholder:text-white/30"
                    style={{
                        backgroundColor: theme.background,
                        border: `1px solid ${focused === 'name' ? theme.accent : theme.border}`,
                        color: theme.text
                    }}
                />

                <div className="h-4"></div>

                <input
                    type="email"
                    placeholder={t('contact.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl outline-none transition-all placeholder:text-white/30"
                    style={{
                        backgroundColor: theme.background,
                        border: `1px solid ${focused === 'email' ? theme.accent : theme.border}`,
                        color: theme.text
                    }}
                />

                <div className="h-4"></div>

                <textarea
                    placeholder={t('contact.messagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={3}
                    className="w-full px-4 py-3 text-sm rounded-xl outline-none transition-all resize-none placeholder:text-white/30"
                    style={{
                        backgroundColor: theme.background,
                        border: `1px solid ${focused === 'message' ? theme.accent : theme.border}`,
                        color: theme.text
                    }}
                />

                <div className="h-5"></div>

                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-70"
                    style={{
                        backgroundColor: theme.accent,
                        color: theme.background
                    }}
                >
                    <AnimatePresence mode="wait">
                        {status === 'idle' && (
                            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                <Send className="w-4 h-4" />
                                {t('contact.send')}
                            </motion.span>
                        )}
                        {status === 'loading' && (
                            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                {t('contact.sending')}
                            </motion.span>
                        )}
                        {status === 'success' && (
                            <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                {t('contact.success')}
                            </motion.span>
                        )}
                        {status === 'error' && (
                            <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-400">
                                <span>❌</span>
                                {t('contact.error')}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
