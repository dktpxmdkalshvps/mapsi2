// ============================================================
// Types
// ============================================================
export type Gender = "male" | "female";
export type FitType = "T" | "L";
export type SurveyAnswer = "A" | "B";
export type WarmCool = "웜" | "쿨";

export interface PersonalColor {
  id: string;
  season: string;
  seasonEn: string;
  type: string;
  label: string;       // e.g. "봄 라이트"
  swatches: string[];  // hex colors
  emoji: string;
}

export interface StylePersona {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  items: string;
  point: string;
  zigzagStyleKey: string;
  musinsaKeyword: string;
}

// ============================================================
// Personal Colors (12 types)
// ============================================================
export const PERSONAL_COLORS: PersonalColor[] = [
  {
    id: "spring-light",
    season: "봄",
    seasonEn: "Spring",
    type: "라이트",
    label: "봄 라이트",
    swatches: ["#FFE8A3", "#FFC8A0", "#FFD4B8", "#F5E6C0"],
    emoji: "🌼",
  },
  {
    id: "spring-bright",
    season: "봄",
    seasonEn: "Spring",
    type: "브라이트",
    label: "봄 브라이트",
    swatches: ["#FF8C42", "#FF6B35", "#FFA62B", "#FFD166"],
    emoji: "🍊",
  },
  {
    id: "spring-warm",
    season: "봄",
    seasonEn: "Spring",
    type: "웜",
    label: "봄 웜",
    swatches: ["#E8A87C", "#D4956A", "#C4856A", "#DEB48A"],
    emoji: "🌻",
  },
  {
    id: "summer-light",
    season: "여름",
    seasonEn: "Summer",
    type: "라이트",
    label: "여름 라이트",
    swatches: ["#FFB6C8", "#E8C4D8", "#D4B8E0", "#CCBAE8"],
    emoji: "🌸",
  },
  {
    id: "summer-muted",
    season: "여름",
    seasonEn: "Summer",
    type: "뮤트",
    label: "여름 뮤트",
    swatches: ["#C4A4BC", "#9E8EA5", "#B8A0BC", "#A496AA"],
    emoji: "🌫️",
  },
  {
    id: "summer-cool",
    season: "여름",
    seasonEn: "Summer",
    type: "쿨",
    label: "여름 쿨",
    swatches: ["#87CEEB", "#6FA3C8", "#7B9FBE", "#5F9EA0"],
    emoji: "💙",
  },
  {
    id: "autumn-muted",
    season: "가을",
    seasonEn: "Autumn",
    type: "뮤트",
    label: "가을 뮤트",
    swatches: ["#C49A6A", "#8B7355", "#A67C5B", "#9B8470"],
    emoji: "🍂",
  },
  {
    id: "autumn-deep",
    season: "가을",
    seasonEn: "Autumn",
    type: "딥",
    label: "가을 딥",
    swatches: ["#8B4513", "#A0522D", "#6B4226", "#7B3F00"],
    emoji: "🍫",
  },
  {
    id: "autumn-warm",
    season: "가을",
    seasonEn: "Autumn",
    type: "웜",
    label: "가을 웜",
    swatches: ["#D2691E", "#CD853F", "#B8860B", "#C8883A"],
    emoji: "🍁",
  },
  {
    id: "winter-bright",
    season: "겨울",
    seasonEn: "Winter",
    type: "브라이트",
    label: "겨울 브라이트",
    swatches: ["#FF1493", "#0000CD", "#FF0000", "#00C957"],
    emoji: "❄️",
  },
  {
    id: "winter-deep",
    season: "겨울",
    seasonEn: "Winter",
    type: "딥",
    label: "겨울 딥",
    swatches: ["#191970", "#800080", "#8B0000", "#000080"],
    emoji: "🌑",
  },
  {
    id: "winter-cool",
    season: "겨울",
    seasonEn: "Winter",
    type: "쿨",
    label: "겨울 쿨",
    swatches: ["#4169E1", "#6A0DAD", "#DC143C", "#1C1C8C"],
    emoji: "💜",
  },
];

