# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        stack = []
        node = head
        while(node):
            stack.append(node.val)
            node = node.next
     
        length = len(stack)
        for i in range(0, length/2):
            if stack[i] != stack[length - 1 - i]:
                return False
        
        return True