

def bubbleSort(arr: list) -> list:
    changes = 0
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i+1] = arr[i+1], arr[i]
            changes += 1
    if changes == 0:
        return arr
    else:
        return bubbleSort(arr)


myList = [6, 20,22, 19, 4, 20, 9, 7, 11, 19, 20, 16, 4, 10, 8, 8, 16, 15, 11, 12, 9, 16, 15, 8, 7, 3, 6, 5, 15, 20, 7, 14, 6, 14, 3, 15, 20]
print(bubbleSort(myList))