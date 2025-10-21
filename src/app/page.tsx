'use client';

import { GameCard } from '@/components/app/GameCard';
import { featuredGame, trendingGames, recentlyPlayedGames } from '@/data/mockData';

export default function GameDiscoveryPage() {
  const handlePlayGame = (gameName: string) => {
    alert(`Launching ${gameName} in safe mode! 🎮`);
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section with Gradient Background */}
      <section className="gradient-bg py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              🌟 Discover Amazing Games! 🌟
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore safe, fun games approved by parents!
            </p>
          </div>

          {/* Safety Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-foreground mb-2">Safe & Secure</h3>
              <p className="text-sm text-muted-foreground">All games are parent-approved</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold text-foreground mb-2">Endless Games</h3>
              <p className="text-sm text-muted-foreground">New adventures every day</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-foreground mb-2">Creative Fun</h3>
              <p className="text-sm text-muted-foreground">Build and create together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Game of the Day */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⭐</span>
            <h2 className="text-2xl font-bold text-foreground">Featured Game Today</h2>
          </div>

          <div className="flex justify-center">
            <GameCard
              game={featuredGame}
              size="large"
              onPlay={() => handlePlayGame(featuredGame.name)}
            />
          </div>
        </div>
      </section>

      {/* Trending with Friends */}
      <section className="py-8 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔥</span>
            <h2 className="text-2xl font-bold text-foreground">Trending with Friends</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {trendingGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                size="medium"
                onPlay={() => handlePlayGame(game.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Played */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🕹️</span>
            <h2 className="text-2xl font-bold text-foreground">Recently Played</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {recentlyPlayedGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                size="medium"
                onPlay={() => handlePlayGame(game.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Buttons */}
      <section className="py-8 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ready to Play?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg">
              📱 Download Our App
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg">
              👨‍👩‍👧 Learn More for Parents
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
