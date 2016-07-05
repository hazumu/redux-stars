import { MOUSEMOVE, UPDATE, INITIALIZE_STAR, DID_STARS_UNMOUNTED } from './actionTypes';

// action creators
export function mousemove(e) {
  return {
    e,
    type: MOUSEMOVE,
  };
}

export function update() {
  return {
    type: UPDATE,
  };
}

export function initializeStar() {
  return {
    type: INITIALIZE_STAR,
  };
}

export function didStarsUnmounted() {
  return {
    type: DID_STARS_UNMOUNTED,
  };
}
