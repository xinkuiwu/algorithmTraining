**原题20：**包含min函数的栈

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。

**不懂的点（难点）：**栈的结构是先进后出。

**思路：**首先一开始我们分析得到最小值肯定要比较嘛，和栈里面的数据一一比较，但是栈这种数据结构，你又只能和栈顶弹出来的数据进行比较，所以肯定需要一个临时栈嘛，当然这只是一种思路，就是其余的操作pop,push这些和栈的操作一样，只是min的时候借助下临时栈将原来栈弹出来的保存下，以便放回去。

另外一种思路，也就是剑指offer里面推荐的思路就是增加了一个辅助栈，每次压入数据栈时，把当前栈里面最小的值压入辅助栈当中。这样辅助栈的栈顶数据一直是数据栈中最小的值。

**答案：**

``` javascript
const Stack = [];
const minStack = [];//引入辅助栈
let tmp = null;//栈顶
function push(node)
{
    // write code here
    if (tmp !== null) {
        if (tmp > node) {
            tmp = node;
           }  
        Stack.push(node);
        minStack.push(tmp);
    } else {
        tmp = node;
        Stack.push(node);
        minStack.push(tmp);
    }
    return tmp;
}
function pop()
{
    // write code here
        if(Stack.length === 0) return false;
        if(minStack.length === 0) return false;
        Stack.pop();
        minStack.pop();
}
function top()
{
    // write code here
    if(Stack.length === 0) return false;
    if(minStack.length === 0) return false;
    return Stack[stack.length - 1];
}
function min()
{
    // write code here
    if(Stack.length === 0) return false;
    if(minStack.length === 0) return false;
    return minStack[minStack.length - 1];
}
```



**别人优秀的思路点：**

知识点补充：
