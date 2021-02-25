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
    addFront(val) {
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront() {
        if (this.head == null) {
            return null
        }
        else {
            this.head = this.head.next
            return this.head
        }
    }
    front() {
        if (this.head == null) {
            return null
        }
        return this.head.value
    }
    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.val == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    length() {
        var counter = 0;
        var runner = this.head;
        while (runner) {
            counter++;
            runner = runner.next;
        }
        return counter;
    }
    display() {
        var runner = this.head;
        var values = [];
        while (runner) {
            values.push(runner.val);
            runner = runner.next;
        }
        return values.join(", ");
    }
    max() {
        var runner = this.head;
        var max = this.head.val;
        while (runner) {
            if (runner.val > max){
                max = runner.val;
            }
            runner = runner.next;
        }
        return max;
    }
    min() {
        var runner = this.head;
        var min = this.head.val;
        while (runner) {
            if (runner.val < min){
                min = runner.val;
            }
            runner = runner.next;
        }
        return min;
    }
    avg() {
        var runner = this.head;
        var sum = 0;
        while (runner) {
            sum = sum + runner.val;
            runner = runner.next;
        }
        return sum / this.length();
    }
    max_min_avg() {
        var runner = this.head;
        var max = this.head.val;
        var min = this.head.val;
        var sum = 0;
        while (runner) {
            if (runner.val > max){
                max = runner.val;
            }
            if (runner.val < min){
                min = runner.val;
            }
            sum = sum + runner.val;
            runner = runner.next;
        }
        return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`;
    }
    // Create a method that returns the last value in the list.
    back() {
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        return runner.val
    }
    // Create a method that removes the last ListNode in the list and returns the new list.
    removeBack() {
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
        return this.head;
    }
    // Create a method that creates a Node with given value and inserts it at end of your linked list.
    addBack(value) {
        var newNode = new Node(value);
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = newNode;
        return this.head;
    }
}

var singlyList = new SLL();
var node1 = new Node(-25);
var node2 = new Node(-30);
var node3 = new Node(45);
var node4 = new Node(12);
var node5 = new Node(56);
var node6 = new Node(2);
singlyList.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

singlyList.addFront(42);

console.log(singlyList.back());
console.log(singlyList.display());
singlyList.removeBack();
console.log(singlyList.display());
singlyList.addBack(111);
console.log(singlyList.display());
