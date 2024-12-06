import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import Time from "../loader/Time";
function SuggestedVideo({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex pl-3 mb-3">
          <div className="relative w-40 h-24 min-w-[168px] xl:w-40 lg:min-w-[128px] xl:min-w-[168px] lg:w-32 overflow-hidden duration-200 md:h-20 xl:h-24 md: rounded-xl hover:rounded-none">
            <img
              className="w-full h-full rounded-lg"
              src={video?.thumbnails[0]?.url}
              alt="thumnail"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start"></div>

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

export default SuggestedVideo;