// ============================================================
// Personal Color Quiz (for "모르겠어요" path)
// ============================================================
export const PC_QUIZ_STAGE1 = [
  {
    id: "pc_q1",
    question: "손목 안쪽을 봤을 때, 혈관이 어떤 색으로 보이나요?",
    options: [
      { label: "초록색이나 올리브색처럼 보여요", value: "웜" as WarmCool, emoji: "🌿" },
      { label: "파란색이나 보라색처럼 보여요", value: "쿨" as WarmCool, emoji: "💙" },
    ],
  },
  {
    id: "pc_q2",
    question: "햇볕 아래에서 오랫동안 놀고 나면 피부가 어떻게 되나요?",
    options: [
      { label: "피부색이 어둡게(갈색으로) 타는 편이에요", value: "웜" as WarmCool, emoji: "🌞" },
      { label: "피부가 빨갛게 익었다가 금방 원래대로 돌아와요", value: "쿨" as WarmCool, emoji: "🌂" },
    ],
  },
];

export const PC_QUIZ_WARM = {
  id: "pc_q3",
  question: "어떤 옷을 입었을 때 \"오늘 예쁘다!\"라는 말을 듣나요?",
  options: [
    { label: "노란색 개나리처럼 밝고 화사한 색", colorLabel: "봄 라이트", pcId: "spring-light", emoji: "🌼" },
    { label: "새콤달콤한 귤처럼 쨍하고 생생한 색", colorLabel: "봄 브라이트", pcId: "spring-bright", emoji: "🍊" },
    { label: "부드러운 모래나 나무처럼 차분하고 편안한 색", colorLabel: "가을 뮤트", pcId: "autumn-muted", emoji: "🍂" },
    { label: "진한 초콜릿이나 단풍잎처럼 깊고 어두운 색", colorLabel: "가을 딥", pcId: "autumn-deep", emoji: "🍫" },
  ],
};

export const PC_QUIZ_COOL = {
  id: "pc_q4",
  question: "어떤 색깔 크레파스로 칠할 때 내 얼굴이 더 맑아 보이나요?",
  options: [
    { label: "시원한 딸기 우유처럼 맑고 연한 색", colorLabel: "여름 라이트", pcId: "summer-light", emoji: "🌸" },
    { label: "구름 낀 하늘처럼 은은하고 회색빛이 섞인 색", colorLabel: "여름 뮤트", pcId: "summer-muted", emoji: "🌫️" },
    { label: "형광펜처럼 눈에 확 띄고 아주 진한 색", colorLabel: "겨울 브라이트", pcId: "winter-bright", emoji: "❄️" },
    { label: "캄캄한 밤하늘처럼 아주 어둡고 묵직한 색", colorLabel: "겨울 딥", pcId: "winter-deep", emoji: "🌑" },
  ],
};

