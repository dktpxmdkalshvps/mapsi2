"use client";
import { useState } from "react";
import { PERSONAL_COLORS } from "../data";

interface PersonalColorStepProps {
  onSelect: (pcId: string) => void;
  onDontKnow: () => void;
}

const SEASONS = ["봄", "여름", "가을", "겨울"] as const;
const SEASON_LABELS: Record<string, string> = {
  봄: "Spring", 여름: "Summer", 가을: "Autumn", 겨울: "Winter",
};
const SEASON_ACCENT: Record<string, { bg: string; border: string; tag: string }> = {
  봄: {
    bg: "rgba(251,243,219,0.6)",
    border: "rgba(245,208,100,0.3)",
    tag: "#B8941A",
  },
  여름: {
    bg: "rgba(219,234,254,0.5)",
    border: "rgba(147,197,253,0.3)",
    tag: "#3A7BD5",
  },
  가을: {
    bg: "rgba(254,235,219,0.6)",
    border: "rgba(249,168,105,0.3)",
    tag: "#B8641A",
  },
  겨울: {
    bg: "rgba(237,233,254,0.5)",
    border: "rgba(196,181,253,0.3)",
    tag: "#6D44C2",
  },
};

export default function PersonalColorStep({ onSelect, onDontKnow }: PersonalColorStepProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const grouped = SEASONS.map((season) => ({
    season,
    colors: PERSONAL_COLORS.filter((pc) => pc.season === season),
  }));

  return (
    <div className="step-enter w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <p
          className="text-muted mb-3 opacity-60"
          style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em" }}
        >
          Step 2
        </p>
        <h2
          className="font-display text-charcoal mb-3 leading-tight tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 8vw, 3rem)", fontWeight: 400 }}
        >
          퍼스널 컬러
        </h2>
        <p className="text-muted" style={{ fontSize: "14px" }}>나의 퍼스널컬러를 선택해 주세요</p>
      </div>

      {/* Season groups */}
      <div className="space-y-4 mb-8">
        {grouped.map(({ season, colors }) => {
          const accent = SEASON_ACCENT[season];
          return (
            <div
              key={season}
              className="rounded-[24px] p-4"
              style={{
                background: accent.bg,
                border: `1px solid ${accent.border}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <p className="font-semibold text-charcoal" style={{ fontSize: "13px" }}>{season}</p>
                <p
                  className="font-medium"
                  style={{ fontSize: "11px", letterSpacing: "0.1em", color: accent.tag }}
                >
                  {SEASON_LABELS[season]}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {colors.map((pc) => (
                  <button
                    key={pc.id}
                    onClick={() => setSelected(pc.id)}
                    className={`pc-chip rounded-[16px] p-3 flex flex-col items-center gap-2 ${
                      selected === pc.id ? "selected" : ""
                    }`}
                  >
                    {/* Swatches */}
                    <div className="flex gap-1">
                      {pc.swatches.slice(0, 4).map((color, i) => (
                        <div
                          key={i}
                          className="color-swatch rounded-full"
                          style={{ width: "14px", height: "14px", backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p
                      className="font-medium text-charcoal leading-tight text-center"
                      style={{ fontSize: "11px" }}
                    >
                      {pc.type}
                    </p>
                    {selected === pc.id && (
                      <div
                        className="check-pop flex items-center justify-center text-white rounded-full"
                        style={{
                          width: "16px",
                          height: "16px",
                          fontSize: "9px",
                          background: "var(--rose)",
                        }}
                      >
                        ✓
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <button
          className="btn-primary w-full"
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
        >
          선택 완료
        </button>
        <button className="btn-secondary w-full" onClick={onDontKnow}>
          잘 모르겠어요
        </button>
      </div>
    </div>
  );
}
