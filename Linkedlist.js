class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  display() {
    const arr = [];
    let currNode = this.head;
    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    return arr;
  }

  // insert(index,value)
  // {

  // }

}

let myList = new LinkedList(16);
myList.append(5);
myList.append(10);
myList.prepend(1);
console.log(myList.display());
// console.log(myList);