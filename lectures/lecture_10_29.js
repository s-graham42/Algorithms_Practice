//     **  Singly Linked Lists  **

var newstring = "HelloooWorld";
console.log(newstring.charAt(3));  // best practice to access a character in a sting
console.log(newstring[3]);  // still exists, but not best practice.

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}


myNode1 = new Node(10);
myNode2 = new Node(8);
myNode1.next = myNode2;
console.log(myNode1);
console.log(myNode1.next);
console.log(myNode1.next.value);