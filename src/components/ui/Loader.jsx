import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        setTimeout(() => onComplete?.(), 500);
                    }, 300);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 120);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="loader-overlay"
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <div className="loader-ring" />
                    <div className="loader-text">Chargement</div>
                    <div className="loader-progress">
                        <div
                            className="loader-progress-bar"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
