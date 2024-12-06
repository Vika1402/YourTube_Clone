import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { fetchData } from "../utils/RapidApi";
import { SiDebian } from "react-icons/si";
import SideBar from "./SideBar";
function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { loading } = useAuth();
  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = () => {
    fetchData(`search/?=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };
  return (
    <div className="">
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export default Search;
