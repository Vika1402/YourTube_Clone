import { Children, createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/RapidApi";

export const AuthContext = createContext();

export default function AuthProvider({children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      setData(contents);
      console.log(contents);
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider value={{loading, data, value, setValue}}>
      {children}
    </AuthContext.Provider>
  );
}
//cusome hook hai
export const useAuth = () => useContext(AuthContext);
