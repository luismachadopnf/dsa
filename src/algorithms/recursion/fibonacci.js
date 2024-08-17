// version using memoization
export function memoizedFib() {
  const cache = {}

  return function fib(n) {
    if (n <= 2) {
      return 1
    }
    if (cache[n]) {
      return cache[n]
    }

    cache[n] = fib(n - 1) + fib(n - 2)

    return cache[n]
  }
}

// version using cache parameter
export function fib(n, cache = {}) {
  if (n <= 2) {
    return 1
  }
  if (cache[n]) {
    return cache[n]
  }

  cache[n] = fib(n - 1, cache) + fib(n - 2, cache)

  return cache[n]
}
