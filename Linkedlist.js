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

  insert(index,value)// 2,15
  {
    // check valid index
    if(index >= this.length)
    {
      return this.append(value);
    }

    const newNode = {
      value : value,
      next : null,
    };

    
    let leader = this.traverseToIndex(index-1);// previous node
    let holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
    
  }

  traverseToIndex(index)
  {
    let counter = 0;
    let currNode = this.head;
    while(counter !== index)
      {
        currNode = currNode.next;
        counter++;
      }
    return currNode;
  }

}

let myList = new LinkedList(16);
myList.append(5);
myList.append(10);
myList.prepend(1);
console.log(myList.display());
myList.insert(2,15)
console.log(myList.display());
// console.log(myList);