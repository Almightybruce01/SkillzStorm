import { useState, useCallback } from 'react';
import { GameLauncher } from './GameLauncher';
import { PreGameAd } from '../components/ads/PreGameAd';
import { GameOverAd } from '../components/ads/GameOverAd';
import type { Grade } from './questionBank';
import type { GameInfo } from '../engine/gameData';
import { NeonCanvasGame } from './neon/NeonCanvasGame';
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

  const neonKey = resolveNeonEngine(game);
  const useLegacyReact =
    (game as GameInfo & { useReactEngine?: boolean }).useReactEngine === true;

  const handleAdReady = useCallback(() => {
    setShowPreAd(false);
    setReadyToPlay(true);
  }, []);

  const handleGameClose = useCallback((finalScore?: number) => {
    setReadyToPlay(false);
    if (typeof finalScore === 'number') setLastScore(finalScore);
    setShowGameOverAd(true);
  }, []);

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
              description={game.description}
              onClose={(s) => handleGameClose(s)}
            />
          )}
        </div>
      )}

      <PreGameAd show={showPreAd} gameName={game.name} onReady={handleAdReady} />

      <GameOverAd
        show={showGameOverAd}
        score={lastScore}
        onRetry={handleRetry}
        onClose={() => setShowGameOverAd(false)}
      />
    </div>
  );
}

