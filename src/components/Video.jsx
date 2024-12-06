import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { FaCheckCircle } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { abbreviateNumber } from "js-abbreviation-number";
import { GoDotFill } from "react-icons/go";
function Video({ video }) {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col pl-3">
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
              <div className="flex flex-row items-center space-x-1">
                <span className="text-sm font-semi-bold line-clamp-2">
                  {video?.author?.title}
                </span>

                <span className="text-sm font-bold line-clamp-2">
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <FaCheckCircle className="text-blue-500" />
                  )}
                </span>
              </div>

              <div className="flex items-center text-wrap-none">
                <span className="text-sm">
                  {`${abbreviateNumber(video?.stats?.views)}`}
                </span>
                <span>
                  <GoDotFill className="text-sm" />
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
