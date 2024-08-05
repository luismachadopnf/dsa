export class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  #length = 0;
  #head = null;
  #tail = null;

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get length() {
    return this.#length;
  }

  /**
   *
   * Add node to the end
   *
   * @param {*} value
   * @returns the linked list
   */
  push(value) {
    const newNode = new ListNode(value, null);

    if (!this.#head) {
      this.#head = newNode;
      this.#tail = this.#head;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#length++;
    return this;
  }

  /**
   *
   * Delete the last node
   *
   * @returns the deleted node
   */
  pop() {
    if (!this.#head) return null;

    let curr = this.#head;
    let prev = curr;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.#tail = prev;
    this.#length--;
    return curr;
  }

  /**
   *
   * Add element to the beginning
   *
   * @param {*} value
   * @returns new node
   */
  unshift(value) {
    if (!this.#head) return false;

    const newNode = new ListNode(value, this.#head);
    this.head = newNode;

    if (this.#length === 1) {
      this.#tail = newNode;
    }
    this.#length++;
    return newNode;
  }

  /**
   *
   * Removes the first node
   *
   * @returns the removed node
   */
  shift() {
    if (!this.#head) return false;

    const oldHead = this.#head;

    if (this.#length === 1) {
      this.head = null;
      this.#tail = null;
    }

    this.head = this.#head.next;
    this.#length--;
    return this.oldHead;
  }

  /**
   *
   * Check if a node has the specified value
   *
   * @param {*} value
   * @returns true once if finds the first instance
   * (i.e. there might be multiple nodes with the same value)
   */
  find(value) {
    if (!this.#head) return null;

    let curr = this.#head;
    while (curr.next) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  /**
   *
   * @param {number} index (from 0)
   * @returns the node at the specified index or -1 if not found
   */
  findAt(index) {
    if (!this.#head || index > this.#length - 1) return null;
    if (index > 1 && index === this.#length - 1) {
      return this.#tail;
    }
    return getNodeAt(this.head, index);
  }

  // change node value at index
  setAt(value, index) {
    if (!this.#head || index > this.#length - 1) return null;
    const node = getNodeAt(this.head, index);
    node.value = value;
    return node;
  }
}

function getNodeAt(head, index) {
  let curr = head;
  let position = 0;

  while (position < index) {
    position++;
    curr = curr.next;
    if (curr === null) {
      return null;
    }
    curr = curr.next;
  }

  return curr;
}
