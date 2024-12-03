import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col w-full">
      <div className="px-2 flex w-full">
        <div className="ml-12 mr-2 p-4 shadow-xl ">
          <iframe
            width="833"
            height="497"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="Uncaught TypeError: Cannot destructure property &#39;basename&#39; of &#39;React2.useContext(...)&#39; as it is null"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
