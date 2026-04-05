# 맵시TI — Fashion Persona Test

퍼스널컬러 × 라이프스타일로 찾는 나만의 패션 페르소나 테스트

## 프로젝트 구조

```
성별 선택 → 퍼스널컬러 선택 → 맵시TI 설문(6문항) → 결과 + 상품 추천
```

**10가지 스타일 페르소나**: 소피스티케이티드, 페미닌, 힙스터/펑크, 캐주얼, 모던/미니멀, 로맨틱, 매니시, 스트리트, 스포티, 레트로/빈티지

## 빠른 시작

```bash
npm install
npm run dev
```

## Vercel 배포

1. GitHub에 push
2. [vercel.com](https://vercel.com)에서 "Import Project" 선택
3. 빌드 완료 🎉

## 크롤러 연동 (상품 추천 기능)

무신사/지그재그 상품 추천은 별도 Python 백엔드 서버가 필요합니다.
(Selenium 기반 크롤러는 Vercel 서버리스 환경에서 동작하지 않음)

### 백엔드 서버 설정 (Railway / Render 권장)

1. `musinsa_crl_test.py`, `zigzag_crl.py`를 포함한 FastAPI 서버 구성
2. `/recommend` POST 엔드포인트 구현:
   ```json
   Request: { "style": "캐주얼", "gender": "female", "fitType": "L", "personalColor": "spring-light" }
   Response: { "products": { "[캐주얼] 와이드 데님팬츠": [{ "mall_name": "...", "title": "...", "price": "...", "img_url": "...", "link": "..." }] } }
   ```
3. Vercel 환경 변수에 `CRAWLER_API_URL` 설정

### Vercel 환경 변수

| 변수명 | 설명 |
|--------|------|
| `CRAWLER_API_URL` | Python 크롤러 서버 URL (없으면 빈 결과 표시) |

## 기술 스택

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **배포**: Vercel
- **크롤러** (별도): Python, Selenium, undetected-chromedriver

## 스타일 스코어링 로직

| 질문 | A 선택 시 | B 선택 시 |
|------|-----------|-----------|
| Q1 첫인상 | 소피스티케이티드, 모던/미니멀, 페미닌, 매니시 | 캐주얼, 로맨틱, 스트리트, 스포티, 힙스터/펑크, 레트로 |
| Q2 핏 선호 | 타이트/노멀핏 | 루즈/오버핏 |
| Q3 핏 선택 | 페미닌, 소피스티케이티드, 힙스터/펑크, 로맨틱, 모던/미니멀 | 캐주얼, 스트리트, 스포티, 매니시, 모던/미니멀 |
| Q4 디테일 | 모던/미니멀, 캐주얼, 매니시, 소피스티케이티드 | 힙스터/펑크, 레트로, 스트리트, 로맨틱 |
| Q5 TPO | 로맨틱, 페미닌, 소피스티케이티드, 모던/미니멀, 레트로 | 스포티, 캐주얼, 스트리트, 힙스터/펑크, 매니시 |
| Q6 감성 | 매니시, 모던/미니멀, 소피스티케이티드, 스트리트 | 로맨틱, 레트로, 페미닌, 캐주얼 |
