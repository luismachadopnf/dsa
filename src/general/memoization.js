/**
 *
 * Adds memoization to a function
 *
 * @param {*} fn the function to be memoized
 * @returns a memoized version of the passed function
 */
export function memoize(fn) {
  const cache = {}

  return function memoizedFunction(...args) {
    const key = JSON.stringify(args)
    if (!cache[key]) {
      cache[key] = fn(...args)
    }
    return cache[key]
  }
}
