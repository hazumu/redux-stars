// action types
const MOUSEMOVE = 'MOUSEMOVE'
const UPDATE = 'UPDATE'

// action creators
export function mousemove(e) {
  return {
      e: e,
      type: MOUSEMOVE
  }
}

export function update() {
  return { 
    type: UPDATE
  }
}
