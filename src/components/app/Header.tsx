'use client';

export function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-40 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl">🎮</div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                <span className="text-primary">Playtime</span>{' '}
                <span className="text-secondary">Adventures</span>
              </h1>
              <p className="text-xs text-muted-foreground">Safe Gaming for Kids</p>
            </div>
          </div>

          {/* Time Remaining Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border-2 border-primary/20">
            <span className="text-lg">⏰</span>
            <div className="text-right">
              <p className="text-xs text-muted-foreground font-medium">Time Left Today</p>
              <p className="text-sm font-bold text-foreground">1h 45m</p>
            </div>
          </div>

          {/* Parent Mode Button (Desktop) */}
          <button className="hidden md:flex items-center gap-2 bg-footer-bg text-footer-foreground px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
            <span>👨‍👩‍👧</span>
            <span className="text-sm">Parent Mode</span>
          </button>
        </div>
      </div>
    </header>
  );
}
