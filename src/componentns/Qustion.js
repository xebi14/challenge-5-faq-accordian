import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Question = ({ question, answer }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="article-question">
      <article onClick={() => setIsShowing(!isShowing)}>
        <h2 className={`${isShowing && "clicked"}`}>{question}</h2>
        {isShowing ? (
          <FaChevronUp className="icons" />
        ) : (
          <FaChevronDown className="icons" />
        )}
      </article>
      {isShowing && <p>{answer}</p>}
    </div>
  );
};

export default Question;
