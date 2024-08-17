// this exercise came up in the technical interview with Criteo (Aug/24)
// there were 2 versions:
// v1: intersection between 2 number arrays without duplicates
// e.g.
// A = [1, 1, 2, 4]
// B = [1, 1, 2, 5]
// R = [1, 2]
// v2: same as above but should match the number of occurrences
// e.g.
// A = [1, 1, 2, 4]
// B = [1, 1, 2, 5]
// R = [1, 1, 2]
// Bellow is an implementation of V2 which I didn't manage
// to complete during the interview

/**
 *
 * Takes 2 arrays of numbers and returns the intersection
 * including duplicated elements
 *
 * e.g.
 *
 * A = [1, 1, 2, 4]
 *
 * B = [1, 1, 2, 5]
 *
 * R = [1, 1, 2]
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns an array containing the intersection
 */
export function intersection(arr1, arr2) {
  const frequencyMap = new Map()
  const result = []

  // Populate the frequency map with counts from arr1
  for (let el of arr1) {
    frequencyMap.set(el, (frequencyMap.get(el) || 0) + 1)
  }

  // If the element is in the map and the count is > 0
  // add to the result and decrement it's count in the map
  for (let i = 0; i < arr2.length; i++) {
    let count = frequencyMap.get(arr2[i])
    if (count) {
      result.push(arr2[i])
      frequencyMap.set(arr2[i], count - 1)
    }
  }
  return result
}

// const A = [1, 2, 3, 3, 7]
// const B = [1, 2, 3, 3, 3, 9]
// console.log(intersection(A, B))
