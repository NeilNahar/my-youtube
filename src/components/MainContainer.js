import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="border-2 border-indigo-600">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
