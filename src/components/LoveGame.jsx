import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What is my special talent?",
    options: [
      "Sleeping anywhere",
      "Overthinking everything",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "When I say 'I’m fine', what do I actually mean?",
    options: [
      "I’m really fine",
      "I need food",
      "I’m upset but won’t say",
      "Run before I explode",
    ],
    answer: "I’m upset but won’t say",
  },
  {
    question: "What happens when you don’t reply on time?",
    options: [
      "I wait calmly",
      "I get busy",
      "I overthink a lot",
      "I plan my revenge",
    ],
    answer: "I overthink a lot",
  },
  {
    question: "What do I do first when I’m angry?",
    options: [
      "Shout",
      "Cry",
      "Stay silent",
      "Send long messages",
    ],
    answer: "Send long messages",
  },
  {
    question: "What is my favorite drama in life?",
    options: [
      "TV serial",
      "Office drama",
      "Relationship fights",
      "My own overthinking",
    ],
    answer: "My own overthinking",
  },
  {
    question: "If I stop talking suddenly, what should you do?",
    options: [
      "Enjoy peace",
      "Give space",
      "Send memes",
      "Come and pamper me",
    ],
    answer: "Come and pamper me",
  },
  {
    question: "What melts my anger fastest?",
    options: [
      "Money",
      "Food",
      "Your care",
      "Time",
    ],
    answer: "Your care",
  },
  {
    question: "Who is always right in our fights?",
    options: [
      "You",
      "Me",
      "Both",
      "Me (obviously)",
    ],
    answer: "Me (obviously)",
  },
];

export default function LoveGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[current].answer;

    if (isCorrect) {
      setScore((prev) => prev + 20);
      setFeedback("Good boy 😌💕");
    } else {
      setFeedback("Uh idiot 😒");
    }

    setShowAnswer(true);

    setTimeout(() => {
      setFeedback("");
      setShowAnswer(false);

      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setFeedback("");
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center">

        {!finished ? (
          <>
            <p className="text-xl sm:text-2xl font-bold mb-4">
              How Much Do You Love Me? 💕
            </p>

            <h2 className="text-black mb-6">
              {questions[current].question}
            </h2>

            <div className="space-y-3">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={feedback !== ""}
                  className="w-full py-2 rounded-xl border border-pink-300
                             hover:bg-pink-100 transition disabled:opacity-50"
                >
                  {option}
                </button>
              ))}
            </div>

            {feedback && (
              <div className="mt-4 space-y-1">
                <p className="text-lg font-semibold text-pink-600">
                  {feedback}
                </p>
                {showAnswer && (
                  <p className="text-sm text-gray-600">
                    Correct answer:{" "}
                    <span className="font-semibold text-black">
                      {questions[current].answer}
                    </span>
                  </p>
                )}
              </div>
            )}

            <p className="mt-6 text-sm text-gray-500">
              Question {current + 1} of {questions.length}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Your Love Score 💖
            </h2>

            <div className="text-4xl font-bold text-pink-500 mb-4">
              {score}%
            </div>

            <p className="text-gray-700 mb-6">
              {score === 160
                ? "Perfect! You know me better than anyone 😂💍"
                : score >= 100
                ? "Not bad… but still learning 😌"
                : "Oh no 😒 come for training!"}
            </p>

       <Link to="/poi-orgh">
  <button
    className="px-6 py-2 bg-pink-500 text-white rounded-xl
               hover:bg-pink-600 transition"
  >
    Please check it again 🔁
  </button>
</Link>


          </>
        )}
      </div>
    </div>
  );
}
