import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { fetchData } from "../utils/RapidApi";
import { SiDebian } from "react-icons/si";
import SideBar from "./SideBar";
import SearchCard from "./SearchCard";
function Search() {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();
  const { loading } = useAuth();
  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = () => {
    fetchData(`search/?query=${searchQuery}`).then(({ contents }) => {
      console.log(contents);

      setResult(contents);
    });
  };

  return (
    <div className="">
      <div className="mt-24 flex flex-row h-[calc(100%-56px)]">
        <SideBar />
        <div className="h-[calc(100vh-6.625rem)] w-full overflow-x-hidden overflow-y-scroll scroll-mx-0">
          <div className="grid grid-cols-1 gap-4 p-2 ">
            {result.map((item, index) => {
              if (item?.type !== "video") return false;

              return <SearchCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
