'use client';

import Image from 'next/image';
import { Game } from '@/data/mockData';

interface GameCardProps {
  game: Game;
  size?: 'small' | 'medium' | 'large';
  onPlay?: () => void;
}

export function GameCard({ game, size = 'medium', onPlay }: GameCardProps) {
  const sizeClasses = {
    small: 'w-full max-w-[200px]',
    medium: 'w-full max-w-[280px]',
    large: 'w-full max-w-[350px]'
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden`}
      onClick={onPlay}
    >
      {/* Game Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Friends Playing Indicator */}
        {game.friendsPlaying > 0 && (
          <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <span>👥</span>
            <span>{game.friendsPlaying}</span>
          </div>
        )}

        {/* Age Rating Badge */}
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-foreground">
          {game.ageRating}
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="font-bold text-base mb-2 text-foreground line-clamp-1">
          {game.name}
        </h3>

        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="text-sm font-semibold text-foreground">{game.rating}</span>
          </div>

          {/* Category */}
          <span className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground font-medium">
            {game.category}
          </span>
        </div>

        {/* Play Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPlay?.();
          }}
          className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Play Now
        </button>
      </div>
    </div>
  );
}
