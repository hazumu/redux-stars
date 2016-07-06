import expect from 'expect';
import { MOUSEMOVE, UPDATE, INITIALIZE_STAR, DID_STARS_UNMOUNTED } from '../src/actions/actionTypes';
import reducer, { STAR_CONVERGENCE_RATE, initialState } from '../src/reducers/index';

describe('reducer', () => {
  it('should initialize state to { star }', () => {
    const state = reducer({}, {});
    expect(state)
      .toExist()
      .toBeA('object');
    expect(Object.keys(state).length).toBe(1);
  });

  it('should calculate star coord', () => {
    const [originalX, originalY] = [10, 10];
    const starCoords = [[100, 100], [100, 100], [100, 100]];
    const expectedStarCoords = starCoords.map((elm, i) => {
      let [x, y] = elm;
      const [targetX, targetY] = (i === 0)
        ? [originalX, originalY]
        : [starCoords[i - 1][0], starCoords[i - 1][1]];
      x += (targetX - x) * STAR_CONVERGENCE_RATE;
      y += (targetY - y) * STAR_CONVERGENCE_RATE;
      return [x, y];
    });
    const testState = {
      star: {
        x: originalX,
        y: originalY,
        starCoords },
    };
    const state = reducer(testState, { type: UPDATE });
    expect(state)
      .toExist()
      .toBeA('object');
    expect(state.star.starCoords)
       .toEqual(expectedStarCoords);
  });

  it('should update mouse coord', () => {
    const coord = [10, 10];
    const state = reducer({}, { type: MOUSEMOVE, e: { x: coord[0], y: coord[1] } });
    expect(state)
      .toExist()
      .toBeA('object');
    expect(state.star.x)
      .toEqual(coord[0]);
    expect(state.star.y)
      .toEqual(coord[1]);
  });

  it('should return initialized state', () => {
    const state = reducer({}, { type: INITIALIZE_STAR });
    expect(state)
      .toExist()
      .toBeA('object')
      .toEqual(initialState);
  });

  it('should change isEnabled flag', () => {
    const state = reducer({}, { type: DID_STARS_UNMOUNTED });
    expect(state.star.isEnabled)
      .toEqual(false);
  });
});
