import React from 'react';
import "./LocalSelectableCard.css";

const LocalSelectableCard = (props) => {
    return (
        <div class="card">
            <input type="checkbox" hidden={props.checkbox} />
            <div class="content">
                <div class="icon"></div>
                <div class="inner-content">
                    <b>{props.title}</b>
                    <p>{props.section}</p>
                </div>
            </div>
            <div class="tag">28 עדכונים</div>
        </div>
    )
};

export default LocalSelectableCard;