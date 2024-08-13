import React from 'react';
import "./LocalSelectableCard.css";

const LocalSelectableCard = (props) => {
    function clickFunc(event) {
        if (event.target.parentNode.parentNode.parentNode.classList.contains('expanded')) {
            event.target.parentNode.parentNode.parentNode.classList.remove('expanded');
        } else {
            event.target.parentNode.parentNode.parentNode.classList.add('expanded');
        }
    }
    return (
        <div class={(props.expanded ? 'card expanded' : 'card')}>
            <input type="checkbox" hidden={!props.checkbox} />
            <div class="content">
                <div class="icon"></div>
                <div class="inner-content">
                    <b onClick={(event) => {
                        clickFunc(event)
                    }}
                    >{props.title}</b>
                    <p>{props.section}</p>
                </div>
            </div>
            <div class="tag">28 עדכונים</div>
        </div>
    )
};

export default LocalSelectableCard;