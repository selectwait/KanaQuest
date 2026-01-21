import { HiraganaChar, HiraganaExample } from './types';

export const HIRAGANA_GROUPS = [
  "A-Column", "Ka-Column", "Sa-Column", "Ta-Column", "Na-Column",
  "Ha-Column", "Ma-Column", "Ya-Column", "Ra-Column", "Wa-Column"
];

export const HIRAGANA_DATA: HiraganaChar[] = [
  // A-Column
  { kana: "あ", romaji: "a", group: "A-Column", mnemonicKeyword: "Antenna", mnemonicDescription: "Looks like an antenna on a roof.", imagePlaceholderText: "Antenna" },
  { kana: "い", romaji: "i", group: "A-Column", mnemonicKeyword: "Eels", mnemonicDescription: "Two eels swimming side by side.", imagePlaceholderText: "Two Eels" },
  { kana: "う", romaji: "u", group: "A-Column", mnemonicKeyword: "U-Turn", mnemonicDescription: "A sideways U laying down.", imagePlaceholderText: "Sideways U" },
  { kana: "え", romaji: "e", group: "A-Column", mnemonicKeyword: "Exercise", mnemonicDescription: "Someone exercising, stretching their back.", imagePlaceholderText: "Person Exercising" },
  { kana: "お", romaji: "o", group: "A-Column", mnemonicKeyword: "On the Green", mnemonicDescription: "A golfer hitting a ball 'on the green'.", imagePlaceholderText: "Golfer" },

  // Ka-Column
  { kana: "か", romaji: "ka", group: "Ka-Column", mnemonicKeyword: "Car", mnemonicDescription: "Looks like a car driving off a cliff.", imagePlaceholderText: "Car Cliff" },
  { kana: "き", romaji: "ki", group: "Ka-Column", mnemonicKeyword: "Key", mnemonicDescription: "Looks like an old fashioned key.", imagePlaceholderText: "Old Key" },
  { kana: "く", romaji: "ku", group: "Ka-Column", mnemonicKeyword: "Cuckoo", mnemonicDescription: "The open beak of a cuckoo bird.", imagePlaceholderText: "Bird Beak" },
  { kana: "け", romaji: "ke", group: "Ka-Column", mnemonicKeyword: "Keg", mnemonicDescription: "Looks like a keg of beer.", imagePlaceholderText: "Beer Keg" },
  { kana: "こ", romaji: "ko", group: "Ka-Column", mnemonicKeyword: "Koi", mnemonicDescription: "Two koi fish swimming in a circle.", imagePlaceholderText: "Koi Fish" },

  // Sa-Column
  { kana: "さ", romaji: "sa", group: "Sa-Column", mnemonicKeyword: "Samurai", mnemonicDescription: "A samurai face with a headband.", imagePlaceholderText: "Samurai Face" },
  { kana: "し", romaji: "shi", group: "Sa-Column", mnemonicKeyword: "She", mnemonicDescription: "'She' has very long hair (like a hook).", imagePlaceholderText: "Hook/Hair" },
  { kana: "す", romaji: "su", group: "Sa-Column", mnemonicKeyword: "Swing", mnemonicDescription: "A child swinging on a swing set (loop).", imagePlaceholderText: "Swing Set" },
  { kana: "せ", romaji: "se", group: "Sa-Column", mnemonicKeyword: "Sunset", mnemonicDescription: "Looking at a sunset over the horizon.", imagePlaceholderText: "Sunset" },
  { kana: "そ", romaji: "so", group: "Sa-Column", mnemonicKeyword: "Sewing", mnemonicDescription: "A zig-zag sewing stitch.", imagePlaceholderText: "Stitch" },

  // Ta-Column
  { kana: "た", romaji: "ta", group: "Ta-Column", mnemonicKeyword: "Ta", mnemonicDescription: "Looks like the letters 't' and 'a'.", imagePlaceholderText: "t a" },
  { kana: "ち", romaji: "chi", group: "Ta-Column", mnemonicKeyword: "Cheerleader", mnemonicDescription: "A cheerleader doing a pose.", imagePlaceholderText: "Cheerleader" },
  { kana: "つ", romaji: "tsu", group: "Ta-Column", mnemonicKeyword: "Tsunami", mnemonicDescription: "A big wave crashing down.", imagePlaceholderText: "Wave" },
  { kana: "て", romaji: "te", group: "Ta-Column", mnemonicKeyword: "Table", mnemonicDescription: "The edge of a table.", imagePlaceholderText: "Table Edge" },
  { kana: "と", romaji: "to", group: "Ta-Column", mnemonicKeyword: "Toe", mnemonicDescription: "Looks like a toe with a thorn in it.", imagePlaceholderText: "Toe" },

  // Na-Column
  { kana: "な", romaji: "na", group: "Na-Column", mnemonicKeyword: "Knot", mnemonicDescription: "Someone tying a knot.", imagePlaceholderText: "Tying Knot" },
  { kana: "に", romaji: "ni", group: "Na-Column", mnemonicKeyword: "Knee", mnemonicDescription: "Looks like a knee cap.", imagePlaceholderText: "Knee" },
  { kana: "ぬ", romaji: "nu", group: "Na-Column", mnemonicKeyword: "Noodles", mnemonicDescription: "Chopsticks grabbing noodles.", imagePlaceholderText: "Noodles" },
  { kana: "ね", romaji: "ne", group: "Na-Column", mnemonicKeyword: "Net", mnemonicDescription: "A fishing net with a loop.", imagePlaceholderText: "Net" },
  { kana: "の", romaji: "no", group: "Na-Column", mnemonicKeyword: "No", mnemonicDescription: "A big 'No' sign circle.", imagePlaceholderText: "Circle Sign" },

  // Ha-Column
  { kana: "は", romaji: "ha", group: "Ha-Column", mnemonicKeyword: "Hockey", mnemonicDescription: "A hockey player and a puck.", imagePlaceholderText: "Hockey Player" },
  { kana: "ひ", romaji: "hi", group: "Ha-Column", mnemonicKeyword: "He", mnemonicDescription: "'He' is laughing (big mouth).", imagePlaceholderText: "Laughing Mouth" },
  { kana: "ふ", romaji: "fu", group: "Ha-Column", mnemonicKeyword: "Fuji", mnemonicDescription: "Mt. Fuji with snow on top.", imagePlaceholderText: "Mountain" },
  { kana: "へ", romaji: "he", group: "Ha-Column", mnemonicKeyword: "Heaven", mnemonicDescription: "Pointing up to heaven (mountain shape).", imagePlaceholderText: "Arrow Up" },
  { kana: "ほ", romaji: "ho", group: "Ha-Column", mnemonicKeyword: "Home", mnemonicDescription: "A hockey player playing at home (looks like 'ha' but with a roof).", imagePlaceholderText: "Hockey + Roof" },

  // Ma-Column
  { kana: "ま", romaji: "ma", group: "Ma-Column", mnemonicKeyword: "Mast", mnemonicDescription: "The mast of a ship with sails.", imagePlaceholderText: "Ship Mast" },
  { kana: "み", romaji: "mi", group: "Ma-Column", mnemonicKeyword: "Me", mnemonicDescription: "Who is 21? 'Me' (Looks like 21).", imagePlaceholderText: "Number 21" },
  { kana: "む", romaji: "mu", group: "Ma-Column", mnemonicKeyword: "Moo", mnemonicDescription: "A cow face saying 'Moo'.", imagePlaceholderText: "Cow Face" },
  { kana: "め", romaji: "me", group: "Ma-Column", mnemonicKeyword: "Mess", mnemonicDescription: "Looks like a noodle mess (similar to 'nu' but no loop).", imagePlaceholderText: "Messy Noodle" },
  { kana: "も", romaji: "mo", group: "Ma-Column", mnemonicKeyword: "Monitor", mnemonicDescription: "A monitor lizard catching a fly.", imagePlaceholderText: "Lizard Hook" },

  // Ya-Column
  { kana: "や", romaji: "ya", group: "Ya-Column", mnemonicKeyword: "Yak", mnemonicDescription: "A yak with big horns.", imagePlaceholderText: "Yak Horns" },
  { kana: "ゆ", romaji: "yu", group: "Ya-Column", mnemonicKeyword: "U-turn", mnemonicDescription: "A fish making a U-turn.", imagePlaceholderText: "Fish Turn" },
  { kana: "よ", romaji: "yo", group: "Ya-Column", mnemonicKeyword: "Yo-yo", mnemonicDescription: "Someone playing with a yo-yo.", imagePlaceholderText: "Yo-Yo" },

  // Ra-Column
  { kana: "ら", romaji: "ra", group: "Ra-Column", mnemonicKeyword: "Rabbit", mnemonicDescription: "A rabbit standing up.", imagePlaceholderText: "Rabbit" },
  { kana: "り", romaji: "ri", group: "Ra-Column", mnemonicKeyword: "Reeds", mnemonicDescription: "Tall reeds growing in a river.", imagePlaceholderText: "River Reeds" },
  { kana: "る", romaji: "ru", group: "Ra-Column", mnemonicKeyword: "Route", mnemonicDescription: "A crazy route with a loop at the end.", imagePlaceholderText: "Road Loop" },
  { kana: "れ", romaji: "re", group: "Ra-Column", mnemonicKeyword: "Rest", mnemonicDescription: "Someone resting their legs (looks like 'ne' but legs out).", imagePlaceholderText: "Sitting" },
  { kana: "ろ", romaji: "ro", group: "Ra-Column", mnemonicKeyword: "Road", mnemonicDescription: "A long road (looks like 'ru' without the loop).", imagePlaceholderText: "Curvy Road" },

  // Wa-Column
  { kana: "わ", romaji: "wa", group: "Wa-Column", mnemonicKeyword: "Wasp", mnemonicDescription: "A wasp flying (looks like 're' but rounded).", imagePlaceholderText: "Flying Bug" },
  { kana: "を", romaji: "wo", group: "Wa-Column", mnemonicKeyword: "Olympic", mnemonicDescription: "An olympic discus thrower.", imagePlaceholderText: "Thrower" },
  { kana: "ん", romaji: "n", group: "Wa-Column", mnemonicKeyword: "End", mnemonicDescription: "Looks like the letter 'n' (sort of).", imagePlaceholderText: "Script n" },
];

