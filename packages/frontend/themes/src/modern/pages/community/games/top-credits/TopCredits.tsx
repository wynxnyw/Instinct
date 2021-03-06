import {Link} from 'wouter';
import {User} from '@instinct-prj/interface';
import React, {useEffect, useState} from 'react';
import {Avatar, userService} from '@instinct-prj/frontend';
import {UserLeaderboardSkeleton} from '../UserLeaderboardSkeleton';
import {GamesCardState, defaultGamesCardState} from '../Games.types';

export function TopCredits() {
  const [state, setState] = useState<GamesCardState>(defaultGamesCardState);

  useEffect(() => {
    async function fetchMostCredits(): Promise<void> {
      const users: User[] = await userService.getMostCredits();
      setState({
        users,
        showSpinner: false,
      });
    }
    fetchMostCredits();
  }, []);

  return (
    <article className="default-section ranking-container">
      <table className="default-table ranking-content">
        <thead>
          <tr>
            <th colSpan={2}>Username</th>
            <th>Most Credits</th>
          </tr>
        </thead>
        <tbody>
          {!state.showSpinner ? (
            state.users.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="account-avatar">
                    <Link to={`/profile/${user.username}`}>
                      <Avatar look={user.figure} />
                    </Link>
                  </div>
                </td>
                <td>
                  <Link to={`/profile/${user.username}`}>{user.username}</Link>
                </td>
                <td>
                  <span>{user.credits}</span>
                </td>
              </tr>
            ))
          ) : (
            <>
              <UserLeaderboardSkeleton />
              <UserLeaderboardSkeleton />
              <UserLeaderboardSkeleton />
            </>
          )}
        </tbody>
      </table>
    </article>
  );
}
