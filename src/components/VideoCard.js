import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 mx-2 mb-5 w-[344px] shadow-md ">
      <img
        className="rounded-lg m-1"
        alt="Thumbnail"
        src={thumbnails.medium.url}
      />
      <div>
        <ul>
          <li className="font-medium py-1"> {title} </li>
          <li> {channelTitle} </li>
          <li> {statistics.viewCount} views </li>
        </ul>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className=" border-red-900 border-t-2">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
