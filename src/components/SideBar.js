const SideBar = () => {

    return (
        <div className=" m-2 p-2 shadow-lg w-48">
            <div className="border-b-2">
            <ul>
                <li className="p-1 bg-gray-200 hover:bg-gray-100"><span className="m-2">🏠</span>Home</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">🎥</span>Shorts</li>
                <li className="p-1 mb-2 hover:bg-gray-200"><span className="m-2">🎦</span>Subscriptions</li>
                
            </ul>
            </div>
            <div className="border-b-2">
                <ul>
                <li className="p-1 bg-white hover:bg-gray-200 mt-2"><span className="m-2 font-medium">You {'>'}</span></li>
                <li className="p-1 hover:bg-gray-200 "><span className="m-2">⏳</span>History</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">📃</span>Playlist</li>
                <li className="p-1 hover:bg-gray-200 "><span className="m-2">🎥</span>Your videos</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">💡</span>Your courses</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">🕜</span>Watch later</li>
                <li className="p-1 hover:bg-gray-200 mb-2"><span className="m-2">👍</span>Liked videos</li>
                </ul>
            </div>
            <div className="border-b-2">
                <ul>
                <li className="p-1 bg-white hover:bg-gray-200 mt-2"><span className="m-2 font-medium">Subscription {'>'} </span></li>
                <li className="p-1 hover:bg-gray-200 "><span className="m-2">👤</span>The Lallantop</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">👤</span>ABP News</li>
                <li className="p-1 hover:bg-gray-200 "><span className="m-2">👤</span>Akshay Saini</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">👤</span>T-Series</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">👤</span>Zee Music</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">👤</span>Indian Farmer</li>
                <li className="mb-2 p-1 hover:bg-gray-200"><button><span className="m-2">🔻</span>Show more</button></li>
                
                </ul>
            </div>
            <div className="border-b-2">
                <ul>
                <li className="p-1 bg-white hover:bg-gray-200 mt-2"><span className="m-2 font-medium">Explore </span></li>
                <li className="p-1 hover:bg-gray-200 "><span className="m-2">🔥</span>Trending</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">🛍️</span>Shopping</li>
                <li className="p-1 hover:bg-gray-200 "><span className="m-2">🎵</span>Music</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">🎦</span>Movies</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">🟢</span>Live</li>
                <li className="p-1 hover:bg-gray-200"><span className="m-2">🎮</span>Game</li>
                <li className="mb-2 p-1 hover:bg-gray-200"><span className="m-2">📰</span>news</li>
                
                </ul>
            </div>
        </div>
    );
};

export default SideBar;