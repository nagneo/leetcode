class Solution(object):
    def isValid(self, s):
        q = []
        if len(s) % 2 is not 0:
           return False
        for ch in s:
            if self.isStart(ch):
               q.append(ch)
            else:
                if len(q) <= 0:
                    return False
                popped = q.pop()
                res = self.isPair(popped, ch)
                if res == False:
                    return False
        return True if len(q) == 0 else False
        
    def isStart(self, ch):
        return True if (ch == '(' or ch == '{' or ch == '[') else False
    
    def isPair(self, first, next):
        return True if (first == '(' and next == ')') or (first == '{' and next == '}') or (first == '[' and next == ']') else False

        