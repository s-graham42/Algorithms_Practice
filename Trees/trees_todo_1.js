class BTNode {
    constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    }
}
class BST {
    constructor(val) {
    this.root = null;
    }
//  BST: Add
//  Create an add(val) method on the BST object to add new value to the tree.
//  This entails creating a BTNode with this value and connecting it at the
//  appropriate place in the tree. Unless specified otherwise, BSTs can contain
//  duplicate values.
//  NEW NODES ALWAYS GO ON AN AVAILABLE LEFT OR RIGHT.  NOT INSERTED!!
//  EQUIVALENT VALUE CAN GO EITHER RIGHT OR LEFT BASED ON A USER-DEFINED STANDARD!!

    add(value) {
        var new_node = new BTNode(value);
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
    // BST: Contains
    // Create a contains(val) method on BST that returns whether the tree contains a given value.
    // Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
    contains(value) {
        var runner = this.root;
        while (runner) {
            if (runner.val == value) {
                return true;
            }
            if (value < runner.val) {
                runner = runner.left;
            }
            if (value > runner.val) {
                runner = runner.right
            }
        }
        return false;
    }

    // BST: Min
    // Create a min() method on the BST class that returns the smallest value found in the BST.
    min() {
        var runner = this.root;
        while (runner.left != null) {
            runner = runner.left;
        }
        return runner.val;
    }
    max() {
        var runner = this.root;
        while (runner.right != null) {
            runner = runner.right;
        }
        return runner.val;
    }
    size(current_node) {
        if (current_node == null) {
            return 0;
        }
        var leftSide = this.size(current_node.left);
        var rightSide = this.size(current_node.right);
        return 1 + leftSide + rightSide;
    }
    is_empty() {
        if (this.root == null) {
            return true;
        }
        else {
            return false;
        }
    }
}

var bst1 = new BST();
var bst2 = new BST();
bst1.add(19).add(4).add(25).add(2).add(20).add(42);
console.log(bst1);
console.log("Contains 21: " + bst1.contains(21));
console.log("Min value: " + bst1.min());
console.log("Max value: " + bst1.max());
console.log("Size of bst1: " + bst1.size(bst1.root));
console.log("Size of bst2: " + bst1.size(bst2.root));
console.log("Is bst1 empty? " + bst1.is_empty());
console.log("Is bst2 empty? " + bst2.is_empty());

