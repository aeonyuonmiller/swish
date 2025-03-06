"use client";

import { forwardRef } from "react";

const EditorInfo = forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} style={{ backgroundColor: "hotpink", padding: "1em", borderRadius: 4 }} >
            ⚠️ Please ensure all images are under <strong>500KB</strong> before uploading!
        </div>
    );
});

export { EditorInfo };
