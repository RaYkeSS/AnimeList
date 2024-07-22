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
      />
    </>
  );
};

StarRating.propTypes = {
  defaultScore: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  hoverColor: PropTypes.string,
  labelText: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default StarRating;
