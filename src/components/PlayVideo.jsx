import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { fetchData } from "../utils/RapidApi";
import SuggestedVideo from "./SuggestedVideo";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [realatedVideo, setRelativeVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      setVideo(res);
    });
  };
  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelativeVideo(res);
    });
  };

  return (
    <div className=" flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0 ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="mt-4 text-sm font-bold md:text-xl line-clamp-2">
            {video?.title}
          </div>
          <div className="flex flex-col justify-between mt-4 md:flex-row">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex overflow-hidden rounded-full h-11 w-11">
                  <img
                    className="object-cover w-full h-full"
                    src={video?.author?.avatar[1]?.url}
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="flex items-center font-semibold text-md">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className="text-sm ">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                <span className="px-3 pt-2 mt-1 text-center text-white duration-200 bg-red-500 rounded-full cursor-pointer hover:bg-red-700 ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="mr-2 text-xl" />
                {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>
          <div className="p-4 mt-4 text-sm bg-gray-100 rounded-xl">
            {video?.description}
          </div>
          <div className="flex mt-4 text-xl font-semibold gap-x-6 rounded-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden ">
          {realatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
