import React from 'react';
import { HiraganaChar } from '../types';
import { Volume2 } from 'lucide-react';

interface HiraganaCardProps {
  char: HiraganaChar;
  onClick: () => void;
}

export const HiraganaCard: React.FC<HiraganaCardProps> = ({ char, onClick }) => {
  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(char.kana);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      className="relative w-full aspect-[3/4] group cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300"
      onClick={onClick}
    >
      <div className="w-full h-full bg-white rounded-2xl border-2 border-indigo-100 flex flex-col items-center justify-center p-6 text-center shadow-lg relative overflow-hidden hover:border-indigo-300 transition-colors">
        
        {/* Bookmark Tag */}
        <div className="absolute -top-1 right-4">
          <div className="bg-indigo-500 text-white text-xs font-bold py-3 px-2 rounded-b-lg shadow-md flex flex-col items-center">
             <span className="writing-mode-vertical">{char.group.replace('-Column', '')}</span>
          </div>
        </div>
        
        <div className="flex-grow flex items-center justify-center pt-6">
          <h2 className="text-8xl font-black text-slate-800 mb-2 kana-font">{char.kana}</h2>
        </div>
        
        <div className="mt-auto w-full flex justify-between items-center px-2">
          <div className="text-2xl font-bold text-indigo-600 font-mono">{char.romaji}</div>
          <button 
            onClick={playAudio}
            className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
            aria-label="Play pronunciation"
          >
            <Volume2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
