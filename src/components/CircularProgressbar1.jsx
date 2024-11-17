import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress1 = ({ percentage }) => {
  return (
    <div className=" w-[58px] aspect-square">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#6c5ce7", // Color of the text
          pathColor: "#6c5ce7", // Color of the progress path
          trailColor: "#e0e0e0", // Color of the trail path
          textSize: "25px", // Font size of the text
          textStyle: {
            fontFamily: "Inter, sans-serif",
            fontWeight: 1000,
            lineHeight: "18px",
            letterSpacing: "-0.1px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          },
        })}
      />
    </div>
  );
};

export default CircularProgress1;
