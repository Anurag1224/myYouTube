const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-6"
        alt="User"
        src="https://www.iconpacks.net/icons/5/free-icon-no-profile-picture-15260.png"
      />
      <span className="px-2 text-sm font-medium">{name}</span>
      <span className=" text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
