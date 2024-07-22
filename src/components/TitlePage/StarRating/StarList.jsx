import { useState } from "react";
import Star from "./Star";

const StarList = ({
  defaultScore,
  emptyColor,
  fillColor,
  score,
  setScore,
  readOnly,
  maxStars,
}) => {
  const styles = {
    firstHalf: "top-2/4 -translate-x-1/2 left-1/4 -translate-y-2/4 w-2/4 h-2/4",
    secondHalf:
      "top-2/4 -translate-x-1/2 left-3/4 -translate-y-2/4 w-2/4 h-2/4",
  };
  const [hover, setHover] = useState();
  function handleClick(event) {
    if (readOnly) return;
    event.preventDefault();
    setScore(event.target.value);
    console.log(score);
  }
  function handleHover(event) {
    if (readOnly) return;
    event.preventDefault();
    setHover(event.target.value);
    console.log(hover);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <input
          className=""
          type="radio"
          onClick={handleClick}
          defaultValue={0}
        />
        {[...Array(maxStars)].map((el, index) => {
          return (
            <div key={index} className="relative hover:bg-primaryBg">
              <Star
                classes={styles.firstHalf}
                handleClick={handleClick}
                handleHover={handleHover}
                emptyColor={emptyColor}
                fillColor={fillColor}
                defaultValue={index + 0.5}
                score={score}
                hover={hover}
              />
              <Star
                classes={styles.secondHalf}
                handleClick={handleClick}
                emptyColor={emptyColor}
                fillColor={fillColor}
                defaultValue={index + 1}
                isSecond
                score={score}
                hover={hover}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StarList;
