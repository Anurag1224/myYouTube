
const Head = () => {
    return (
      <div className="grid grid-flow-col shadow-lg m-2 p-5">
        <div className="flex col-span-2">
          <img
            className=" h-8 mr-4 "
            alt="Menu"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          />
          <img
            className=" h-8 "
            alt="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </div>
        <div className="col-span-9 ml-40">
          <input className = "border border-black rounded-l-full px-2 h-8 w-1/2" type="text"></input>
          <button className = "border border-black rounded-r-full px-2 h-8 ml-1 bg-gray-300" >Search</button>
        </div>
        <div className="col-span-1 ">
          <img
            className=" h-8 "
            alt="User_icon"
            src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          />
        </div>
      </div>
    );
  };
  
  export default Head;
  