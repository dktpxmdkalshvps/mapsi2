"use client";
import { useState } from "react";
import { PC_QUIZ_STAGE1, PC_QUIZ_WARM, PC_QUIZ_COOL, WarmCool } from "../data";

interface PersonalColorQuizStepProps {
  onComplete: (pcId: string) => void;
}

type QuizStage = "stage1" | "stage2";

export default function PersonalColorQuizStep({ onComplete }: PersonalColorQuizStepProps) {
  const [stage, setStage] = useState<QuizStage>("stage1");
  const [stage1Answers, setStage1Answers] = useState<WarmCool[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [warmCool, setWarmCool] = useState<WarmCool | null>(null);
  const [selected2, setSelected2] = useState<string | null>(null);

  const handleStage1Answer = (answer: WarmCool) => {
    const newAnswers = [...stage1Answers, answer];
    setStage1Answers(newAnswers);

    if (currentQ < PC_QUIZ_STAGE1.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const wCount = newAnswers.filter((a) => a === "웜").length;
      const result: WarmCool = wCount >= newAnswers.length / 2 ? "웜" : "쿨";
      setWarmCool(result);
      setStage("stage2");
    }
  };

  const stage2Question = warmCool === "웜" ? PC_QUIZ_WARM : PC_QUIZ_COOL;

  if (stage === "stage1") {
    const q = PC_QUIZ_STAGE1[currentQ];
    return (
      <div className="step-enter w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-muted mb-3 opacity-60"
            style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em" }}
          >
            퍼스널컬러 진단
          </p>
          <h2
            className="font-display text-charcoal mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 7vw, 2.6rem)", fontWeight: 400 }}
          >
            내 피부 바탕색 찾기
          </h2>
          {/* Progress dots */}
          <div className="flex justify-center gap-2">
            {PC_QUIZ_STAGE1.map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: i === currentQ ? "20px" : "7px",
                  height: "7px",
                  backgroundColor: i <= currentQ ? "var(--rose)" : "var(--rose-light)",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Question card */}
        <div className="glass-card rounded-[28px] p-7 mb-5">
          <p
            className="font-bold text-muted mb-4"
            style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.16em" }}
          >
            Q{currentQ + 1}
          </p>
          <p
            className="font-medium text-charcoal leading-relaxed mb-7"
            style={{ fontSize: "17px" }}
          >
            {q.question}
          </p>

          <div className="space-y-3">
            {q.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleStage1Answer(opt.value)}
                className="quiz-option w-full text-left rounded-[20px] p-4 flex items-start gap-4 border-l-2 border-transparent"
                style={{ background: "rgba(253,251,247,0.8)" }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{opt.emoji}</span>
                <span className="text-charcoal leading-relaxed" style={{ fontSize: "15px" }}>
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-muted" style={{ fontSize: "12px" }}>
          {currentQ + 1} / {PC_QUIZ_STAGE1.length}
        </p>
      </div>
    );
  }

  // Stage 2
  const isWarm = warmCool === "웜";
  return (
    <div className="step-enter w-full">
      <div className="text-center mb-10">
        {/* Tone badge */}
        <div
          className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 mb-6"
          style={{
            background: isWarm
              ? "linear-gradient(135deg, rgba(232,168,124,0.2), rgba(251,243,219,0.4))"
              : "linear-gradient(135deg, rgba(147,197,253,0.2), rgba(219,234,254,0.4))",
            border: `1px solid ${isWarm ? "rgba(232,168,124,0.4)" : "rgba(147,197,253,0.4)"}`,
          }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: isWarm ? "#E8A87C" : "#7B9FBE" }}
          />
          <span
            className="font-semibold"
            style={{ fontSize: "13px", color: isWarm ? "#B87B4A" : "#4A7B9B" }}
          >
            {isWarm ? "웜톤" : "쿨톤"}이군요!
          </span>
        </div>

        <h2
          className="font-display text-charcoal mb-2 leading-tight tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 7vw, 2.6rem)", fontWeight: 400 }}
        >
          어울리는 색깔 찾기
        </h2>
        <p className="text-muted" style={{ fontSize: "14px" }}>더 잘 어울리는 색을 골라보세요</p>
      </div>

      <div className="glass-card rounded-[28px] p-7 mb-5">
        <p className="font-medium text-charcoal leading-relaxed mb-6" style={{ fontSize: "17px" }}>
          {stage2Question.question}
        </p>

        <div className="space-y-3">
          {stage2Question.options.map((opt) => (
            <button
              key={opt.pcId}
              onClick={() => setSelected2(opt.pcId)}
              className={`quiz-option w-full text-left rounded-[20px] p-4 flex items-center gap-4 border transition-all duration-300 ${
                selected2 === opt.pcId
                  ? "selected"
                  : ""
              }`}
              style={{
                background: selected2 === opt.pcId
                  ? "rgba(196,91,124,0.05)"
                  : "rgba(253,251,247,0.8)",
                borderColor: selected2 === opt.pcId
                  ? "var(--rose-light)"
                  : "transparent",
              }}
            >
              <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
              <div className="flex-1">
                <p className="text-charcoal leading-relaxed" style={{ fontSize: "14px" }}>
                  {opt.label}
                </p>
                <p className="font-semibold mt-1" style={{ fontSize: "12px", color: "var(--rose)" }}>
                  → {opt.colorLabel}
                </p>
              </div>
              {selected2 === opt.pcId && (
                <div
                  className="check-pop flex items-center justify-center text-white rounded-full flex-shrink-0"
                  style={{ width: "24px", height: "24px", fontSize: "11px", background: "var(--rose)" }}
                >
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <button
        className="btn-primary w-full"
        disabled={!selected2}
        onClick={() => selected2 && onComplete(selected2)}
      >
        퍼스널컬러 확정
      </button>
    </div>
  );
}