// ============================================================
// 맵시TI Survey Questions
// ============================================================
export interface SurveyQuestion {
  id: number;
  category: string;
  question: string;
  optionA: { text: string; emoji: string; scores: string[] };
  optionB: { text: string; emoji: string; scores: string[] };
  isFit?: boolean;
}

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 1,
    category: "첫인상/무드",
    question: "새로운 모임에 나가는 날! 거울 앞의 나는 어떤 분위기일까?",
    optionA: {
      text: "\"깔끔하고 단정하게!\" 은근히 지적이면서도 세련된 인상을 주고 싶어",
      emoji: "✨",
      scores: ["소피스티케이티드", "모던/미니멀", "페미닌", "매니시"],
    },
    optionB: {
      text: "\"친근하거나 힙하거나!\" 개성 있고 다가가기 편안한 인상을 주고 싶어",
      emoji: "✌️",
      scores: ["캐주얼", "로맨틱", "스트리트", "스포티", "힙스터/펑크", "레트로/빈티지"],
    },
  },
  {
    id: 2,
    category: "핏 선호",
    question: "쇼핑몰에서 옷을 구경하는데, 내 사이즈가 애매하게 걸쳐 있다. 나의 평소 주문 습관은?",
    optionA: {
      text: "\"핏이 무너지면 안 되지!\" 꼼꼼히 읽어보고 내 체형에 딱 맞는 정사이즈를 고른다",
      emoji: "📏",
      scores: [],
    },
    optionB: {
      text: "\"작은 것보단 큰 게 낫지!\" 고민할 바엔 그냥 한 사이즈 크게 사서 넉넉하게 입는다",
      emoji: "👕",
      scores: [],
    },
    isFit: true,
  },
  {
    id: 3,
    category: "핏 Fit",
    question: "밥 먹고 배가 살짝 부른 상태다! 지금 내 옷의 핏(Fit)은?",
    optionA: {
      text: "\"그래도 핏은 포기 못 해!\" 내 예쁜 라인을 딱 잡아주는 텐션 있는 옷",
      emoji: "👗",
      scores: ["페미닌", "소피스티케이티드", "힙스터/펑크", "로맨틱", "모던/미니멀"],
    },
    optionB: {
      text: "\"아 배불러~ 완전 편해!\" 몸을 쪼이지 않고 넉넉하게 툭 떨어지는 오버핏",
      emoji: "☁️",
      scores: ["캐주얼", "스트리트", "스포티", "매니시", "모던/미니멀"],
    },
  },
  {
    id: 4,
    category: "디테일 Detail",
    question: "마음에 쏙 드는 온라인 쇼핑몰 발견! 내 장바구니에 담긴 옷들은?",
    optionA: {
      text: "\"돌려 입기 최고!\" 로고나 패턴 없이 심플하고 색감이 깔끔한 기본템들",
      emoji: "🤍",
      scores: ["모던/미니멀", "캐주얼", "매니시", "소피스티케이티드"],
    },
    optionB: {
      text: "\"이건 사야 해!\" 흔하지 않은 디자인, 톡톡 튀는 컬러나 유니크한 포인트템들",
      emoji: "💖",
      scores: ["힙스터/펑크", "레트로/빈티지", "스트리트", "로맨틱"],
    },
  },
  {
    id: 5,
    category: "활동성 TPO",
    question: "날씨 좋은 주말! 내가 가장 행복함을 느끼는 외출 코스는?",
    optionA: {
      text: "예쁜 카페에서 조용히 커피 마시거나, 핫플에서 예쁜 사진 남기기",
      emoji: "📸",
      scores: ["로맨틱", "페미닌", "소피스티케이티드", "모던/미니멀", "레트로/빈티지"],
    },
    optionB: {
      text: "방탈출, 한강 피크닉, 보드게임 등 활동적으로 뽈뽈거리며 돌아다니기",
      emoji: "🏃‍♀️",
      scores: ["스포티", "캐주얼", "스트리트", "힙스터/펑크", "매니시"],
    },
  },
  {
    id: 6,
    category: "온도/감성",
    question: "나를 한 장의 영화 포스터로 표현한다면?",
    optionA: {
      text: "흑백 필름이나 쿨톤 필터가 씌워진, 차갑고 시크한 도심 누아르",
      emoji: "🌃",
      scores: ["매니시", "모던/미니멀", "소피스티케이티드", "스트리트"],
    },
    optionB: {
      text: "따뜻한 햇살 필터가 가득한, 몽글몽글하고 빈티지한 감성 로맨스",
      emoji: "🎞️",
      scores: ["로맨틱", "레트로/빈티지", "페미닌", "캐주얼"],
    },
  },
];

