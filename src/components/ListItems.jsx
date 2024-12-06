import React from "react";

function ListItems() {
  const ytTrendingTopics = [
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Sports",
    "Education",
    "Fashion",
    "Technology",
    "Vlogs",
    "DIY",
    "Food",
    "Travel",
    "Comedy",
    "Fitness",
    "Science",
    "Art",
    "Beauty",
    "Podcasts",
    "Reviews",
    "Live Streams",
  ];
  console.log(ytTrendingTopics);

  return (
    <div className="flex pl-2 mb-3 overflow-hidden overflow-x-scroll">
      {ytTrendingTopics.map((cat) => {
        return (
          <div
            className="flex items-center px-4 m-1 text-gray-700 bg-gray-300 rounded-xl"
            key={ytTrendingTopics}
          >
            {cat}
          </div>
        );
      })}
    </div>
  );
}

export default ListItems;
