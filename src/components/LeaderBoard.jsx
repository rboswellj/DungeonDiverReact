import React from "react";

const LeaderBoard = () => {
    return (
        <div id="leaderBoard" className="container-sm">
            <h5 className="sidebarHead titles">Leader Board</h5>
            <h6 className="sidebarHead titles">Level 1</h6>
            <div className="leaderboard">
            <ol id="level1LeaderList"></ol>
            </div>
        </div>
    );
}

export default LeaderBoard;