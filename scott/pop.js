class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length=1
    }
  
    push(value) {
      const newNode = new Node(value);
      if(!this.head){
          this.head = newNode
          this.tail = newNode
      }
      else {
          this.tail.next = newNode
          this.tail = newNode
      }
      this.length++
      return this
    }
  
   pop(value){
    if(!this.head) return undefined

    let temp = this.head
    let pre = this.head
    while(temp.next){
        pre = temp
        temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if(this.length==0){
        this.head=null
        this.tail = null
    }
    return temp
   }
    


  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let myLinkedList = new LinkedList(1)
  myLinkedList.push(2)
  myLinkedList.push(3)
  console.log(myLinkedList)
  console.log(myLinkedList.pop())
  console.log(myLinkedList)
  console.log(myLinkedList.pop())
  console.log(myLinkedList)
  console.log(myLinkedList.pop())
  console.log(myLinkedList)
  console.log(myLinkedList.pop())
  console.log(myLinkedList)
  console.log("Nothing to pop now")