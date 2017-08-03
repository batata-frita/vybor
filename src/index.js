import elegir from 'elegir'

const vybor = (y, initial) => (...args) => {
  const selected = elegir(...args.map((x, i) => i % 2 === 0 ? x === y : x))
  return selected !== undefined ? selected : initial
}

export default vybor
