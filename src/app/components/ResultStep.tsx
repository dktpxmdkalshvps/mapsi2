"use client";
import { useEffect, useState } from "react";
import { Gender, StylePersona, getPersonalColorById } from "../data";

interface ProductItem {
  mall_name: string;
  title: string;
  price: string;
  img_url: string;
  link?: string;
}

interface ResultStepProps {
  persona: StylePersona;
  gender: Gender;
  personalColorId: string | null;
  fitType: "T" | "L";
  onRestart: () => void;
}

function LoadingCard() {
  return (
    <div className="glass-card rounded-[20px] overflow-hidden">
      <div className="shimmer h-40 w-full" />
      <div className="p-3 space-y-2">
        <div className="shimmer h-3 w-1/2 rounded-full" />
        <div className="shimmer h-3 w-3/4 rounded-full" />
        <div className="shimmer h-3 w-1/3 rounded-full" />
      </div>
    </div>
  );
}

export default function ResultStep({
  persona,
  gender,
  personalColorId,
  fitType,
  onRestart,
}: ResultStepProps) {
  const [products, setProducts] = useState<Record<string, ProductItem[]>>({});
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const personalColor = personalColorId ? getPersonalColorById(personalColorId) : null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            style: persona.id,
            gender,
            fitType,
            personalColor: personalColorId,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          setProducts(data.products ?? {});
        }
      } catch {
        /* silently fail */
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [persona.id, gender, fitType, personalColorId]);

  const handleShare = async () => {
    const text = `나의 맵시TI 결과: ${persona.emoji} ${persona.name} — ${persona.tagline}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const platformLabel = gender === "female" ? "무신사 & 지그재그" : "무신사";

  return (
    <div className="step-enter w-full">
      {/* Result header */}
      <div className="text-center mb-9">
        <p
          className="text-muted mb-4 opacity-60"
          style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em" }}
        >
          나의 맵시TI
        </p>

        <div className="float-emoji text-6xl mb-5">{persona.emoji}</div>

        <h2
          className="font-display text-charcoal mb-2 leading-tight tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 9vw, 3.2rem)", fontWeight: 500 }}
        >
          {persona.name}
        </h2>
        <p className="font-semibold mb-6" style={{ fontSize: "14px", color: "var(--rose)" }}>
          {persona.tagline}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {personalColor && (
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 2px 12px rgba(196,91,124,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex gap-1">
                {personalColor.swatches.slice(0, 3).map((c, i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{ width: "14px", height: "14px", backgroundColor: c }}
                  />
                ))}
              </div>
              <span className="font-medium text-charcoal" style={{ fontSize: "12px" }}>
                {personalColor.label}
              </span>
            </div>
          )}

          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 2px 12px rgba(196,91,124,0.07)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="font-medium text-charcoal" style={{ fontSize: "12px" }}>
              {fitType === "T" ? "📏 타이트/노멀핏 선호" : "👕 루즈/오버핏 선호"}
            </span>
          </div>
        </div>
      </div>

      {/* Description card */}
      <div
        className="rounded-[28px] p-6 mb-5"
        style={{
          background: "linear-gradient(135deg, rgba(196,91,124,0.07), rgba(232,168,124,0.07))",
          border: "1px solid var(--rose-light)",
          backdropFilter: "blur(16px)",
        }}
      >
        <p className="text-charcoal leading-relaxed mb-5" style={{ fontSize: "15px" }}>
          {persona.description}
        </p>
        <div className="space-y-2.5">
          <div className="flex items-start gap-2.5">
            <span style={{ fontSize: "14px" }}>👗</span>
            <p className="text-charcoal" style={{ fontSize: "13px" }}>
              <span className="font-semibold">최애 아이템:</span>{" "}
              {persona.items}
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span style={{ fontSize: "14px" }}>✨</span>
            <p style={{ fontSize: "13px", color: "var(--rose-dark)" }}>
              <span className="font-semibold">찰떡 포인트:</span>{" "}
              {persona.point}
            </p>
          </div>
        </div>
      </div>

      {/* Product recommendations */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-charcoal" style={{ fontSize: "15px" }}>
            추천 아이템
          </h3>
          <p className="text-muted" style={{ fontSize: "11px" }}>{platformLabel}</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => <LoadingCard key={i} />)}
          </div>
        ) : Object.keys(products).length > 0 ? (
          <div className="space-y-6">
            {Object.entries(products).map(([keyword, items]) => (
              <div key={keyword}>
                <p className="text-muted font-medium mb-2 px-1" style={{ fontSize: "11px" }}>
                  {keyword}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {items.map((item, i) => (
                    <a
                      key={i}
                      href={item.link ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-hover glass-card rounded-[20px] overflow-hidden block"
                    >
                      <div className="h-36 bg-gray-100 overflow-hidden">
                        {item.img_url ? (
                          <img
                            src={item.img_url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-3xl" style={{ background: "rgba(242,212,223,0.3)" }}>
                            👗
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-muted mb-1" style={{ fontSize: "10px" }}>
                          {item.mall_name}
                        </p>
                        <p className="text-charcoal font-medium leading-tight line-clamp-2" style={{ fontSize: "12px" }}>
                          {item.title}
                        </p>
                        <p className="font-bold mt-1.5" style={{ fontSize: "13px", color: "var(--rose)" }}>
                          {item.price}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-[24px] p-8 text-center">
            <p className="text-3xl mb-3">🔍</p>
            <p className="font-semibold text-charcoal mb-1" style={{ fontSize: "14px" }}>
              상품 추천 준비 중
            </p>
            <p className="text-muted leading-relaxed" style={{ fontSize: "13px" }}>
              크롤러 서버 연결 후 실제 {platformLabel} 상품이 표시됩니다.
              <br />
              아래 플랫폼에서 직접 검색해 보세요!
            </p>
            <div className="flex gap-2.5 justify-center mt-5">
              <a
                href={`https://www.musinsa.com/search/musinsa/goods?keyword=${encodeURIComponent(persona.musinsaKeyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "14px", padding: "12px 22px" }}
              >
                무신사 검색
              </a>
              {gender === "female" && (
                <a
                  href={`https://zigzag.kr/search?keyword=${encodeURIComponent(persona.zigzagStyleKey)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: "14px", padding: "12px 22px" }}
                >
                  지그재그 검색
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-3 pb-10">
        <button onClick={handleShare} className="btn-primary w-full">
          {copied ? "복사 완료!" : "결과 공유하기"}
        </button>
        <button onClick={onRestart} className="btn-secondary w-full">
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}
