import { useState } from 'react';
import MatchAnalysis from '@/components/MatchAnalysis';

export default function Home() {
  const [match, setMatch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    if (!match) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ match }),
      });
      const data = await response.json();
      setAnalysis(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          <img src="/soccer-icon.png" className="w-12 h-12 inline mr-2" />
          Futurologia AI
        </h1>
        <input
          type="text"
          value={match}
          onChange={(e) => setMatch(e.target.value)}
          placeholder="Ex: Flamengo x Palmeiras"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className={`mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <img src="/loading.gif" className="w-5 h-5 mr-2" />
              Analisando...
            </span>
          ) : (
            'Analisar Partida'
          )}
        </button>
        {analysis && <MatchAnalysis data={analysis} />}
      </div>
    </div>
  );
}