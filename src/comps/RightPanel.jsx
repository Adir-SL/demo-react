import React from 'react';
import "./RightPanel.css";
import Card from './Card'

const RightPanel = (props) => {
    return (
        <div className="right-panel">
            <Card
                title="מפת שטח נשר"
                section="9837463"
            />
            <Card
                title="מפת שטח רכסים"
                section="9736274"
            />
            <Card
                title="מפת שטח יגור"
                section="9853795"
            />
            <Card
                title="מפת שטח חיפה"
                section="9736274"
            />
            <Card
                title="מפת שטח עין הוד"
                section="9028467"
            />
            <Card
                title="מפת שטח מגדים"
                section="9036554"
            />
            <Card
                title="מפת שטח הכרמל"
                section="9278555"
            />
            <Card
                title="מפת שטח תמרה"
                section="9037555"
            />
        </div>
    )
};

export default RightPanel;