import facepaint from 'facepaint'

const breakpoints = [600, 1000, 1500]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`),
)
