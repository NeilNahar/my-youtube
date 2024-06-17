import React, { useEffect, useState } from "react";
import YOUTUBE_URL from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    setApiData(json.items);
  };
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-3">
      {apiData.map((item) => {
        return <VideoCard key={item.id} apiData={item} />;
      })}
    </div>
  );
};

export default VideoContainer;
