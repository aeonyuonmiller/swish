import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

function AccordionItem({ id, header, content, mode, groupName }) {
    const inputId = `accordion-${id}`;

    return (
        <div
            style={{
                marginBottom: '1rem',
                borderRadius: '32px',
                background: '#e9e7e787',
                overflow: 'hidden',
            }}
        >
            <input
                type={mode === 'radio' ? 'radio' : 'checkbox'}
                name={mode === 'radio' ? groupName : undefined}
                id={inputId}
                style={{ display: 'none' }}
            />
            <label
                htmlFor={inputId}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 16px',
                    cursor: 'pointer',
                }}
            >
                <h3 style={{ margin: 0 }}>{header}</h3>
                <svg
                    style={{
                        width: '44px',
                        height: '44px',
                        transition: 'transform 0.3s',
                    }}
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
            </label>

            <style>
                {`
                #${inputId}:checked + label svg {
                    transform: rotate(135deg);
                }
                #${inputId}:checked ~ .content {
                    display: block;
                }
            `}
            </style>

            <AnimatePresence sync="wait" initial={false}>
                <motion.div
                    className="content"
                    style={{ display: 'none', padding: '0 16px 10px 16px', overflow: 'clip' }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        {content}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function AccordionTres({ items, mode = 'checkbox' }) {
    const groupName = `accordion-group-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <LayoutGroup>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    id={index}
                    header={item.header}
                    content={item.content}
                    mode={mode}
                    groupName={groupName}
                />
            ))}
        </LayoutGroup>
    );
}