// ============================================================
// Style Personas (10 types)
// ============================================================
export const STYLE_PERSONAS: StylePersona[] = [
  {
    id: "소피스티케이티드",
    name: "소피스티케이티드",
    emoji: "💻",
    tagline: "갓생 사는 도심 속 차도녀/차도남",
    description:
      "아침 이슬 머금은 셔츠처럼 언제나 흐트러짐 없는 당신! 복잡한 도심 속에서도 나만의 '칼각'과 리듬을 지키는 프로페셔널한 타입이에요. 겉은 조금 시크해 보여도, 계획한 일은 끝까지 해내고야 마는 반전 매력의 소유자랍니다.",
    items: "잘 다려진 셔츠, 핏이 딱 떨어지는 슬랙스, 툭 걸쳐도 멋진 블레이저 🧥",
    point: "단정하고 정돈된 느낌이 당신의 지적인 분위기를 200% 살려줄 거예요! ✨",
    zigzagStyleKey: "오피스/소피스티케이티드",
    musinsaKeyword: "오피스룩 세련",
  },
  {
    id: "페미닌",
    name: "페미닌",
    emoji: "🌸",
    tagline: "호수 위의 백조, 우아함 한 스푼 여신",
    description:
      "화사하게 피어난 꽃처럼 언제나 부드럽고 우아한 선을 사랑하는 당신! 차분한 카리스마로 주변을 밝히는 존재감을 가졌네요. 겉은 연약해 보여도 내면은 누구보다 단단하고 아름다운, 한 마리 백조 같은 매력의 소유자랍니다.",
    items: "라인을 살려주는 원피스, 하늘하늘한 블라우스, 페미닌한 무드의 스커트 🦢",
    point: "부드럽고 여성스러운 디테일이 당신의 우아한 이미지를 더욱 빛나게 해줄 거예요! ✨",
    zigzagStyleKey: "페미닌",
    musinsaKeyword: "페미닌",
  },
  {
    id: "힙스터/펑크",
    name: "힙스터/펑크",
    emoji: "🎸",
    tagline: "톡톡 튀는 인간 팝핑캔디",
    description:
      "평범한 건 거부한다! 독특하고 화려한 스타일로 자신을 표현할 줄 아는 용감한 타입이에요. 트렌드를 따라가기보다 나만의 트렌드를 직접 만들어가는 쿨한 감각을 가졌네요. 당신이 지나가는 길은 어디든 런웨이가 되는 마법 같은 매력을 보여주세요!",
    items: "화려한 패턴의 상의, 독특한 워싱의 데님, 시선 강탈 포인트 액세서리 💖",
    point: "화려하고 독특한 개성이 당신의 힙한 감성을 200% 완성해 줄 거예요! 😎",
    zigzagStyleKey: "힙스터/펑크",
    musinsaKeyword: "유니크 힙스터",
  },
  {
    id: "캐주얼",
    name: "캐주얼",
    emoji: "🎒",
    tagline: "어디서나 찰떡! 호불호 제로 카멜레온",
    description:
      "무심한 듯 툭 걸친 티셔츠 한 장으로도 완벽한 밸런스를 찾아내는 자연스러움의 대명사! 어떤 모임에 가도 편안하게 스며드는 친근한 매력을 가졌어요. 실용적이면서도 깔끔한 스타일로 모두의 워너비 '꾸안꾸' 정석을 보여주는 당신은 정말 매력적이에요.",
    items: "편안한 맨투맨, 활동성 좋은 데님 팬츠, 가벼운 캔버스화 👟",
    point: "실용적이고 깔끔한 느낌이 당신의 맑고 깨끗한 분위기를 200% 살려줄 거예요! ✨",
    zigzagStyleKey: "캐주얼",
    musinsaKeyword: "캐주얼",
  },
  {
    id: "모던/미니멀",
    name: "모던/미니멀",
    emoji: "🧊",
    tagline: "군더더기 제로, 시크한 얼음물 한 잔",
    description:
      "복잡한 건 딱 질색! 깔끔한 선과 무채색의 조화로운 무드를 즐기는 냉철한 감각가예요. 화려하게 꾸미지 않아도 당신에게서 느껴지는 정갈한 분위기는 사람들의 시선을 사로잡죠. 단순함이 가장 강력한 멋이라는 걸 온몸으로 증명하는 세련된 타입이랍니다.",
    items: "무채색 코트나 재킷, 로고 없는 니트, 딱 떨어지는 슬랙스 🧥",
    point: "깔끔하고 무난한 핏이 오히려 당신의 감각적인 카리스마를 더욱 돋보이게 해줄 거예요! 🧊",
    zigzagStyleKey: "모던/미니멀",
    musinsaKeyword: "미니멀 모던",
  },
  {
    id: "로맨틱",
    name: "로맨틱",
    emoji: "🎀",
    tagline: "인간 벚꽃 솜사탕, 사랑스러움의 결정체",
    description:
      "포근하고 다정한 마음씨만큼이나 사랑스러운 스타일을 추구하는 로맨티스트! 부드러운 색감과 발랄한 디테일로 주변 사람들에게 기분 좋은 에너지를 전해줘요. 당신과 함께라면 지루한 일상도 로맨틱 영화의 한 장면처럼 반짝거리게 될 거예요.",
    items: "파스텔 톤 가디건, 리본 디테일 블라우스, 부드러운 니트 아이템 🌸",
    point: "부드럽고 발랄한 무드가 당신의 사랑스러운 매력을 200% 폭발시켜줄 거예요! 💖",
    zigzagStyleKey: "로맨틱",
    musinsaKeyword: "로맨틱 러블리",
  },
  {
    id: "매니시",
    name: "매니시",
    emoji: "🕴️",
    tagline: "무심한 듯 툭, 시크한 선배미 뿜뿜",
    description:
      "도시적이고 멋진 이미지를 선호하며, 자신만의 뚜렷한 주관을 스타일로 표현할 줄 알아요. 남성적인 아이템도 당신만의 색깔로 쿨하게 소화해내는 단단한 내면의 소유자군요. 무심하게 걷는 걸음걸이조차 화보가 되는 시크한 선배 같은 아우라를 가졌어요.",
    items: "오버핏 자켓, 와이드 슬랙스, 클래식한 옥스포드화 👞",
    point: "도시적이면서도 멋있는 분위기가 당신의 쿨한 멋을 200% 완성해 줄 거예요! 😎",
    zigzagStyleKey: "매니시",
    musinsaKeyword: "매니시 중성적",
  },
  {
    id: "스트리트",
    name: "스트리트",
    emoji: "🛹",
    tagline: "뒷골목 런웨이, 자유로운 영혼의 지배자",
    description:
      "어디로 튈지 모르는 자유로운 에너지와 트렌디한 감각이 공존하는 당신! 정해진 규칙보다는 나만의 개성을 담은 힙한 스타일링을 즐기는 타입이에요. 활동적이면서도 독특한 포인트로 거리의 시선을 한 몸에 받는, 이 시대의 진정한 스트리터군요.",
    items: "편안한 후드티, 넉넉한 카고 팬츠, 트렌디한 조거 팬츠 🎧",
    point: "활동적이고 트렌디한 무드가 당신의 자유로운 영혼을 200% 보여줄 거예요! 🛹",
    zigzagStyleKey: "스트리트",
    musinsaKeyword: "스트릿 힙합",
  },
  {
    id: "스포티",
    name: "스포티",
    emoji: "🏃‍♀️",
    tagline: "에너지 1000%, 지치지 않는 인간 비타민",
    description:
      "건강한 에너지와 활동적인 스타일이 당신의 가장 큰 매력 포인트! 입는 사람도 보는 사람도 편안하게 만드는 생기 넘치는 스타일을 사랑하는군요. 매일매일이 갓생인 당신의 활기찬 일상을 더욱 빛내줄 스포티한 감성을 가졌어요.",
    items: "아노락 자켓, 레깅스나 트레이닝 셋업, 야구 모자 🧢",
    point: "활동적이고 편안한 핏이 당신의 건강한 이미지를 200% 완성해 줄 거예요! ⚡",
    zigzagStyleKey: "스포티",
    musinsaKeyword: "스포티 애슬레저",
  },
  {
    id: "레트로/빈티지",
    name: "레트로/빈티지",
    emoji: "📻",
    tagline: "낭만 가득한 시간여행자",
    description:
      "남들은 모르는 독특한 색감과 과거의 낭만을 찾아 여행하는 아날로그 감성가! 유행보다는 나만의 추억과 이야기를 담은 옷들을 소중히 여기는 섬세한 취향을 가졌네요. 당신의 옷장은 마치 시간을 거스르는 마법의 공간처럼 신비롭고 따뜻한 분위기로 가득 차 있어요.",
    items: "체크무늬 셔츠, 코듀로이 팬츠, 빛바랜 그래픽 티셔츠 🎞️",
    point: "독특하고 트렌디한 빈티지 감성이 당신의 깊은 매력을 200% 담아내 줄 거예요! 📻",
    zigzagStyleKey: "레트로/빈티지",
    musinsaKeyword: "빈티지 레트로",
  },
];

