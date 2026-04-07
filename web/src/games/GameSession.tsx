import { useState, useCallback } from 'react';
import { GameLauncher } from './GameLauncher';
import { PreGameAd } from '../components/ads/PreGameAd';
import { GameOverAd } from '../components/ads/GameOverAd';
import type { Grade } from './questionBank';
import type { GameInfo } from '../engine/gameData';
import { NeonCanvasGame } from './neon/NeonCanvasGame';
import { mergeNeonHighScore } from './neon/persistence/highScores';
import { resolveNeonEngine } from './neon/resolveEngine';

interface Props {
  game: GameInfo;
  grade: Grade;
}

/**
 * Wraps a game engine with pre-game and post-game ad experiences.
 * - Shows a pre-roll ad each time the user starts or taps "Play Again"
 * - Presents a GameOverAd shell that can trigger another round
 * - Uses neon canvas engines site-wide; set `game.neonEngine` or use legacy React engines via `useReactEngine`
 */
export function GameSession({ game, grade }: Props) {
  /** Pre-roll disabled: it stacked with INSERT COIN and AdSense often blocked real starts. Neon idle screen is enough. */
  const [showPreAd, setShowPreAd] = useState(false);
  const [readyToPlay, setReadyToPlay] = useState(true);
  const [showGameOverAd, setShowGameOverAd] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [personalBest, setPersonalBest] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);

  const neonKey = resolveNeonEngine(game);
  const useLegacyReact =
    (game as GameInfo & { useReactEngine?: boolean }).useReactEngine === true;

  const handleAdReady = useCallback(() => {
    setShowPreAd(false);
    setReadyToPlay(true);
  }, []);

  const handleGameClose = useCallback((finalScore?: number) => {
    setReadyToPlay(false);
    if (typeof finalScore === 'number') {
      setLastScore(finalScore);
      const r = mergeNeonHighScore(game.id, finalScore);
      setPersonalBest(r.best);
      setIsNewRecord(r.isNew);
    } else {
      setIsNewRecord(false);
    }
    setShowGameOverAd(true);
  }, [game.id]);

  const handleRetry = useCallback(() => {
    setShowGameOverAd(false);
    setShowPreAd(false);
    setReadyToPlay(true);
    setReloadKey((k) => k + 1);
  }, []);

  return (
    <div className="relative">
      {readyToPlay && (
        <div key={reloadKey}>
          {useLegacyReact ? (
            <GameLauncher gameId={game.id} grade={grade} onClose={() => handleGameClose()} />
          ) : (
            <NeonCanvasGame
              engineKey={neonKey}
              gameTitle={game.name}
              gameSlug={game.id}
              grade={grade}
              description={game.description}
              milestoneEvery={neonKey === 'flappy' ? 5 : 0}
              adRefreshKey={game.id}
              onClose={(s) => handleGameClose(s)}
            />
          )}
        </div>
      )}

      <PreGameAd show={showPreAd} gameName={game.name} onReady={handleAdReady} />

      <GameOverAd
        show={showGameOverAd}
        score={lastScore}
        personalBest={personalBest}
        isNewRecord={isNewRecord}
        onRetry={handleRetry}
        onClose={() => setShowGameOverAd(false)}
      />
    </div>
  );
}

