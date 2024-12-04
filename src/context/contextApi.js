import { createContext, useEffect, useState } from "react";
import fetchDatafromApi from "../utils/api";
export const Context = createContext();
const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [selectCategory, setSelectCategory] = useState("New");
  const [searchResult, setSearchResult] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedcategoryData(selectCategory);
  }, [selectCategory]);

  const fetchSelectedcategoryData = (query) => {
    setLoading(true);
    fetchDatafromApi(`search/?q=${query}`).then((res) => {
      console.log(res);
      setSearchResult(res);
      setLoading(false);
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          searchResult,
          setSearchResult,
          loading,
          setLoading,
          selectCategory,
          setSelectCategory,
          mobileMenu,
          setMobileMenu,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};

export default AppContext;
