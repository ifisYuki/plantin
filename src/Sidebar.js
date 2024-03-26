import React from "react";
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">  {/* 注意这里改为小写 */}
            <div className="sidebar">
                <div className="sidebar__top">
                    <img 
                        src="https://yukizhuyue.com/wp-content/uploads/2024/03/adcca97f411edc3ebef36b047834586f-e1711409080898.jpg" 
                        alt="" 
                    />
                    <Avatar className="sidebar__avatar" /> {/* 更正类名 */}
                    <h2>Arabidopsis pulchraflora</h2>
                    <h4>Model Organism/ Watercolor Muse/ Street Performer/ Therapist</h4>
                </div>

                <div className="sidebar__status">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statNumber">2543</p> {/* 更正类名 */}
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="sidebar__statNumber">2248</p> {/* 更正类名 */}
                    </div>
                </div>

                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('Model Organism')}
                    {recentItem('Watercolor Muse')}
                    {recentItem('Street Performer')}
                    {recentItem('Therapist')}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;