import { LinkedList } from "/src/data-structures/linked-lists/singly-linked-list.js"

const list = new LinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)

console.log(list)

// list.pop();
// list.unshift(5);
// list.shift();

// console.log("find", list.find(10));

// console.log("private property size", list.tail);

console.log("findAt", list.findAt(3))
console.log("setAt", list.setAt(12, 0))
