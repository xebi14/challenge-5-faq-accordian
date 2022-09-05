import { useState } from "react";
import { questions } from "./questions";
import mobile from "./images/illustration-woman-online-mobile.svg";
import desktop from "./images/illustration-woman-online-desktop.svg";
import Question from "./componentns/Qustion";

function App() {
  const [quests] = useState(questions);
  return (
    <div className="container">
      <article>
        <picture>
          <source media="(min-width: 760px)" srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>
      <article>
        <h1>FAQ</h1>
        {quests.map((quest) => (
          <Question
            key={quest.id}
            question={quest.question}
            answer={quest.answer}
          />
        ))}
      </article>
    </div>
  );
}

export default App;
