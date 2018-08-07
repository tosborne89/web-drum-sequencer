import React from 'react';
import { playNoteNow } from '../../services/audioScheduler';
import { HoverButton } from '../design-system';

export const HitButton = ({ channel }) => (
  <HoverButton
    height={30}
    width={30}
    bg="lightGray"
    activeBg="gray"
    transitionSpeed="0.1s"
    ml={2}
    p={0}
    outline="none"
    onMouseDown={() => {
      playNoteNow(channel.sample.url, channel.gain);
    }}
  />
);
