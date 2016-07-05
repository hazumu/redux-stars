import expect from 'expect';
import { MOUSEMOVE, UPDATE, INITIALIZE_STAR, DID_STARS_UNMOUNTED } from '../src/actions/actionTypes';
import { mousemove, update, initializeStar, didStarsUnmounted } from '../src/actions/actionCreators';

describe('actions', () => {
  it('should create mousemove action', () => {
    const e = {};
    expect(mousemove(e)).toEqual({
      type: MOUSEMOVE,
      e,
    });
  });

  it('should create update action', () => {
    expect(update()).toEqual({
      type: UPDATE,
    });
  });

  it('should create initializeStar action', () => {
    expect(initializeStar()).toEqual({
      type: INITIALIZE_STAR,
    });
  });

  it('should create didStarsUnmounted action', () => {
    expect(didStarsUnmounted()).toEqual({
      type: DID_STARS_UNMOUNTED,
    });
  });
});
