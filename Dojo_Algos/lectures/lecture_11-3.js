// // --  More singly linked lists  --
// // loops: 
// for (var i = 0; i < 5; i++) {
//     //do stuff
// }

// // not an easy way to get length of a singly linked list.
// // better to use a while loop
// var i = 0;
// while(i < 5) {
//     //do stuff
//     i++;
// }

// // for singly linked Lists
// // traditionally, counter is called runner
// var runner = this.Headers;
// while(runner != null) { // loop through list until you get to a value of null. (if runner.next = null (is the next one null?))
//                         // can also do while(runner) --> while runner is true, (null is false)

//     runner = runner.next; // move current node to the next.
// }

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }

}

class SLL {
    constructor() {
        this.head = null;
    }
    contains(value) {
        var runner = this.head;
        while(runner != null) {
            if (runner.val == value) {
                return true;
            }
            runner = runner.next;
        }
        return false // when you are done with the while loop, if you haven't found a match, return false
    }
    length() {
        var count = 0;
        var runner = this.head;
        while(runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }


}

var sll1 = new SLL();
var node1 = new Node(9);

sll1.head = node1;
var node2 = new Node(4);
node1.next = node2;

sll1.contains(4);
