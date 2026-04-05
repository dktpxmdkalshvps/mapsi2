"use client";
import { Gender } from "../data";

interface GenderStepProps {
  onSelect: (gender: Gender) => void;
}

export default function GenderStep({ onSelect }: GenderStepProps) {
  return (
    <div className="step-enter flex flex-col items-center">
      {/* Hero header */}
      <div className="text-center mb-14">
        <p
          className="text-muted mb-5 opacity-60"
          style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em" }}
        >
          Fashion Persona Test
        </p>

        <h1
          className="font-display text-charcoal mb-4 leading-none tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem, 12vw, 5.5rem)", fontWeight: 300 }}
        >
          맵시TI
        </h1>

        {/* Divider ornament */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div
            className="h-px w-12"
            style={{ background: "linear-gradient(to right, transparent, var(--rose-light))" }}
          />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--rose-light)" }} />
          <div
            className="h-px w-12"
            style={{ background: "linear-gradient(to left, transparent, var(--rose-light))" }}
          />
        </div>

        <p className="text-muted leading-relaxed max-w-[260px] mx-auto" style={{ fontSize: "15px" }}>
          퍼스널컬러 × 라이프스타일로 찾는
          <br />
          나만의 패션 페르소나
        </p>
      </div>

      {/* Gender cards */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-[340px]">
        <button
          onClick={() => onSelect("male")}
          className="selection-card group rounded-[28px] p-8 flex flex-col items-center gap-4"
        >
          <div
            className="flex items-center justify-center text-3xl rounded-full"
            style={{
              width: "76px",
              height: "76px",
              background: "linear-gradient(135deg, rgba(147,197,253,0.25), rgba(191,219,254,0.15))",
              border: "1px solid rgba(147,197,253,0.3)",
              transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            👨
          </div>
          <div className="text-center">
            <p className="font-semibold text-charcoal" style={{ fontSize: "18px" }}>남성</p>
            <p className="text-muted mt-1" style={{ fontSize: "11px", letterSpacing: "0.14em" }}>Male</p>
          </div>
        </button>

        <button
          onClick={() => onSelect("female")}
          className="selection-card group rounded-[28px] p-8 flex flex-col items-center gap-4"
        >
          <div
            className="flex items-center justify-center text-3xl rounded-full"
            style={{
              width: "76px",
              height: "76px",
              background: "linear-gradient(135deg, rgba(196,91,124,0.15), rgba(242,212,223,0.2))",
              border: "1px solid rgba(196,91,124,0.2)",
              transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            👩
          </div>
          <div className="text-center">
            <p className="font-semibold text-charcoal" style={{ fontSize: "18px" }}>여성</p>
            <p className="text-muted mt-1" style={{ fontSize: "11px", letterSpacing: "0.14em" }}>Female</p>
          </div>
        </button>
      </div>

      {/* Decorative dots */}
      <div className="flex gap-2 mt-12">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i === 2 ? "20px" : "6px",
              height: "6px",
              backgroundColor: i === 2 ? "var(--rose)" : "var(--rose-light)",
              opacity: 0.35 + i * 0.13,
              transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
