import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';

function AccordionItem({ header, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            style={{
                background: '#e9e7e787',
                borderRadius: '32px',
                padding: '10px',
                marginBottom: '1rem',
                cursor: 'pointer',
            }}
        >
            <AnimatePresence sync="wait">
                <motion.h5
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    layout
                >
                    {header}
                </motion.h5>
                <LayoutGroup>
                    {isOpen && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, height: 1 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 1 }}
                            style={{ overflow: 'hidden', height: 'auto' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                style={{ padding: '10px 0' }}
                            >
                                {content}
                            </motion.div>
                        </motion.div>
                    )}
                </LayoutGroup>

            </AnimatePresence>
        </motion.div>
    );
}

export default function AccordionDos({ items }) {
    return (
        <LayoutGroup>
            {items.map((item, index) => (
                <AccordionItem key={index} header={item.header} content={item.content} />
            ))}
        </LayoutGroup>
    );
}
