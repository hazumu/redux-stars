const STAR_COUNT = 10;
const STAR_PURSUIT_RATE = 0.50;

var starPositions = [];
for (let i = 0; i < STAR_COUNT; i++) {
  starPositions.push([0, 0]);
}

const initialState = {
  star: {
    x: 0,
    y: 0,
    starPositions: starPositions
  }
}

function star(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE': {
      const newStarPositions = state.starPositions.map((elm, i) => {
        const targetX = (i === 0) ? state.x : state.starPositions[i - 1][0]
        const targetY = (i === 0) ? state.y : state.starPositions[i - 1][1]
        elm[0] += (targetX - elm[0]) * STAR_PURSUIT_RATE;
        elm[1] += (targetY - elm[1]) * STAR_PURSUIT_RATE;
        return [elm[0], elm[1]];
      });

      return Object.assign({}, state, { starPositions: newStarPositions });
    }
    case 'MOUSEMOVE': {
      return Object.assign({}, state, { x: action.e.x, y: action.e.y });
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
