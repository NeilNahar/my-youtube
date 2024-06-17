import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sideBarShow = useSelector((state) => state.app.sideBarShow);
  return (
    <>
      {sideBarShow && (
        <div className="flex-none w-48 text-sm flex flex-col gap-3 p-3">
          <div>
            <ul>
              <li className="p-1">Home</li>
              <li className="p-1">Playlist</li>
              <li className="p-1">Your Videos</li>
              <li className="p-1">Watch Later</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold p-1">Subscriptions</h2>
            <ul>
              <li className="p-1">Music</li>
              <li className="p-1">Sports</li>
              <li className="p-1">Games</li>
              <li className="p-1">Movies</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold p-1">Watch Later</h2>
            <ul>
              <li className="p-1">Music</li>
              <li className="p-1">Sports</li>
              <li className="p-1">Games</li>
              <li className="p-1">Movies</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
