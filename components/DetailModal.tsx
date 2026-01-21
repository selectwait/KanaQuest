import React, { useState, useEffect } from 'react';
import { HiraganaChar } from '../types';
import { HIRAGANA_EXAMPLES } from '../constants';
import { generateVocabularyExample } from '../services/geminiService';
import { Volume2, Sparkles, Loader2, X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface DetailModalProps {
  char: HiraganaChar;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const DetailModal: React.FC<DetailModalProps> = ({ char, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  const [vocab, setVocab] = useState<{ word: string, reading: string, meaning: string, sentence: string } | null>(null);
  const [loading, setLoading] = useState(false);

  // Reset vocab when character changes
  useEffect(() => {
    setVocab(null);
    setLoading(false);
  }, [char]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, hasNext, hasPrev, onClose]);

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(char.kana);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  const handleGenerateVocab = async () => {
    if (vocab) return;
    setLoading(true);
    const data = await generateVocabularyExample(char.kana, char.romaji);
    setVocab(data);
    setLoading(false);
  };

  // Find static examples
  const examples = HIRAGANA_EXAMPLES.find(ex => ex.kana === char.kana);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-fade-in" onClick={onClose}>
      
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8 min-h-[600px] max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 z-10 transition-colors">
          <X size={24} className="text-slate-600" />
        </button>

        {/* Navigation Buttons */}
        <button 
          onClick={onPrev} 
          disabled={!hasPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-lg disabled:opacity-0 transition-all z-20 md:-left-12 md:bg-white md:text-slate-800"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={onNext} 
          disabled={!hasNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-slate-800 rounded-full shadow-lg disabled:opacity-0 transition-all z-20 md:-right-12 md:bg-white md:text-slate-800"
        >
          <ChevronRight size={32} />
        </button>

        <div className="flex-1 flex flex-col items-center justify-start text-center space-y-8 mt-4">
            {/* Two Letters Centered */}
            <div className="flex items-center justify-center gap-6 sm:gap-16 w-full">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-28 h-28 sm:w-40 sm:h-40 bg-slate-50 rounded-2xl border-2 border-slate-100 flex items-center justify-center shadow-inner">
                         <span className="text-6xl sm:text-8xl kana-font text-slate-800">{char.kana}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Standard</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="w-28 h-28 sm:w-40 sm:h-40 bg-slate-50 rounded-2xl border-2 border-slate-100 flex items-center justify-center shadow-inner">
                         <span className="text-6xl sm:text-8xl artistic-font text-slate-800">{char.kana}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Artistic</span>
                </div>
            </div>

            {/* Pronunciation & Sounds Like */}
            <div>
                <div className="flex items-center justify-center gap-4 mb-2">
                    <h2 className="text-5xl font-bold text-indigo-600 font-mono">{char.romaji}</h2>
                    <button 
                        onClick={playAudio}
                        className="p-3 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors"
                        aria-label="Play pronunciation"
                    >
                        <Volume2 size={24} />
                    </button>
                </div>
                <p className="text-slate-500 font-medium text-lg">
                    Sounds like <span className="text-indigo-600 font-bold">"{char.mnemonicKeyword}"</span>
                </p>
            </div>

            {/* Vocabulary Section */}
            <div className="w-full max-w-lg pt-4 text-left">
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                <BookOpen size={16} />
                Common Vocabulary
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {examples?.words.map((ex, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col">
                    <span className="text-2xl font-bold text-slate-800 mb-1">{ex.word}</span>
                    <span className="text-sm text-slate-500">{ex.meaning}</span>
                  </div>
                )) || (
                  <div className="col-span-2 text-center text-slate-400 italic py-4">
                    No static examples available for this character.
                  </div>
                )}
              </div>

              {/* AI Generation Section */}
              <div className="border-t border-slate-100 pt-6">
                 {!vocab && !loading && (
                    <div className="text-center">
                      <p className="text-sm text-slate-400 mb-3">Need a full sentence example?</p>
                      <button 
                          onClick={handleGenerateVocab}
                          className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors inline-flex items-center justify-center gap-2 font-bold text-sm"
                      >
                          <Sparkles size={16} />
                          Generate Sentence with AI
                      </button>
                    </div>
                 )}
                 
                 {loading && (
                    <div className="flex items-center justify-center gap-2 text-slate-400 animate-pulse py-2">
                        <Loader2 className="animate-spin" size={20} />
                        <span className="text-sm">Creating a sentence...</span>
                    </div>
                 )}

                 {vocab && (
                    <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100 animate-fade-in">
                        <div className="flex justify-between items-start mb-2">
                             <div className="flex flex-col">
                                 <span className="text-xl font-bold text-slate-800">{vocab.word}</span>
                                 <span className="text-xs text-slate-500">{vocab.reading}</span>
                             </div>
                             <span className="text-[10px] font-bold text-indigo-400 uppercase border border-indigo-200 px-1 rounded">AI Generated</span>
                        </div>
                        <p className="text-sm text-indigo-700 font-medium mb-2">{vocab.meaning}</p>
                        <p className="text-slate-600 italic text-sm border-t border-indigo-200 pt-2">"{vocab.sentence}"</p>
                    </div>
                 )}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
