export default {
  mousemove: (e) => {
    return { 
      e: e,
      type: 'MOUSEMOVE' 
    }
  },
  update: () => {
    return { 
      type: 'UPDATE' 
    }
  }
}
