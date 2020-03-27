import React from 'react';
import { AvatarProps } from './';

export function Avatar({ look }: AvatarProps) {
  return (
    <img
      alt="player avatar"
      src={`https://avatars.habboon.pw/avatarimage.php?figure=${look}`}
      className="pixelated"
    />
  )
}