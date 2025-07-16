interface AnalysisResult {
  prediction: {
    winner: string;
    goals: string;
    cards: string;
    corners: string;
    firstScorer: string;
  };
  report: string;
}

export async function generateAnalysis(
  team1: string,
  team2: string,
  stats1: any,
  stats2: any
): Promise<AnalysisResult> {
  const prompt = `Analise o confronto entre ${team1} e ${team2} com base nestas estatísticas em português...`; // (Prompt completo omitido por brevidade)

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    }),
  });

  if (!response.ok) throw new Error('Falha na chamada da OpenAI');
  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
}