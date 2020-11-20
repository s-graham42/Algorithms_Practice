//  NEW NODES ALWAYS GO ON AN AVAILABLE LEFT OR RIGHT.  NOT INSERTED!!
//  EQUIVALENT VALUE CAN GO EITHER RIGHT OR LEFT BASED ON A USER-DEFINED STANDARD!!

class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = null;
    }
    add(value) {
        var new_node = new Node(value);
        if (this.root == null) {
            this.root = new_node;
            return this;
        }
        var runner = this.root;
        while (runner != null) {
            if (value < runner.val) {
                if (runner.left == null) {
                    runner.left = new_node;
                    return this;
                }
                else {
                runner = runner.left;
                }
            }
            else {
                if (runner.right == null) {
                    runner.right = new_node;
                    return this;
                }
                else {
                runner = runner.right;
                }
            }
        }
    }

    size(current_node) {
        if (current_node == null) {
            console.log("null found");
            return 0;
        }
        console.log("The current val is ", current_node.val);
        var leftSide = this.size(current_node.left);
        var rightSide = this.size(current_node.right);
        return 1 + leftSide + rightSide;
    }

    sum(current_node) {
        if (current_node == null) {
            console.log("null found");
            return 0;
        }
        console.log("The current val is ", current_node.val);
        var leftSide = this.sum(current_node.left);
        var rightSide = this.sum(current_node.right);
        return current_node.val + leftSide + rightSide;
    }

    height(current_node) {
        if (current_node == null) {
            console.log("null found");
            return 0;
        }
        console.log("The current val is ", current_node.val);
        var leftSide = this.height(current_node.left);
        var rightSide = this.height(current_node.right);
        if (leftSide > rightSide) {
            return 1 + leftSide;
        }
        else {
            return 1 + rightSide;
        }
    }
}

var bst1 = new BST();
bst1.add(19).add(4).add(15).add(56).add(40).add(88).add(100).add(6579);
console.log(bst1);
console.log(bst1.size(bst1.root))
console.log(bst1.sum(bst1.root))
console.log(bst1.height(bst1.root))
