import { useState } from "react";
import Star from "./Star";

const StarList = ({
  emptyColor,
  fillColor,
  hoverColor,
  score,
  setScore,
  readOnly,
  pointer,
  maxStars,
  width,
  height,
}) => {
  const styles = {
    zero: "absolute top-2/4 -translate-x-1/2 left-0 -translate-y-2/4 h-full z-10 opacity-0",
    firstHalf:
      "absolute top-2/4 -translate-x-1/2 left-1/4 -translate-y-2/4 w-2/4 h-full z-10 opacity-0",
    secondHalf:
      "absolute top-2/4 -translate-x-1/2 left-3/4 -translate-y-2/4 w-2/4 h-full z-10 opacity-0",
    pointerStyle: " cursor-pointer",
  };
  const [hover, setHover] = useState();
  function handleClick(event) {
    if (readOnly) return;
    event.preventDefault();
    setScore(event.target.value);
    console.log(hover, score);
  }
  function handleHover(event) {
    if (readOnly) return;
    event.preventDefault();
    setHover(event.target.value);
  }
  return (
    <>
      <div className="flex items-center justify-center relative">
        <input
          className={pointer ? styles.zero + styles.pointerStyle : styles.zero}
          type="radio"
          onClick={handleClick}
          onMouseEnter={(e) => e.preventDefault()}
          defaultValue={"unset"}
        />

        {[...Array(maxStars)].map((el, index) => {
          return (
            <div key={index} className="relative">
              <Star
                classes={
                  pointer
                    ? styles.firstHalf + styles.pointerStyle
                    : styles.firstHalf
                }
                handleClick={handleClick}
                handleHover={handleHover}
                emptyColor={emptyColor}
                fillColor={fillColor}
                hoverColor={hoverColor}
                defaultValue={(index + 1) * 2 - 1}
                score={score}
                hover={hover}
                setHover={setHover}
                width={width}
                height={height}
              />
              <Star
                classes={
                  pointer
                    ? styles.secondHalf + styles.pointerStyle
                    : styles.secondHalf
                }
                handleClick={handleClick}
                handleHover={handleHover}
                emptyColor={emptyColor}
                fillColor={fillColor}
                hoverColor={hoverColor}
                defaultValue={(index + 1) * 2}
                isSecond
                score={score}
                hover={hover}
                setHover={setHover}
                width={width}
                height={height}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StarList;
