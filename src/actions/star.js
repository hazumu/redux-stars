// action types
export const MOUSEMOVE = 'MOUSEMOVE'
export const UPDATE = 'UPDATE'
export const INITIALIZE_STAR = 'INITIALIZE_STAR'
export const DID_STARS_UNMOUNTED = 'DID_STARS_UNMOUNTED'

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

export function initializeStar() {
  return { 
    type: INITIALIZE_STAR
  }
}

export function didStarsUnmounted() {
  return { 
    type: DID_STARS_UNMOUNTED
  }
}
