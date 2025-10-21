// Mock Data for Kid-Friendly Roblox Companion App

export interface Game {
  id: string;
  name: string;
  thumbnail: string;
  rating: number;
  ageRating: '6+' | '8+' | '10+';
  friendsPlaying: number;
  category: string;
}

export interface Friend {
  id: string;
  username: string;
  avatar: string;
  status: 'online' | 'playing' | 'offline';
  currentGame?: string;
  lastActive?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
  category: 'gaming' | 'social' | 'creative';
}

export interface SafeMessage {
  id: string;
  text: string;
  category: 'greeting' | 'invitation' | 'praise' | 'general';
}

// Featured Game of the Day
export const featuredGame: Game = {
  id: 'featured-1',
  name: 'Pet Simulator Adventure',
  thumbnail: '/generated/game-pet-simulator.jpg',
  rating: 4.8,
  ageRating: '6+',
  friendsPlaying: 3,
  category: 'Adventure'
};

// Trending Games with Friends
export const trendingGames: Game[] = [
  {
    id: 'game-1',
    name: 'Build a Boat Challenge',
    thumbnail: '/generated/game-build-boat.jpg',
    rating: 4.7,
    ageRating: '6+',
    friendsPlaying: 2,
    category: 'Creative'
  },
  {
    id: 'game-2',
    name: 'Rainbow Friends Escape',
    thumbnail: '/generated/game-rainbow-friends.jpg',
    rating: 4.6,
    ageRating: '8+',
    friendsPlaying: 1,
    category: 'Adventure'
  },
  {
    id: 'game-3',
    name: 'Adopt Me Trading',
    thumbnail: '/generated/game-adopt-me.jpg',
    rating: 4.9,
    ageRating: '6+',
    friendsPlaying: 4,
    category: 'Social'
  }
];

// Recently Played Games
export const recentlyPlayedGames: Game[] = [
  {
    id: 'game-4',
    name: 'Treasure Island Adventure',
    thumbnail: '/generated/game-treasure-hunt.jpg',
    rating: 4.5,
    ageRating: '8+',
    friendsPlaying: 0,
    category: 'Adventure'
  },
  {
    id: 'game-5',
    name: 'Blocky Haven Town',
    thumbnail: '/generated/game-brookhaven.jpg',
    rating: 4.8,
    ageRating: '6+',
    friendsPlaying: 2,
    category: 'Roleplay'
  }
];

// Online Friends
export const onlineFriends: Friend[] = [
  {
    id: 'friend-1',
    username: 'Emma_Builder23',
    avatar: '🏗️',
    status: 'playing',
    currentGame: 'Build a Boat Challenge'
  },
  {
    id: 'friend-2',
    username: 'Jake_Racing_Pro',
    avatar: '🏎️',
    status: 'online'
  },
  {
    id: 'friend-3',
    username: 'Lily_Pet_Lover',
    avatar: '🐾',
    status: 'playing',
    currentGame: 'Pet Simulator Adventure'
  },
  {
    id: 'friend-4',
    username: 'Max_Explorer99',
    avatar: '🗺️',
    status: 'online'
  }
];

// Safe Message Templates
export const safeMessages: SafeMessage[] = [
  { id: 'msg-1', text: 'Want to play together?', category: 'invitation' },
  { id: 'msg-2', text: 'Great job in that game!', category: 'praise' },
  { id: 'msg-3', text: 'See you tomorrow!', category: 'greeting' },
  { id: 'msg-4', text: 'That was so fun!', category: 'general' },
  { id: 'msg-5', text: 'Good game!', category: 'praise' },
  { id: 'msg-6', text: 'Hi! How are you?', category: 'greeting' }
];

// Earned Achievements
export const earnedAchievements: Achievement[] = [
  {
    id: 'ach-1',
    name: 'First Win Badge',
    description: 'Won your first game!',
    icon: '🏆',
    earnedDate: 'Today',
    category: 'gaming'
  },
  {
    id: 'ach-2',
    name: 'Helper Badge',
    description: 'Helped 5 friends in games',
    icon: '🤝',
    earnedDate: 'Yesterday',
    category: 'social'
  },
  {
    id: 'ach-3',
    name: 'Creative Builder',
    description: 'Built 10 amazing creations',
    icon: '🎨',
    earnedDate: '2 days ago',
    category: 'creative'
  },
  {
    id: 'ach-4',
    name: 'Explorer Pro',
    description: 'Discovered 15 new games',
    icon: '🧭',
    earnedDate: '3 days ago',
    category: 'gaming'
  }
];

// Weekly Gaming Stats
export const weeklyStats = {
  playtime: '4 hours 30 minutes',
  gamesPlayed: 12,
  newGamesTried: 3,
  weeklyGoal: 5,
  timeRemaining: '1 hour 45 minutes',
  positiveInteractions: 8
};
