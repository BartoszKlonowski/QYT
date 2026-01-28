import React from "react";
import { createRoot } from "react-dom/client";

if (!browser) {
    var browser = require("webextension-polyfill");
}

export const Popup = () => {
    return (
        <></>
    );
}

const element = document.getElementById("root");
if (element) {
    const root = createRoot(element);
    root.render(<Popup />);
}
