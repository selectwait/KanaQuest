import React, { useState, useEffect, useRef } from 'react';
import { HiraganaChar, QuizQuestion } from '../types';
import { HIRAGANA_DATA } from '../constants';
import { Check, X, RefreshCw, Trophy, ArrowRight } from 'lucide-react';

interface QuizModeProps {
  selectedGroups: string[];
  onExit: () => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({ selectedGroups, onExit }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    startNewQuiz();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGroups]);

  const startNewQuiz = () => {
    // Filter data based on selection, or use all if none selected
    let pool = HIRAGANA_DATA;
    if (selectedGroups.length > 0) {
      pool = HIRAGANA_DATA.filter(char => selectedGroups.includes(char.group));
    }

    // Shuffle and pick 10 (or less if pool is small)
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10).map(char => ({
      char,
      userAnswer: '',
      isCorrect: null
    }));

    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setFeedback('idle');
    setInput('');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (feedback !== 'idle' || isFinished) return;

    const currentQ = questions[currentIndex];
    const isCorrect = input.toLowerCase().trim() === currentQ.char.romaji;

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    // Update question state
    const newQuestions = [...questions];
    newQuestions[currentIndex] = { ...currentQ, userAnswer: input, isCorrect };
    setQuestions(newQuestions);

    if (isCorrect) setScore(s => s + 1);

    // Auto advance after short delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setInput('');
        setFeedback('idle');
        inputRef.current?.focus();
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  if (isFinished) {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-yellow-100 rounded-full text-yellow-600">
            <Trophy size={48} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-500 mb-8">You scored {score} out of {questions.length}</p>
        
        <div className="space-y-3 mb-8 text-left max-h-60 overflow-y-auto custom-scrollbar">
          {questions.map((q, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                 <span className="text-2xl font-bold text-slate-700 w-10">{q.char.kana}</span>
                 <span className="text-sm text-slate-500">{q.char.romaji}</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className={`text-sm ${q.isCorrect ? 'text-green-600' : 'text-red-500 font-bold'}`}>
                    {q.userAnswer}
                 </span>
                 {q.isCorrect ? <Check size={16} className="text-green-500" /> : <X size={16} className="text-red-500" />}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button 
            onClick={onExit}
            className="flex-1 py-3 px-6 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors"
          >
            Exit
          </button>
          <button 
            onClick={startNewQuiz}
            className="flex-1 py-3 px-6 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} /> Retry
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="mb-8 flex justify-between items-center px-2">
        <span className="text-slate-500 font-mono text-sm font-bold">Q{currentIndex + 1}/{questions.length}</span>
        <button onClick={onExit} className="text-slate-400 hover:text-slate-600 text-sm font-medium">Exit Quiz</button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 pb-12 relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
           <div 
             className="h-full bg-indigo-500 transition-all duration-300 ease-out"
             style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
           />
        </div>

        <div className="text-center py-8">
          <div className="text-9xl font-black text-slate-800 mb-8 transition-all duration-300">
            {currentQ.char.kana}
          </div>

          <form onSubmit={handleSubmit} className="relative max-w-xs mx-auto">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type Romaji..."
              className={`w-full text-center text-2xl font-bold py-4 px-6 rounded-2xl border-2 outline-none transition-all duration-300 
                ${feedback === 'idle' ? 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50' : ''}
                ${feedback === 'correct' ? 'border-green-500 bg-green-50 text-green-700' : ''}
                ${feedback === 'incorrect' ? 'border-red-500 bg-red-50 text-red-700' : ''}
              `}
              disabled={feedback !== 'idle'}
              autoFocus
            />
            
            {/* Feedback Icons */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              {feedback === 'correct' && <Check size={28} className="text-green-500 animate-bounce" />}
              {feedback === 'incorrect' && <X size={28} className="text-red-500 animate-pulse" />}
            </div>
          </form>

          {feedback === 'incorrect' && (
             <div className="mt-4 text-red-500 font-bold animate-fade-in">
               Correct answer: {currentQ.char.romaji}
             </div>
          )}
        </div>
      </div>
      
      <button 
        onClick={() => handleSubmit()}
        disabled={feedback !== 'idle' || !input}
        className="w-full mt-6 bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-slate-700 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2"
      >
        Submit Answer <ArrowRight size={18} />
      </button>
    </div>
  );
};