export const HIRAGANA_EXAMPLES: HiraganaExample[] = [
  { "kana": "あ", "romaji": "a", "words": [{ "word": "あか", "meaning": "red" }, { "word": "あさ", "meaning": "morning" }] },
  { "kana": "い", "romaji": "i", "words": [{ "word": "いいえ", "meaning": "no" }, { "word": "いす", "meaning": "chair" }] },
  { "kana": "う", "romaji": "u", "words": [{ "word": "うえ", "meaning": "up/above" }, { "word": "うみ", "meaning": "sea" }] },
  { "kana": "え", "romaji": "e", "words": [{ "word": "えき", "meaning": "station" }, { "word": "え", "meaning": "picture" }] },
  { "kana": "お", "romaji": "o", "words": [{ "word": "おちゃ", "meaning": "tea" }, { "word": "おいしい", "meaning": "delicious" }] },
  { "kana": "か", "romaji": "ka", "words": [{ "word": "かさ", "meaning": "umbrella" }, { "word": "かぎ", "meaning": "key" }] },
  { "kana": "き", "romaji": "ki", "words": [{ "word": "き", "meaning": "tree" }, { "word": "きく", "meaning": "to listen/hear" }] },
  { "kana": "く", "romaji": "ku", "words": [{ "word": "くち", "meaning": "mouth" }, { "word": "くるま", "meaning": "car" }] },
  { "kana": "け", "romaji": "ke", "words": [{ "word": "けいだい", "meaning": "mobile phone" }, { "word": "けしごむ", "meaning": "eraser" }] },
  { "kana": "こ", "romaji": "ko", "words": [{ "word": "ここ", "meaning": "here" }, { "word": "こども", "meaning": "child" }] },
  { "kana": "さ", "romaji": "sa", "words": [{ "word": "さかな", "meaning": "fish" }, { "word": "さけ", "meaning": "sake/alcohol" }] },
  { "kana": "し", "romaji": "shi", "words": [{ "word": "しお", "meaning": "salt" }, { "word": "した", "meaning": "under/below" }] },
  { "kana": "す", "romaji": "su", "words": [{ "word": "すし", "meaning": "sushi" }, { "word": "すき", "meaning": "to like" }] },
  { "kana": "せ", "romaji": "se", "words": [{ "word": "せなか", "meaning": "back (body)" }, { "word": "せんせい", "meaning": "teacher" }] },
  { "kana": "そ", "romaji": "so", "words": [{ "word": "そら", "meaning": "sky" }, { "word": "そこ", "meaning": "there" }] },
  { "kana": "た", "romaji": "ta", "words": [{ "word": "たまご", "meaning": "egg" }, { "word": "たべる", "meaning": "to eat" }] },
  { "kana": "ち", "romaji": "chi", "words": [{ "word": "ちず", "meaning": "map" }, { "word": "ちいさい", "meaning": "small" }] },
  { "kana": "つ", "romaji": "tsu", "words": [{ "word": "つくえ", "meaning": "desk" }, { "word": "つよい", "meaning": "strong" }] },
  { "kana": "て", "romaji": "te", "words": [{ "word": "て", "meaning": "hand" }, { "word": "てがみ", "meaning": "letter" }] },
  { "kana": "と", "romaji": "to", "words": [{ "word": "とり", "meaning": "bird" }, { "word": "ともだち", "meaning": "friend" }] },
  { "kana": "な", "romaji": "na", "words": [{ "word": "なに", "meaning": "what" }, { "word": "なつ", "meaning": "summer" }] },
  { "kana": "に", "romaji": "ni", "words": [{ "word": "にく", "meaning": "meat" }, { "word": "にじ", "meaning": "rainbow" }] },
  { "kana": "ぬ", "romaji": "nu", "words": [{ "word": "いぬ", "meaning": "dog" }, { "word": "ぬぐ", "meaning": "to undress" }] },
  { "kana": "ね", "romaji": "ne", "words": [{ "word": "ねこ", "meaning": "cat" }, { "word": "ねる", "meaning": "to sleep" }] },
  { "kana": "の", "romaji": "no", "words": [{ "word": "のむ", "meaning": "to drink" }, { "word": "のり", "meaning": "seaweed" }] },
  { "kana": "は", "romaji": "ha", "words": [{ "word": "はな", "meaning": "flower/nose" }, { "word": "はい", "meaning": "yes" }] },
  { "kana": "ひ", "romaji": "hi", "words": [{ "word": "ひ", "meaning": "fire/sun" }, { "word": "ひだり", "meaning": "left" }] },
  { "kana": "ふ", "romaji": "fu", "words": [{ "word": "ふね", "meaning": "ship" }, { "word": "ふゆ", "meaning": "winter" }] },
  { "kana": "へ", "romaji": "he", "words": [{ "word": "へや", "meaning": "room" }, { "word": "へび", "meaning": "snake" }] },
  { "kana": "ほ", "romaji": "ho", "words": [{ "word": "ほん", "meaning": "book" }, { "word": "ほし", "meaning": "star" }] },
  { "kana": "ま", "romaji": "ma", "words": [{ "word": "まる", "meaning": "circle" }, { "word": "まど", "meaning": "window" }] },
  { "kana": "み", "romaji": "mi", "words": [{ "word": "みず", "meaning": "water" }, { "word": "みみ", "meaning": "ear" }] },
  { "kana": "む", "romaji": "mu", "words": [{ "word": "むし", "meaning": "insect" }, { "word": "むずかしい", "meaning": "difficult" }] },
  { "kana": "め", "romaji": "me", "words": [{ "word": "め", "meaning": "eye" }, { "word": "めがね", "meaning": "glasses" }] },
  { "kana": "も", "romaji": "mo", "words": [{ "word": "もも", "meaning": "peach" }, { "word": "もり", "meaning": "forest" }] },
  { "kana": "や", "romaji": "ya", "words": [{ "word": "やま", "meaning": "mountain" }, { "word": "やさい", "meaning": "vegetables" }] },
  { "kana": "ゆ", "romaji": "yu", "words": [{ "word": "ゆめ", "meaning": "dream" }, { "word": "ゆき", "meaning": "snow" }] },
  { "kana": "よ", "romaji": "yo", "words": [{ "word": "よる", "meaning": "night" }, { "word": "よむ", "meaning": "to read" }] },
  { "kana": "ら", "romaji": "ra", "words": [{ "word": "らく", "meaning": "easy/comfortable" }, { "word": "らいげつ", "meaning": "next month" }] },
  { "kana": "り", "romaji": "ri", "words": [{ "word": "りんご", "meaning": "apple" }, { "word": "りょうり", "meaning": "cooking" }] },
  { "kana": "る", "romaji": "ru", "words": [{ "word": "みる", "meaning": "to see" }, { "word": "るす", "meaning": "away from home" }] },
  { "kana": "れ", "romaji": "re", "words": [{ "word": "れいぞうこ", "meaning": "refrigerator" }, { "word": "れんしゅう", "meaning": "practice" }] },
  { "kana": "ろ", "romaji": "ro", "words": [{ "word": "ろく", "meaning": "six" }, { "word": "いろ", "meaning": "color" }] },
  { "kana": "わ", "romaji": "wa", "words": [{ "word": "わたし", "meaning": "I/me" }, { "word": "わらう", "meaning": "to laugh" }] },
  { "kana": "を", "romaji": "wo", "words": [{ "word": "を", "meaning": "object particle (grammatical)" }] },
  { "kana": "ん", "romaji": "n", "words": [{ "word": "みかん", "meaning": "mandarin orange" }, { "word": "しんぶん", "meaning": "newspaper" }] }
];
