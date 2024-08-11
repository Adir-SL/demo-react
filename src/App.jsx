import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import "./App.css";

const App = () => {

    return (
        <div className="app-flex">
            WORKING!
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);