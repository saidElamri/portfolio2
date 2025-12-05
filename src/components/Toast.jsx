import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';

const ToastContext = createContext(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
};

const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertTriangle
};

const colors = {
    success: { bg: 'from-green-500/20 to-green-600/10', border: 'border-green-500/30', icon: 'text-green-400' },
    error: { bg: 'from-red-500/20 to-red-600/10', border: 'border-red-500/30', icon: 'text-red-400' },
    info: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/30', icon: 'text-blue-400' },
    warning: { bg: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/30', icon: 'text-yellow-400' }
};

const Toast = ({ id, message, type = 'info', onClose }) => {
    const Icon = icons[type];
    const color = colors[type];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            className={`
                flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-xl
                bg-gradient-to-r ${color.bg} border ${color.border}
                shadow-xl min-w-[280px] max-w-[400px]
            `}
        >
            <Icon className={`w-5 h-5 ${color.icon} shrink-0`} />
            <span className="flex-1 text-sm text-white/90">{message}</span>
            <button
                onClick={() => onClose(id)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
                <X className="w-4 h-4 text-white/50" />
            </button>
        </motion.div>
    );
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'info', duration = 3000) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);

        if (duration > 0) {
            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== id));
            }, duration);
        }

        return id;
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const toast = {
        show: (message, type, duration) => addToast(message, type, duration),
        success: (message) => addToast(message, 'success'),
        error: (message) => addToast(message, 'error'),
        info: (message) => addToast(message, 'info'),
        warning: (message) => addToast(message, 'warning'),
    };

    return (
        <ToastContext.Provider value={toast}>
            {children}

            {/* Toast Container */}
            <div className="fixed top-20 right-4 z-[400] flex flex-col gap-2">
                <AnimatePresence mode="popLayout">
                    {toasts.map(t => (
                        <Toast key={t.id} {...t} onClose={removeToast} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export default ToastProvider;
