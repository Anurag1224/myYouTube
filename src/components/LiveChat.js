import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Polling Data");
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessages(30),
        })
      );
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-[400px] ml-0 mt-4 m-2 p-2 border border-black rounded-lg overflow-y-scroll h-[512px] shadow-xl flex flex-col-reverse">
      <div>
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
        <form
          className="w-[360px] p-2 m-1 border border-t-4 flex rounded-full"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessages({
                name: "Anurag",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="w-[320px] px-2 border border-gray-400 rounded-full"
            placeholder="Chat"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="rounded-full border border-gray-400 bg-green-200 ml-2 px-2 hover:bg-green-300">
            🪶
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
