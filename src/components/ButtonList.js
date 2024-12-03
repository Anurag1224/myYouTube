import Button from "./Button";
import React from "react";

const ButtonList = () => {
  const list = [
    "All",
    "Game",
    "Song",
    "Movie",
    "Sports",
    "News",
    "Mixes",
    "Live",
    "Cricket",
    "Algorithms",
    "Cooking",
    "Math",
    "Clothing",
    "Electronics",
    // "Sports",
    // "News",
    // "Mixes",
    // "Live",
    // "Cricket",
    // "Algorithms",
    // "Cooking",
    // "Math",
    // "Clothing",
    // "Electronics",
  ];

  return (
    <div className="flex ml-4">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
