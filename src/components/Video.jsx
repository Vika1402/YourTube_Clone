import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
function Video({ video }) {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          <div className="relative h-48 overflow-hidden duration-200 md:h-56 md: rounded-xl hover:rounded-none">
            <img
              className="w-full h-full"
              src={video?.thumbnails[0]?.url}
              alt="thumnail"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              <div className="flex overflow-hidden border rounded-full h-9 w-9">
                <img
                  className="w-full h-full overflow-hidden rounded-full"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>
            </div>

            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
