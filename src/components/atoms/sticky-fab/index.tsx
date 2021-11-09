import { Fab, styled } from '@mui/material';

const StickyFab = styled(Fab)({
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  zIndex: 10000,
});

export default StickyFab;
