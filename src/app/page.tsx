"use client";
import { useState, useCallback } from "react";
import { Gender, getPersonaById } from "./data";
import GenderStep from "./components/GenderStep";
import PersonalColorStep from "./components/PersonalColorStep";
import PersonalColorQuizStep from "./components/PersonalColorQuizStep";
import SurveyStep from "./components/SurveyStep";
import ResultStep from "./components/ResultStep";

type Step =
  | "gender"
  | "personalColor"
  | "personalColorQuiz"
  | "survey"
  | "result";

interface AppState {
  step: Step;
  gender: Gender | null;
  personalColorId: string | null;
  styleResult: string | null;
  fitType: "T" | "L";
}

const STEP_NUMBERS: Record<Step, number> = {
  gender: 1,
  personalColor: 2,
  personalColorQuiz: 3,
  survey: 4,
  result: 5,
};

export default function HomePage() {
  const [state, setState] = useState<AppState>({
    step: "gender",
    gender: null,
    personalColorId: null,
    styleResult: null,
    fitType: "T",
  });

  const handleGenderSelect = useCallback((gender: Gender) => {
    setState((s) => ({ ...s, gender, step: "personalColor" }));
  }, []);

  const handlePersonalColorSelect = useCallback((pcId: string) => {
    setState((s) => ({ ...s, personalColorId: pcId, step: "survey" }));
  }, []);

  const handleDontKnow = useCallback(() => {
    setState((s) => ({ ...s, step: "personalColorQuiz" }));
  }, []);

  const handlePersonalColorQuizComplete = useCallback((pcId: string) => {
    setState((s) => ({ ...s, personalColorId: pcId, step: "survey" }));
  }, []);

  const handleSurveyComplete = useCallback(
    (result: string, fitType: "T" | "L") => {
      setState((s) => ({ ...s, styleResult: result, fitType, step: "result" }));
    },
    []
  );

  const handleRestart = useCallback(() => {
    setState({
      step: "gender",
      gender: null,
      personalColorId: null,
      styleResult: null,
      fitType: "T",
    });
  }, []);

  const currentStepNum = STEP_NUMBERS[state.step];
  const totalSteps = 5;
  const showProgress = state.step !== "gender" && state.step !== "result";

  return (
    <>
      {/* Floating gradient orbs */}
      <div
        className="orb"
        style={{
          top: "-180px",
          left: "-180px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(196,91,124,0.09) 0%, transparent 68%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "-200px",
          right: "-200px",
          width: "560px",
          height: "560px",
          background: "radial-gradient(circle, rgba(232,168,124,0.09) 0%, transparent 68%)",
          animationDelay: "-5s",
        }}
      />

      <main className="min-h-dvh flex flex-col items-center py-10 px-4 relative z-10">
        {/* Header */}
        <div className="w-full max-w-md flex items-center justify-between mb-10">
          <button
            onClick={handleRestart}
            className="text-[11px] text-muted hover:text-rose-primary transition-colors duration-300 font-semibold tracking-[0.18em] uppercase"
          >
            맵시TI
          </button>

          {showProgress && (
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalSteps - 1 }, (_, i) => i + 2).map(
                (stepNum) => (
                  <div
                    key={stepNum}
                    className="rounded-full transition-all duration-500"
                    style={{
                      width: stepNum === currentStepNum ? "22px" : "6px",
                      height: "6px",
                      background:
                        stepNum <= currentStepNum
                          ? "var(--rose)"
                          : "var(--rose-light)",
                    }}
                  />
                )
              )}
            </div>
          )}

          <div className="w-14" />
        </div>

        {/* Main */}
        <div className="w-full max-w-md">
          {state.step === "gender" && (
            <GenderStep onSelect={handleGenderSelect} />
          )}
          {state.step === "personalColor" && (
            <PersonalColorStep
              onSelect={handlePersonalColorSelect}
              onDontKnow={handleDontKnow}
            />
          )}
          {state.step === "personalColorQuiz" && (
            <PersonalColorQuizStep
              onComplete={handlePersonalColorQuizComplete}
            />
          )}
          {state.step === "survey" && (
            <SurveyStep onComplete={handleSurveyComplete} />
          )}
          {state.step === "result" && state.styleResult && state.gender && (
            <ResultStep
              persona={getPersonaById(state.styleResult)}
              gender={state.gender}
              personalColorId={state.personalColorId}
              fitType={state.fitType}
              onRestart={handleRestart}
            />
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-[11px] text-muted opacity-40 tracking-wider">
            맵시TI · Fashion Persona Test · {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
