import React from "react";
import SideBar from "./SideBar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems";
import Loading from "../loader/Loading";
function Home() {
  const { data, loading } = useAuth();
  console.log(data);
  return (
    <div className="flex mt-24">
      <SideBar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
