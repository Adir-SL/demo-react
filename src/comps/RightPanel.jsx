import React from 'react';
import "./RightPanel.css";
import LocalSelectableCard from './LocalSelectableCard'

const RightPanel = (props) => {
    return (
        <div className="right-panel">
            <LocalSelectableCard
                title="מפת שטח נשר"
                section="9837463"
                checkbox
                expanded
            />
            <LocalSelectableCard
                title="מפת שטח רכסים"
                section="9736274"
                checkbox
            />
            <LocalSelectableCard
                title="מפת שטח יגור"
                section="9853795"
                checkbox
            />
            <LocalSelectableCard
                title="מפת שטח חיפה"
                section="9736274"
                checkbox
            />
            <LocalSelectableCard
                title="מפת שטח עין הוד"
                section="9028467"
            />
            <LocalSelectableCard
                title="מפת שטח מגדים"
                section="9036554"
            />
            <LocalSelectableCard
                title="מפת שטח הכרמל"
                section="9278555"
            />
            <LocalSelectableCard
                title="מפת שטח תמרה"
                section="9037555"
            />
        </div>
    )
};

export default RightPanel;