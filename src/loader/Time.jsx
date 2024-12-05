import moment from "moment";
import React from "react";

function Time({ time }) {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("HH:mm;ss");
  return (
    <div>
      <span className="absolute px-2 py-1 text-xs text-white rounded-md bg-black/90 bottom-2 right-2">
        {videoTime}
      </span>
    </div>
  );
}

export default Time;
