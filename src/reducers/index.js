const STAR_COUNT = 10;
const STAR_CONVERGENCE_RATE = 0.50;

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
    case 'UPDATE': {
      const newStarCoords = state.starCoords.map((elm, i) => {
        const [targetX, targetY] = (i === 0) 
          ? [state.x, state.y] 
          : [state.starCoords[i - 1][0], state.starCoords[i - 1][1]]
        elm[0] += (targetX - elm[0]) * STAR_CONVERGENCE_RATE;
        elm[1] += (targetY - elm[1]) * STAR_CONVERGENCE_RATE;
        return [elm[0], elm[1]];
      });

      return Object.assign({}, state, { starCoords: newStarCoords });
    }
    case 'MOUSEMOVE': {
      return Object.assign({}, state, { x: action.e.x, y: action.e.y });
    }
    case 'INITIALIZE_STAR': {
      return Object.assign({}, state, initialState.star);
    }
    case 'DID_STARS_UNMOUNTED': {
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
