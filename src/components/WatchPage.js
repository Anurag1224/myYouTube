import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main-container flex flex-row w-screen h-auto absolute -z-10">
      <div className="video-comment-container  pl-16 py-4 flex-col w-8/12">
        <div className="video-container w-full h-[520px] rounded-xl shadow-xl">
          <iframe
            className="rounded-xl shadow-lg h-full w-full"
            width=""
            height=""
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="Uncaught TypeError: Cannot destructure property &#39;basename&#39; of &#39;React2.useContext(...)&#39; as it is null"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="video-title border border-black my-1 p-2 w-full h-20 rounded-xl">
          video title
        </div>

        <div className="comment-container w-full ">
          <CommentsContainer />
        </div>
      </div>

      <div className="chat-videoFeed-container m-4 mx-8 w-3/12 ">
        <div className="chat-container border border-gray-400 rounded-xl h-[578px] shadow-xl">
          <LiveChat />
        </div>
        {/* <div className="videofeed-container border border-black mt-6 p-2 w-full">
          
         video feed
        </div> */}
      </div>
    </div>
  );
};

export default WatchPage;
