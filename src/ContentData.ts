export interface CountryInfo {
  id: string;
  name_tc: string;
  name_en: string;
  summary: string;
  landmarks: string[];
  products: string[];
  races: string[];
  keyCities: string[];
  relatedCharacters: string[];
  festivals: string[];
}

export interface MonthFest {
  id: string;
  name_tc: string;
  name_en: string;
  symbol: string;
  description: string;
}

export interface CharacterInfo {
  id: string;
  name_tc: string;
  name_en: string;
  appearance: string;
  abilities: string;
  background: string;
  affiliation: string;
  location: string;
  relatedEvents: string[];
  tags: string[];
  profileImage?: string;
}

export interface EventInfo {
  id: string;
  year: number;
  title: string;
  summary: string;
  description: string;
  location: string;
  relatedCharacters: string[];
}

export interface ContentData {
  countries: CountryInfo[];
  months: MonthFest[];
  characters: CharacterInfo[];
  events: EventInfo[];
}

export const contentData: ContentData = {
  countries: [
    {
      id: "starlight",
      name_tc: "星耀帝國",
      name_en: "Empire of Starlight",
      summary: "統馭艾瑟利亞大陸的核心王國，以科技與魔法並存聞名。首都星耀城坐落於中央平原，支配著周邊五大城邦。",
      landmarks: ["星耀城水晶塔", "天行軍營", "榮耀賽場"],
      products: ["星塵礦石", "水晶器皿"],
      races: ["人類", "魔晶族"],
      keyCities: ["星耀城", "銀月城", "曙光鎮"],
      relatedCharacters: ["xieen"],
      festivals: ["星輝月慶典", "榮耀賽典"]
    },
    {
      id: "moonshadow",
      name_tc: "月影王國",
      name_en: "Kingdom of Moonshadow",
      summary: "隱匿於北方森林的王國，以夜間幻術與月之儀式聞名。王城建於幻月湖畔，流傳古老預言儀典。",
      landmarks: ["幻月湖心殿", "月光森林", "預言石碑"],
      products: ["月露草", "幻術卷軸"],
      races: ["精靈", "狼人"],
      keyCities: ["銀月城", "林間要塞"],
      relatedCharacters: ["astyr"],
      festivals: ["月光之舞", "星辰先知祭"]
    },
    {
      id: "celestial",
      name_tc: "天星聯邦",
      name_en: "Celestial Federation",
      summary: "天穹島嶼群組成的聯邦，擁有先進飛行技術與天空魔法。空中城市漂浮於雲端之上。",
      landmarks: ["天穹之門", "雲端大學", "星辰碼頭"],
      products: ["飛行石", "天空草"],
      races: ["人類", "空靈族"],
      keyCities: ["雲城", "星海港"],
      relatedCharacters: [],
      festivals: ["潮汐節", "雪鷲節"]
    },
    {
      id: "arcane",
      name_tc: "奧術共和國",
      name_en: "Arcane Republic",
      summary: "魔法議會主導的共和國，以自由學術與元素研究著稱。各式魔法師在此研發新法術。",
      landmarks: ["魔法議會大廈", "元素塔", "學術殿堂"],
      products: ["魔導書", "元素水晶"],
      races: ["人類", "魔晶族"],
      keyCities: ["奧術城", "元素村"],
      relatedCharacters: [],
      festivals: ["魔法論壇", "元素盛會"]
    },
    {
      id: "frostpeak",
      name_tc: "霜峰王國",
      name_en: "Frostpeak Kingdom",
      summary: "極寒雪原之上的王國，以戰士部族與龍裔傳說聞名。冰霜魔法盛行。",
      landmarks: ["冰川城", "龍骨山脈", "寒冰祭壇"],
      products: ["冰晶礦", "寒霜斗蓬"],
      races: ["人類", "矮人", "龍裔"],
      keyCities: ["冰峰城", "雪冠鎮"],
      relatedCharacters: [],
      festivals: ["豐收之祭", "霜降祭典"]
    },
    {
      id: "desert",
      name_tc: "沙漠聯盟",
      name_en: "Desert Alliance",
      summary: "沙海綠洲交錯之地，商旅繁盛，擁有活躍的貿易市場與遊牧文化。",
      landmarks: ["灼熱港", "綠洲之心", "流沙古城"],
      products: ["香料", "艷陽布"],
      races: ["人類", "獸人"],
      keyCities: ["灼熱港", "綠洲城"],
      relatedCharacters: [],
      festivals: ["烈焰慶典"]
    },
    {
      id: "shadowrealm",
      name_tc: "陰影領域",
      name_en: "Realm of Shadows",
      summary: "隱秘黑森林與禁忌魔法並存，實力神秘莫測，常被外界視為危險之地。",
      landmarks: ["暗影之心", "幽冥古道", "禁忌祭壇"],
      products: ["黑暗晶核", "幽影草"],
      races: ["獸人", "暗影精靈"],
      keyCities: ["暗影城", "幽林要塞"],
      relatedCharacters: [],
      festivals: ["冥想夜", "極光之舞"]
    }
  ],
  months: [
    {
      id: "stellaris",
      name_tc: "星輝月",
      name_en: "Stellaris",
      symbol: "流星與焰火",
      description: "艾瑟利亞新年，星光節日最盛。夜空流星雨帶來吉兆，人們燃放焰火慶祝新曆的開始。"
    },
    {
      id: "viridistar",
      name_tc: "翠星月",
      name_en: "Viridistar",
      symbol: "綠意與花朵",
      description: "春季甦醒，森林與草原回春。翠星月期間舉行綠意祭典，人們戴上花環祈求豐收。"
    },
    {
      id: "ventaris",
      name_tc: "風行月",
      name_en: "Ventaris",
      symbol: "風旋與飛鳥",
      description: "空中城市天星聯邦舉行放風箏大會，象徵自由與希望，並祈求安全航行。"
    },
    {
      id: "ignistar",
      name_tc: "烈焰月",
      name_en: "Ignistar",
      symbol: "火焰與熾熱",
      description: "沙漠聯盟舉行烈焰舞，舞者手持火炬在沙漠中跳舞，象徵對挑戰的熱情與勇氣。"
    },
    {
      id: "aquatide",
      name_tc: "海潮月",
      name_en: "Aquatide",
      symbol: "潮汐與水波",
      description: "天星聯邦與海岸城市共同慶祝漁獲與航行安全，海邊響起鼓樂與歌聲。"
    },
    {
      id: "foliara",
      name_tc: "葉落月",
      name_en: "Foliara",
      symbol: "楓葉與豐收",
      description: "霜峰王國與鄰近農村舉辦豐收慶典，宴席豐盛，歌舞熱鬧。"
    },
    {
      id: "frostara",
      name_tc: "霜降月",
      name_en: "Frostara",
      symbol: "冰晶與雪花",
      description: "霜峰王國城鎮點亮冰雕，冰雪遊行吸引各地遊客，共享寒冬之美。"
    },
    {
      id: "crystallis",
      name_tc: "晶雪月",
      name_en: "Crystallis",
      symbol: "雪鷲與冬夜",
      description: "天空之城懸浮於雲端，白雪覆蓋，居民放飛雪鷲，象徵自由與夢想。"
    },
    {
      id: "substellar",
      name_tc: "沉星月",
      name_en: "Substellar",
      symbol: "黯淡星群與冥想",
      description: "整個大陸保持一晚停火，人民仰望星空沉思，感受夜的寧靜與力量。"
    },
    {
      id: "luminaura",
      name_tc: "幽光月",
      name_en: "Luminaura",
      symbol: "極光與螢光",
      description: "極光在北緯天際絢爛綻放，人們聚集篝火旁跳舞，祈求心靈與世界的和諧。"
    }
  ],
  characters: [
    {
      id: "xieen",
      name_tc: "謝恩",
      name_en: "Xie En",
      appearance: "銀灰色短髮、五官略顯清秀，身材修長，常穿深色長袍，手持家傳書卷。",
      abilities: "具有少見的星光魔法，能解讀天文預兆，精通書籍與古籍翻譯。",
      background: "原為星耀帝國議會書店職員，因捲入古老預言而踏上覺醒之旅。青梅竹馬為愛麗絲，兩人曾在書店共事。",
      affiliation: "starlight",
      location: "星耀城",
      relatedEvents: ["founding_starlight"],
      tags: ["主角", "魔法師", "預言者"],
      profileImage: "/images/characters/xieen.png"
    },
    {
      id: "astyr",
      name_tc: "阿斯蒂爾",
      name_en: "Astyr",
      appearance: "淺紫近白色中長編髮，戴黑框眼鏡與禮帽，身穿紫色長外套與黑色長褲，面容冷漠卻眼神深邃。",
      abilities: "死靈魔法大師，能與靈魂溝通並召喚幽影；善於情報與心理操控。",
      background: "月影王國神秘智者，曾參與預言石碑儀式，暗中指引謝恩尋找真相。",
      affiliation: "moonshadow",
      location: "幻月湖",
      relatedEvents: ["first_vision"],
      tags: ["配角", "死靈師", "先知"],
      profileImage: "/images/characters/astyr.png"
    },
    {
      id: "penguin",
      name_tc: "企鵝",
      name_en: "Penguin",
      appearance: "圓潤身形、黑白羽毛分佈均勻，雙眼晶亮，背部繫小紅巾，顯得活潑可愛。",
      abilities: "能感知夢境與現實之間的連結，尤其擅長引導謝恩破解幻象。",
      background: "謝恩在夢境中偶遇，後成為他的旅途同伴並提供各種機巧協助。",
      affiliation: "",
      location: "夢境之域",
      relatedEvents: ["dream_encounter"],
      tags: ["寵物/夥伴", "夢境使者"],
      profileImage: "/images/characters/penguin.png"
    }
  ],
  events: [
    {
      id: "founding_starlight",
      year: 1023,
      title: "星耀帝國建立",
      summary: "艾瑟利亞首個中央集權政體－星耀帝國在1023年建立，統合各州勢力。",
      description: "1023年，第一位皇帝依託星光魔法和古老劍士共同組建帝國。首都星耀城在灰原平原修築，象徵魔法與科技的結合開始。",
      location: "星耀城",
      relatedCharacters: ["xieen"]
    },
    {
      id: "first_vision",
      year: 1434,
      title: "謝恩初覺預兆",
      summary: "謝恩於1434年觀測到流星而展開命運之旅。",
      description: "沉星月第5日，謝恩在家中書店半夜觀測星象，看到罕見流星陣，引發腦海中古老記憶碎片，從此踏上探索古代遺跡與預言之路。",
      location: "星耀城書店",
      relatedCharacters: ["xieen", "astyr"]
    }
  ]
};
