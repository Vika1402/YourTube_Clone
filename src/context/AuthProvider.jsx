import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/RapidApi";

export const AuthContext = createContext();

export default AuthProvider;

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = async (query) => {
    setLoading(true);
    try {
      const response = await fetchData(`search/?q=${query}`);
      const { contents } = response;
      setData(contents);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook hai
export const useAuth = () => useContext(AuthContext);
