import { NextResponse } from 'next/server';
import { fetchTeamStats } from '@/lib/apiFootball';
import { generateAnalysis } from '@/lib/openai';

export const dynamic = 'force-dynamic'; // Para evitar cache em produção

export async function POST(request: Request) {
  const { match } = await request.json();
  if (!match) {
    return NextResponse.json({ error: 'Nome do confronto é obrigatório' }, { status: 400 });
  }

  try {
    const [team1, team2] = match.split(/ x | vs /i).map(t => t.trim());
    const [stats1, stats2] = await Promise.all([
      fetchTeamStats(team1),
      fetchTeamStats(team2),
    ]);
    const { prediction, report } = await generateAnalysis(team1, team2, stats1, stats2);
    return NextResponse.json({ prediction, stats: { team1: stats1, team2: stats2 }, report });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Erro ao analisar a partida. Tente times conhecidos (ex: Flamengo x Palmeiras)' },
      { status: 500 }
    );
  }
}