import expect from 'expect';
import { MOUSEMOVE, UPDATE, INITIALIZE_STAR, DID_STARS_UNMOUNTED } from '../src/actions/actionTypes';
import reducer from '../src/reducers/index';

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
      x += (targetX - x) * 0.30; // magic number
      y += (targetY - y) * 0.30;
      return [x, y];
    });
    const testState = {
      star: {
        x: originalX,
        y: originalY,
        starCoords, },
    };
    const state = reducer(testState, { type: UPDATE });
    expect(state)
      .toExist()
      .toBeA('object');
    console.log(expectedStarCoords)
       .toEqual(expectedStarCoords);
  });
});
