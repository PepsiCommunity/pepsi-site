'use client';

// HUGE thanks to Oarer (GitHub: @oarer) for this code snippet!

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef } from 'react';

function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    if (!frozen) {
        return <>{props.children}</>;
    }

    return (
        <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
    );
}

const variants = {
    hidden: { opacity: 0, scale: 0.99, y: 10 },
    enter: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.99, y: 10 }
};

export const RootTransitionEffect = ({ children }: { children: React.ReactNode }) => {
    const key = usePathname();

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={key}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{
                    opacity: { duration: 0.5, delay: 0.1, ease: 'easeOut' },
                    y: { duration: 0.5, delay: 0.1, ease: 'easeOut' },
                    scale: { duration: 0.5, delay: 0.1, ease: 'easeOut' }
                }}
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
};
