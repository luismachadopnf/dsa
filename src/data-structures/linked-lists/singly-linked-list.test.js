import { describe, expect, it } from "vitest"
import { LinkedList } from "./singly-linked-list"

describe("get head", () => {
  it("should return the head node if it exists", () => {
    const list = new LinkedList()
    list.push(10)
    expect(list.head.value).toBe(10)
    expect(list.length).toBe(1)
  })

  it("should return null if the list is empty", () => {
    const list = new LinkedList()
    expect(list.head).toBe(null)
    expect(list.length).toBe(0)
  })
})
