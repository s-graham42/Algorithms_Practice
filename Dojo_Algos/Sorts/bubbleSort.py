# Array: Bubble Sort
# For review, create a function that uses BubbleSort to sort an unsorted array in-place.

# # Recursive
# def bubbleSort(arr: list) -> list:
#     changes = 0
#     for i in range(len(arr) - 1):
#         if arr[i] > arr[i + 1]:
#             arr[i], arr[i+1] = arr[i+1], arr[i]
#             changes += 1
#     if changes == 0:
#         return arr
#     else:
#         return bubbleSort(arr)

# ITERATIVE:  - Takes up a little less time (not going through the whole list every time) and less stack space.
def bubbleSort(arr: list) -> list:
    for i in range(len(arr) - 1):
        for j in range(len(arr) - (1 + i)):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr


myList = [6, 20,22, 19, 4, 20, 9, 7, 11, 19, 20, 16, 4, 10, 8, 8, 16, 15, 11, 12, 9, 16, 15, 8, 7, 3, 6, 5, 15, 20, 7, 14, 6, 14, 3, 15, 20]
# print(bubbleSort(myList))

# SList: Bubble Sort
# Create a function that uses BubbleSort to sort a linked list. The list nodes contain .val, .next and other attributes you should not reference.

class SllNode:
    def __init__(self, value):
        self.val = value
        self.next = None

class SLList:
    def __init__(self):
        self.head = None

    def getFront(self):
        if not self.head:
            return None
        else:
            return self.head.value

    def add(self, value):
        newNode = SllNode(value)
        if self.head == None:
            self.head = newNode
            return self.head
        else:
            runner = self.head
            while runner.next:
                runner = runner.next
            runner.next = newNode
            return self.head

    def addFront(self, value):
        newNode = SllNode(value)
        newNode.next = self.head
        self.head = newNode
        return self.head

    def displayAll(self):
        runner = self.head
        count = 1
        while runner:
            print(f"Node #{count}: value = {runner.val}")
            count += 1
            runner = runner.next

    def length(self):
        runner = self.head
        length = 0
        while runner:
            length += 1
            runner = runner.next
        return length


    def bubbleSort(self):
        if self.length() > 1:
            for i in range(self.length() - 1):
                runner = self.head
                for j in range(self.length() - (1 + i)):
                    if runner.val > runner.next.val:
                        runner.val, runner.next.val = runner.next.val, runner.val
                    runner = runner.next
            return self
        else:
            print("List too short.  Doesn't need sorting.")
            return self

    def bubbleSortDesc(self):
        if self.length() > 1:
            for i in range(self.length() - 1):
                runner = self.head
                for j in range(self.length() - (1 + i)):
                    if runner.val < runner.next.val:
                        runner.val, runner.next.val = runner.next.val, runner.val
                    runner = runner.next
            return self
        else:
            print("List too short.  Doesn't need sorting.")
            return self



sll = SLList()

sll.add(12)
sll.add(18)
sll.add(13)
sll.add(11)
sll.addFront(21)
sll.add(25)

sll2 = SLList()

sll.displayAll()
print(f"length of list: {sll.length()}")
print(f"length of list 2: {sll2.length()}")
sll.bubbleSort().displayAll()
sll.bubbleSortDesc().displayAll()
sll2.bubbleSortDesc().displayAll()

