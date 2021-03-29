#  Find the intersection of 3 lists.

list1 = [12, 3, 16, 5, 11, 5, 16, 18, 6, 12]
list2 = [14, 3, 2, 18, 12, 17, 6, 6, 15, 3]
list3 = [11, 18, 12, 17, 8, 11, 20, 5, 19, 3]

# expect: [18, 12, 3]

class Solution:
    def intersection_3_lists(self, list1, list2, list3):
        list1Set = set(list1)
        list2Set = set(list2)
        intersection = []
        for i in list3:
            if i in list1Set and i in list2Set:
                intersection.append(i)

        return intersection # O(3n) -> O(n)

    # what if I couldn't use set()?
    def other_intersection_3_lists(self, list1, list2, list3):
        list1dict = {}
        list2dict = {}
        intersection = []
        for i in list1:
            list1dict[i] = 1
        print(list1dict)
        for j in list2:
            list2dict[j] = 1
        print(list2dict)
        for k in list3:
            if k in list1dict and k in list2dict:
                intersection.append(k)
        
        return intersection


sol = Solution()
# print(sol.intersection_3_lists(list1, list2, list3))

print(sol.other_intersection_3_lists(list1, list2, list3))
