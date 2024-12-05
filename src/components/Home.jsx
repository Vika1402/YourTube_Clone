import React from "react";
import SideBar from "./SideBar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
function Home() {
  const { data } = useAuth();
  console.log(data);
  return (
    <div className="flex mt-24">
      <SideBar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {data.map((item) => {
            if (item.type !== "video") return false;
            return <Video key={item.id} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
