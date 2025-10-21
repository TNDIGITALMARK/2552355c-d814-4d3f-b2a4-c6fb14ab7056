'use client';

import { onlineFriends, safeMessages } from '@/data/mockData';
import { useState } from 'react';

export default function FriendsPage() {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  const handleSendMessage = (friendUsername: string, message: string) => {
    alert(`Sending to ${friendUsername}: "${message}" 💬`);
  };

  const handleInviteToGame = (friendUsername: string) => {
    alert(`Inviting ${friendUsername} to play! 🎮`);
  };

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* Page Header */}
      <section className="py-8 px-4 bg-white border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">👥</span>
            <h1 className="text-3xl font-bold text-foreground">My Friends</h1>
          </div>
          <p className="text-muted-foreground">Connect safely with your approved friends!</p>
        </div>
      </section>

      {/* Online Friends List */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🟢</span>
              <h2 className="text-xl font-bold text-foreground">Online Now ({onlineFriends.length})</h2>
            </div>

            <div className="space-y-4">
              {onlineFriends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl shadow-lg">
                      {friend.avatar}
                    </div>

                    {/* Friend Info */}
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{friend.username}</h3>
                      {friend.status === 'playing' && friend.currentGame ? (
                        <p className="text-sm text-primary font-semibold flex items-center gap-1">
                          <span>🎮</span>
                          <span>Playing {friend.currentGame}</span>
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                          <span>🟢</span>
                          <span>Online</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedFriend(friend.username)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      💬 Chat
                    </button>
                    <button
                      onClick={() => handleInviteToGame(friend.username)}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      🎮 Invite
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safe Message Templates */}
          {selectedFriend && (
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  <h2 className="text-xl font-bold text-foreground">
                    Send Message to {selectedFriend}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedFriend(null)}
                  className="text-muted-foreground hover:text-foreground text-2xl"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Choose a safe, friendly message to send:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {safeMessages.map((message) => (
                  <button
                    key={message.id}
                    onClick={() => handleSendMessage(selectedFriend, message.text)}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border-2 border-primary/20 text-foreground px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 text-left"
                  >
                    {message.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Safety Notice */}
          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="font-bold text-foreground mb-2">Safe Chat Enabled</h3>
                <p className="text-sm text-muted-foreground">
                  All messages are pre-approved and monitored by parents. You can only send friendly, positive messages to keep everyone safe!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
