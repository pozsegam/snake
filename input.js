let inputDirection = { x: 0, y: 0 }
let lastMove = {x:0, y:0}
window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if(lastMove.y !==0) break    
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if(lastMove.y !==0) break    
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if(lastMove.x !==0) break    
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if(lastMove.x !==0) break    
      inputDirection = { x: 1, y: 0 }
      break
  }
})

export function getInputDirection() {
    lastMove = inputDirection
  return inputDirection
}
