import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/RapidApi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    fetchData(`search?q=${query}`).then((res) => {
      setData(res);
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider value={(loading, data, value, setValue)}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
