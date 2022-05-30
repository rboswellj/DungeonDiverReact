import React from "react";
import PlayerStats from "./PlayerStats.jsx";
import GameContainer from "./GameContainer.jsx";
import LeaderBoard from "./LeaderBoard.jsx";

const Main = () => {
    return (
        <div className="container main">
          <div className="row">
            <div className="col-2">
              <PlayerStats />
            </div>
            <div className="col-7">
              <GameContainer /> 
            </div>
            <div className="col-3">
              <LeaderBoard />
            </div>
          </div>
        </div>
    );
}

export default Main;