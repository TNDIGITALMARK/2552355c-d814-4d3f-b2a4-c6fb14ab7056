'use client';

import { earnedAchievements, weeklyStats } from '@/data/mockData';

export default function AchievementsPage() {
  const progressPercentage = (weeklyStats.newGamesTried / weeklyStats.weeklyGoal) * 100;

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      {/* Page Header */}
      <section className="py-8 px-4 bg-white border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🏆</span>
            <h1 className="text-3xl font-bold text-foreground">My Progress</h1>
          </div>
          <p className="text-muted-foreground">Track your gaming achievements and goals!</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Weekly Stats Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📊</span>
            <h2 className="text-xl font-bold text-foreground">This Week</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">⏰</div>
              <p className="text-2xl font-bold text-primary">{weeklyStats.playtime}</p>
              <p className="text-xs text-muted-foreground font-medium">Total Playtime</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🎮</div>
              <p className="text-2xl font-bold text-secondary">{weeklyStats.gamesPlayed}</p>
              <p className="text-xs text-muted-foreground font-medium">Games Played</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🤝</div>
              <p className="text-2xl font-bold text-green-600">{weeklyStats.positiveInteractions}</p>
              <p className="text-xs text-muted-foreground font-medium">Positive Actions</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🆕</div>
              <p className="text-2xl font-bold text-purple-600">{weeklyStats.newGamesTried}</p>
              <p className="text-xs text-muted-foreground font-medium">New Games Tried</p>
            </div>
          </div>
        </div>

        {/* Weekly Goal Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="text-xl font-bold text-foreground">Weekly Goal</h2>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-foreground">Try {weeklyStats.weeklyGoal} New Games</p>
              <p className="text-sm font-bold text-primary">
                {weeklyStats.newGamesTried} / {weeklyStats.weeklyGoal}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${progressPercentage}%` }}
              >
                {progressPercentage > 15 && (
                  <span className="text-xs font-bold text-white">{Math.round(progressPercentage)}%</span>
                )}
              </div>
            </div>

            {progressPercentage >= 100 ? (
              <p className="text-sm text-green-600 font-semibold flex items-center gap-1">
                <span>🎉</span>
                <span>Goal Completed! Amazing work!</span>
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Just {weeklyStats.weeklyGoal - weeklyStats.newGamesTried} more game{weeklyStats.weeklyGoal - weeklyStats.newGamesTried !== 1 ? 's' : ''} to reach your goal!
              </p>
            )}
          </div>
        </div>

        {/* Time Remaining Today */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⏳</span>
              <div>
                <h3 className="font-bold text-foreground text-lg">Time Remaining Today</h3>
                <p className="text-sm text-muted-foreground">Parent-approved playtime</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{weeklyStats.timeRemaining}</p>
              <p className="text-sm text-muted-foreground">left to play</p>
            </div>
          </div>
        </div>

        {/* Earned Achievements */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏅</span>
            <h2 className="text-xl font-bold text-foreground">Earned Badges</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {earnedAchievements.map((achievement) => {
              const categoryColors = {
                gaming: 'from-blue-100 to-blue-50 border-blue-200',
                social: 'from-green-100 to-green-50 border-green-200',
                creative: 'from-purple-100 to-purple-50 border-purple-200'
              };

              return (
                <div
                  key={achievement.id}
                  className={`bg-gradient-to-br ${categoryColors[achievement.category]} border-2 rounded-xl p-4 hover:scale-105 transition-transform duration-200`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Earned: {achievement.earnedDate}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Keep Going Encouragement */}
          <div className="mt-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-4 text-center">
            <p className="text-lg font-bold text-foreground mb-1">🌟 Keep Up the Great Work! 🌟</p>
            <p className="text-sm text-muted-foreground">You've earned {earnedAchievements.length} badges so far!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