// ============================================================
// Scoring Logic
// ============================================================
export type StyleId = string;

export interface ScoringMap {
  A: StyleId[];
  B: StyleId[];
}

export const QUESTION_SCORES: Record<number, ScoringMap> = {
  1: {
    A: ["소피스티케이티드", "모던/미니멀", "페미닌", "매니시"],
    B: ["캐주얼", "로맨틱", "스트리트", "스포티", "힙스터/펑크", "레트로/빈티지"],
  },
  2: { A: [], B: [] }, // fit only
  3: {
    A: ["페미닌", "소피스티케이티드", "힙스터/펑크", "로맨틱", "모던/미니멀"],
    B: ["캐주얼", "스트리트", "스포티", "매니시", "모던/미니멀"],
  },
  4: {
    A: ["모던/미니멀", "캐주얼", "매니시", "소피스티케이티드"],
    B: ["힙스터/펑크", "레트로/빈티지", "스트리트", "로맨틱"],
  },
  5: {
    A: ["로맨틱", "페미닌", "소피스티케이티드", "모던/미니멀", "레트로/빈티지"],
    B: ["스포티", "캐주얼", "스트리트", "힙스터/펑크", "매니시"],
  },
  6: {
    A: ["매니시", "모던/미니멀", "소피스티케이티드", "스트리트"],
    B: ["로맨틱", "레트로/빈티지", "페미닌", "캐주얼"],
  },
};

export function calculateStyleResult(answers: Record<number, SurveyAnswer>): StyleId {
  const scores: Record<StyleId, number> = {
    소피스티케이티드: 0,
    페미닌: 0,
    "힙스터/펑크": 0,
    캐주얼: 0,
    "모던/미니멀": 0,
    로맨틱: 0,
    매니시: 0,
    스트리트: 0,
    스포티: 0,
    "레트로/빈티지": 0,
  };

  for (const [qId, answer] of Object.entries(answers)) {
    const qNum = parseInt(qId);
    const mapping = QUESTION_SCORES[qNum];
    if (!mapping) continue;
    const styleList = mapping[answer as SurveyAnswer];
    for (const style of styleList) {
      if (style in scores) scores[style]++;
    }
  }

  // Find max score
  let maxScore = -1;
  let winner = "캐주얼";
  for (const [style, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      winner = style;
    }
  }
  return winner;
}

export function getPersonaById(id: string): StylePersona {
  return STYLE_PERSONAS.find((p) => p.id === id) ?? STYLE_PERSONAS[3];
}

export function getPersonalColorById(id: string): PersonalColor | undefined {
  return PERSONAL_COLORS.find((pc) => pc.id === id);
}
