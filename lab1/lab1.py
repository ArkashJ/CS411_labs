class MathOps:
    def __init__(self):
        self.value = 0

    def add(self, x, y):
        self.value = x + y
        return self.value

    def sub(self, x, y):
        self.value = x - y
        return self.value

    def mul(self, x, y):
        self.value = x * y
        return self.value

    def div(self, x, y):
        self.value = x / y
        return self.value

def main():
    stk = ['+', '-', '*']
    ops = MathOps()

    nums = [1, 2, 3, 4, 5]
    ans = 0
    for op in stk:
        if op == '+':
           ans += ops.add(nums.pop(), nums.pop())
        elif op == '-':
            ans += ops.sub(nums.pop(), nums.pop())
        elif op == '*':
            ans += ops.mul(nums.pop(), nums.pop())
        elif op == '/':
            continue
    
    print(ans)

main()
