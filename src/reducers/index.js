import { MOUSEMOVE, UPDATE, INITIALIZE_STAR, DID_STARS_UNMOUNTED } from '../actions/actionTypes'

const STAR_COUNT = 10;
const STAR_CONVERGENCE_RATE = 0.30;

var starCoords = [];
for (let i = 0; i < STAR_COUNT; i++) {
  starCoords.push([0, 0]);
}

const initialState = {
  star: {
    x: 0,
    y: 0,
    starCoords: starCoords,
    isEnabled: true
  }
}

function star(state = initialState.star, action) {
  switch(action.type) {
    case UPDATE: {
      const newStarCoords = state.starCoords.map((elm, i) => {
        var [x, y] = elm
        const [targetX, targetY] = (i === 0) 
          ? [state.x, state.y] 
          : [state.starCoords[i - 1][0], state.starCoords[i - 1][1]]
        x += (targetX - x) * STAR_CONVERGENCE_RATE;
        y += (targetY - y) * STAR_CONVERGENCE_RATE;
        return [x, y];
      });

      return Object.assign({}, state, { starCoords: newStarCoords });
    }
    case MOUSEMOVE: {
      return Object.assign({}, state, { x: action.e.x, y: action.e.y });
    }
    case INITIALIZE_STAR: {
      return Object.assign({}, state, initialState.star);
    }
    case DID_STARS_UNMOUNTED: {
      return Object.assign({}, state, { isEnabled: false });
    }
    default:
      return state
  }
}

export default function app(state = initialState, action) {
  return {
    star: star(state.star, action)
  }
}
