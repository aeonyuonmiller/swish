"use client";

import { forwardRef } from "react";

const EditComponent = forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => {
    const message = props?.value || "ℹ️ Default info for the editor."; // Fallback message

    return (
        <div
            ref={ref}
            style={{
                padding: "10px",
                backgroundColor: "#eef6ff",
                color: "#1a4c8a",
                border: "1px solid #99c2ff",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "bold",
            }}
        >
            {message}
        </div>
    );
});

export { EditComponent };
