import React from 'react';
import "./LocalSelectableCard.css";

const LocalSelectableCard = (props) => {
    function clickFunc(event) {
        var target = event.target.parentNode.parentNode.parentNode;
        if (target.classList.contains('expanded')) {
            target.classList.remove('expanded');
        } else {
            target.classList.add('expanded');
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