import React, { useState } from 'react';
import { HIRAGANA_DATA, HIRAGANA_GROUPS } from './constants';
import { HiraganaCard } from './components/HiraganaCard';
import { QuizMode } from './components/QuizMode';
import { DetailModal } from './components/DetailModal';
import { AppMode } from './types';
import { BookOpen, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.LEARN);
  const [activeGroups, setActiveGroups] = useState<string[]>([]);
  const [selectedCharIndex, setSelectedCharIndex] = useState<number | null>(null);
  
  // Group selection toggle
  const toggleGroup = (group: string) => {
    setActiveGroups(prev => 
      prev.includes(group) 
        ? prev.filter(g => g !== group)
        : [...prev, group]
    );
    setSelectedCharIndex(null); // Close modal if filter changes
  };

  const filteredChars = activeGroups.length > 0 
    ? HIRAGANA_DATA.filter(char => activeGroups.includes(char.group))
    : HIRAGANA_DATA;

  const handleNext = () => {
    if (selectedCharIndex !== null && selectedCharIndex < filteredChars.length - 1) {
      setSelectedCharIndex(selectedCharIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedCharIndex !== null && selectedCharIndex > 0) {
      setSelectedCharIndex(selectedCharIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
               <div className="bg-indigo-600 text-white p-2 rounded-lg">
                 <span className="font-bold text-xl">あ</span>
               </div>
               <h1 className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">KanaQuest</h1>
            </div>

            <nav className="flex space-x-1 sm:space-x-4">
              <button
                onClick={() => setMode(AppMode.LEARN)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  mode === AppMode.LEARN 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <BookOpen size={18} />
                <span className="hidden sm:inline">Learn</span>
              </button>
              <button
                onClick={() => setMode(AppMode.QUIZ)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  mode === AppMode.QUIZ 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <GraduationCap size={18} />
                <span className="hidden sm:inline">Quiz</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Mode: Learn */}
        {mode === AppMode.LEARN && (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar: Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
               <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <h3 className="font-bold text-slate-800 mb-4 flex items-center justify-between">
                    Groups
                    {activeGroups.length > 0 && (
                      <button 
                        onClick={() => setActiveGroups([])}
                        className="text-xs text-indigo-600 hover:underline"
                      >
                        Clear
                      </button>
                    )}
                 </h3>
                 <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 custom-scrollbar">
                    {HIRAGANA_GROUPS.map(group => (
                      <button
                        key={group}
                        onClick={() => toggleGroup(group)}
                        className={`px-3 py-2 rounded-lg text-sm text-left transition-colors whitespace-nowrap ${
                          activeGroups.includes(group)
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {group}
                      </button>
                    ))}
                 </div>
               </div>
            </aside>

            {/* Content: Cards Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">
                  {activeGroups.length === 0 ? "All Characters" : `${activeGroups.length} Groups Selected`}
                </h2>
                <p className="text-slate-500">
                  Click a card to see the details, artistic style, and example words.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredChars.map((char, index) => (
                  <HiraganaCard 
                    key={char.kana} 
                    char={char} 
                    onClick={() => setSelectedCharIndex(index)}
                  />
                ))}
              </div>
              
              {filteredChars.length === 0 && (
                <div className="text-center py-20 text-slate-400">
                  No characters found in selected groups.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mode: Quiz */}
        {mode === AppMode.QUIZ && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-2xl mb-8 text-center">
               <h2 className="text-3xl font-bold text-slate-800 mb-2">Test Your Knowledge</h2>
               <p className="text-slate-500 mb-8">
                 Select specific groups in the Learn tab to filter the quiz, or practice everything at once.
                 {activeGroups.length > 0 && <span className="block mt-2 font-medium text-indigo-600">Testing {activeGroups.length} active groups</span>}
               </p>
            </div>
            <QuizMode 
              selectedGroups={activeGroups} 
              onExit={() => setMode(AppMode.LEARN)} 
            />
          </div>
        )}

      </main>

      {/* Detail Modal Overlay */}
      {selectedCharIndex !== null && mode === AppMode.LEARN && (
        <DetailModal
          char={filteredChars[selectedCharIndex]}
          onClose={() => setSelectedCharIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedCharIndex < filteredChars.length - 1}
          hasPrev={selectedCharIndex > 0}
        />
      )}

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2024 KanaQuest.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
