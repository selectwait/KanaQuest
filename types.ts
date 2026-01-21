export interface HiraganaChar {
  kana: string;
  romaji: string;
  group: string;
  mnemonicKeyword: string;
  mnemonicDescription: string;
  imagePlaceholderText: string;
}

export interface QuizQuestion {
  char: HiraganaChar;
  userAnswer: string;
  isCorrect: boolean | null;
}

export enum AppMode {
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
}

export interface VocabularyWord {
  word: string;
  meaning: string;
}

export interface HiraganaExample {
  kana: string;
  romaji: string;
  words: VocabularyWord[];
}
