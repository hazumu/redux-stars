const START_PURSUIT_RATE = 0.50;  // 収束率

var starPositions = [];
for (let i = 0; i < 3; i++) {
  starPositions.push([0, 0]);
}

const initialState = {
  x: 0,
  y: 0,
  starPositions: starPositions
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE': {
      const newStarPositions = state.starPositions.map((elm, i) => {
        const rate = START_PURSUIT_RATE - 0.2 * i;
        elm[0] += (state.x - elm[0]) * rate;
        elm[1] += (state.y - elm[1]) * rate;
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
