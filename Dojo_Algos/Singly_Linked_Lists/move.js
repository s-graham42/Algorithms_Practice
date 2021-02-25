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
    back() {
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        return runner.val
    }
    removeBack() {
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
        return this.head;
    }
    addBack(value) {
        var newNode = new Node(value);
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = newNode;
        return this.head;
    }
    // Create a standalone function that locates the minimum value in a linked list,
    // and moves that node to the front of the list. Return the new list,
    // with all nodes still present, and all (except for the new head node) in their original order.
    minToFront() {
        var runner = this.head;
        var min = this.head;
        while (runner) {
            if (runner.val < min.val){
                min = runner;
            }
            runner = runner.next;
        }
        while (runner) {
            if (runner.next == min) {
                runner.next.next = min.next;
                min.next = this.head;
                this.head = min;
                return this.head;
            }
            runner = runner.next;
        }
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

console.log(singlyList.display());
newList = singlyList.minToFront();
console.log(singlyList.display());

