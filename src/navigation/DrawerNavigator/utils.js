import { getCurrentRouteName } from '../utils';

const LOCKED_SCREENS = [];
const LOCKED_CLOSED = 'locked-closed';
const UNLOCKED = 'unlocked';
const IDLE = 'Idle';
const DRAGGING = 'Dragging';
const SETTLING = 'Settling';
const PORTRAIT_PER_WIDTH = 0.78;
const LANDSCAPE_PER_WIDTH = 0.58;

const getDrawerLockMode = nav => {
  const routeName = getCurrentRouteName(nav);

  return LOCKED_SCREENS.includes(routeName) ? LOCKED_CLOSED : UNLOCKED;
};

const getDrawerWidth = ({ width, isLandscape }) => {
  const per = isLandscape ? LANDSCAPE_PER_WIDTH : PORTRAIT_PER_WIDTH;

  return width * per;
};

export {
  getDrawerLockMode,
  getDrawerWidth,
  LOCKED_CLOSED,
  UNLOCKED,
  IDLE,
  DRAGGING,
  SETTLING
};
