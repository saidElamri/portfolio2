import React from 'react';
import { MotionConfig } from 'framer-motion';
import useThemeStore from '../stores/themeStore';

export const MotionProvider = ({ children }) => {
    const reducedMotion = useThemeStore((state) => state.reducedMotion);

    return (
        <MotionConfig reducedMotion={reducedMotion ? 'always' : 'never'}>
            {children}
        </MotionConfig>
    );
};

export default MotionProvider;
