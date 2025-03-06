"use client";

import { forwardRef } from "react";

const EditComponent = forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => {
    const message = props?.value || "ℹ️ Default info for the editor."; // Fallback message

    return (
        <div ref={ref} className="editor-info">
            {message}
        </div>
    );
});

export { EditComponent };