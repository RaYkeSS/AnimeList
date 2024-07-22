import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import StarList from "./StarList";

const StarRating = ({
  defaultScore = 0,
  emptyColor = "grey",
  fillColor = "yellow",
  labelText = (value) => `MAL Score: ${value}`,
  readOnly = false,
  maxStars = 5,
}) => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    setScore(defaultScore);
  }, [defaultScore]);
  return (
    <>
      <div>{labelText(score)}</div>
      <StarList
        emptyColor={emptyColor}
        fillColor={fillColor}
        score={score}
        setScore={setScore}
        readOnly={readOnly}
        maxStars={maxStars}
      />
    </>
  );
};

StarRating.propTypes = {
  defaultScore: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  labelText: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default StarRating;
