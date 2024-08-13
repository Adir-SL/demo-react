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
        <div className={(props.expanded ? 'card expanded' : 'card')}>
            <div className="card-header">
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
            <div className={(props.expanded ? 'card-body' : 'card-body hidden')}>
                <div className="local-list">
                    <h3>כל העדכונים</h3>
                    <div>עדכון כבישים</div>
                    <div>עדכון בתים </div>
                    <div>עדכון ציר מרכזי</div>
                    <div>עדכון מסרי רחובות</div>
                    <div>עדכון תא שטח</div>
                    <div>עדכון גזרה</div>
                    <div>עדכון צירים</div>
                    <div>עדכון יער</div>
                </div>
            </div>
        </div>
    )
};

export default LocalSelectableCard;