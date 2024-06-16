import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonLabels = [
    "All",
    "Music",
    "Web Series",
    "News",
    "Dramedy",
    "Live",
    "Mixes",
    "Satire",
    "Playlist",
    "Debates",
    "Thrillers",
    "Sketch Comedy",
    "Radios",
    "Chilling",
    "Playlist",
    "Debates",
    "Thrillers",
    "Sketch Comedy",
    "Radios",
    "Chilling",
  ];
  return (
    <div className="text-xl grid grid-flow-col p-3">
      <button className="pe-4">&lt;</button>
      <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
        {buttonLabels.map((item, index) => {
          return <Button key={index} label={item} />;
        })}
      </div>
      <button className="ps-4">&gt;</button>
    </div>
  );
};

export default ButtonList;
