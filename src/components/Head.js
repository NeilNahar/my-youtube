import React from "react";
import { useDispatch } from "react-redux"
import { sideBarToggle } from "../utils/appSlice"

const Head = () => {
  const dispatch = useDispatch()
  return (
    <div className="grid grid-cols-12 border-2 shadow-md">
      <div className="col-span-2 flex items-center gap-1 px-3">
        <img className="w-6 h-6 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" onClick={() => dispatch(sideBarToggle())} alt="hamburger-icon" />
        <img className="w-24" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg.webp" alt="youtube-logo" />
      </div>
      <div className="col-span-8 flex justify-center items-center">
        <input type="text" className="w-96 h-6 p-4 text-sm rounded-l-full outline-0 border-y border-l border-zinc-400" placeholder="Search" />
        <button className="bg-gray-100 px-6 py-2 rounded-r-full border border-zinc-400">
          <img className="w-4" src="https://www.svgrepo.com/show/157848/search.svg" alt="input-search" />
        </button>
      </div>
      <div className="col-span-2 flex justify-end items-center px-3">
        <img className="w-8 h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
