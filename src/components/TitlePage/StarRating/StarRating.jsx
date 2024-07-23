import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import StarList from "./StarList";

const StarRating = ({
  defaultScore = 0,
  emptyColor = "grey",
  fillColor = "#edaa10",
  hoverColor = "#ffb712",
  labelTextFn = (value) => `Your Score: ${value}`,
  readOnly = false,
  pointer = true,
  maxStars = 5,
  width = "4em",
  height = "4em",
}) => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    setScore(defaultScore);
  }, [defaultScore]);
  return (
    <>
      <div>{labelTextFn(score)}</div>
      <StarList
        emptyColor={emptyColor}
        fillColor={fillColor}
        hoverColor={hoverColor}
        score={score}
        setScore={setScore}
        readOnly={readOnly}
        pointer={pointer}
        maxStars={maxStars}
        width={width}
        height={height}
      />
    </>
  );
};

StarRating.propTypes = {
  defaultScore: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  hoverColor: PropTypes.string,
  labelTextFn: PropTypes.func,
  readOnly: PropTypes.bool,
  pointer: PropTypes.bool,
  maxStars: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default StarRating;
