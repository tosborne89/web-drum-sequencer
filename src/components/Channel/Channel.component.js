import React from 'react';
import PropTypes from 'prop-types';
import { ChannelSelect } from './ChannelSelect.component';
import { Toggles } from '../Toggles';
import { Box } from '../design-system';
import { RemoveButton } from './RemoveButton.component';
import { Knob } from '../Knob.component';
import { HitButton } from './HitButton.component';

export const ChannelComponent = ({
  channel,
  onSelectSample,
  onSetGain,
  onPressRemove,
}) => (
  <Box mb={3} display="flex">
    <Box
      bg="darkGray"
      width="16rem"
      p={2}
      borderRadius="0.25rem"
      mr={3}
      display="flex"
      alignItems="center"
      position="relative"
    >
      <ChannelSelect onChange={onSelectSample} onSetGain={onSetGain} channel={channel} />
      <Knob size={40} value={channel.gain * 100} onChange={onSetGain} />
      <HitButton channel={channel} />
    </Box>
    <Toggles notes={channel.notes} channelID={channel.id} />
    <RemoveButton onClick={onPressRemove} />
  </Box>
);

ChannelComponent.propTypes = {
  channel: PropTypes.shape({
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onSelectSample: PropTypes.func.isRequired,
  onSetGain: PropTypes.func.isRequired,
  onPressRemove: PropTypes.func.isRequired,
};
