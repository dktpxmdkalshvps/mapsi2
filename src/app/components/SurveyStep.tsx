"use client";
import { useState } from "react";
import { SURVEY_QUESTIONS, SurveyAnswer, calculateStyleResult } from "../data";

interface SurveyStepProps {
  onComplete: (result: string, fitType: "T" | "L") => void;
}

export default function SurveyStep({ onComplete }: SurveyStepProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, SurveyAnswer>>({});
  const [fitType, setFitType] = useState<"T" | "L">("T");
  const [animating, setAnimating] = useState(false);

  const current = SURVEY_QUESTIONS[currentIdx];
  const total = SURVEY_QUESTIONS.length;
  const progress = (currentIdx / total) * 100;

  const handleAnswer = (answer: SurveyAnswer) => {
    if (animating) return;

    const newAnswers = { ...answers, [current.id]: answer };
    setAnswers(newAnswers);

    if (current.isFit) {
      setFitType(answer === "A" ? "T" : "L");
    }

    if (currentIdx < total - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIdx(currentIdx + 1);
        setAnimating(false);
      }, 320);
    } else {
      const result = calculateStyleResult(newAnswers);
      const finalFit =
        answer === "A" && current.isFit ? "T" : current.isFit ? "L" : fitType;
      setTimeout(() => onComplete(result, finalFit), 400);
    }
  };

  return (
    <div className="w-full">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <p className="text-muted" style={{ fontSize: "12px" }}>
            {currentIdx + 1} / {total}
          </p>
          <p className="font-semibold" style={{ fontSize: "12px", color: "var(--rose)" }}>
            {current.category}
          </p>
        </div>
        {/* Progress bar */}
        <div
          className="rounded-full overflow-hidden"
          style={{ height: "5px", background: "var(--rose-light)" }}
        >
          <div
            className="h-full rounded-full progress-fill"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, var(--rose-light), var(--rose))",
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        className={`step-enter transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
        key={current.id}
      >
        <div className="glass-card rounded-[28px] p-7 mb-5">
          {/* Question number badge */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex items-center justify-center text-white rounded-full font-bold"
              style={{
                width: "28px",
                height: "28px",
                fontSize: "12px",
                background: "var(--rose)",
                flexShrink: 0,
              }}
            >
              {currentIdx + 1}
            </div>
            <span className="text-muted font-medium" style={{ fontSize: "12px" }}>
              {current.category}
            </span>
          </div>

          <p className="font-semibold text-charcoal leading-relaxed mb-7" style={{ fontSize: "17px" }}>
            {current.question}
          </p>

          {/* Options */}
          <div className="space-y-3">
            {(["A", "B"] as const).map((opt) => {
              const option = opt === "A" ? current.optionA : current.optionB;
              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="w-full text-left rounded-[20px] p-4 transition-all duration-300 border-2 border-transparent group"
                  style={{
                    backgroundColor: "rgba(253,251,247,0.9)",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--rose-light)";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(242,212,223,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(253,251,247,0.9)";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full font-bold"
                      style={{
                        width: "28px",
                        height: "28px",
                        fontSize: "11px",
                        background: "var(--rose-light)",
                        color: "var(--rose)",
                      }}
                    >
                      {opt}
                    </div>
                    <div className="flex-1">
                      <p className="text-charcoal leading-relaxed" style={{ fontSize: "14px" }}>
                        {option.text}
                      </p>
                      <span className="text-lg mt-1 block">{option.emoji}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dot nav */}
        <div className="flex justify-center gap-1.5 flex-wrap max-w-xs mx-auto">
          {SURVEY_QUESTIONS.map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === currentIdx ? "18px" : "5px",
                height: "5px",
                backgroundColor:
                  i < currentIdx
                    ? "var(--rose)"
                    : i === currentIdx
                    ? "var(--rose)"
                    : "var(--rose-light)",
                opacity: i < currentIdx ? 0.5 : 1,
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
