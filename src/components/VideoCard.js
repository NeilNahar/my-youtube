import React from 'react'

const VideoCard = (props) => {
    const {snippet, statistics}=props.apiData
    let viewCount=""
    if(statistics?.viewCount>=1000000){
        viewCount=Math.floor(statistics?.viewCount/1000000).toString() + "M"
    }
    else if(statistics?.viewCount>=1000){
        viewCount=Math.floor(statistics?.viewCount/1000).toString() + "K"
    }
    else{
        viewCount=statistics?.viewCount
    }
    // console.log(props.apiData)
  return (
    <div className="flex flex-col gap-1">
        <img className="rounded-lg" src={snippet?.thumbnails?.maxres?.url} alt="" />
        <ul className="flex flex-col gap-1">
            <li className="text-sm font-bold">{snippet?.title}</li>
            <li className="text-xs">{snippet?.channelTitle}</li>
            <li>
                <div className="text-xs">{viewCount} Views</div>
            </li>
        </ul>
    </div>
  )
}

export default VideoCard