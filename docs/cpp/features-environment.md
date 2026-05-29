# 特性和编程环境

## const 关键字
`const` 表示"不可修改"。常在函数参数中用来保护传入的数据不被意外改变。

```cpp
void showName(const string &name) {
    // name 不能在此函数中被修改
    cout << name;
}
```

## 引用 `&`
引用是变量的"别名"，操作引用就是操作原始变量。常用在函数参数中避免拷贝。

```cpp
void swapx(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}
```

## 函数重载
C++ 允许同名函数但参数不同，编译器会根据参数自动选择正确版本。

```cpp
double sroot(int a) { return sqrt(a); }
double sroot(long a) { return sqrt(a); }
double sroot(double a) { return sqrt(a); }
```

## 动态内存 new/delete
用 `new` 在堆上分配内存，用完要 `delete` 释放，避免内存泄漏。

```cpp
int *pi = new int[num];   // 分配
delete []pi;              // 释放数组
```

## 输入输出格式控制
`<iomanip>` 提供格式化输出：`fixed` 固定小数位、`setprecision` 设置精度。

```cpp
cout << fixed << setprecision(4);
cout << result << " degrees";
```

## 命名空间
`using namespace std;` 让我们直接使用 cout 而不是 std::cout。

```cpp
#include<iostream>
using namespace std;
// 直接用 cout，不用写 std::cout
```

### 你做过这些题的 OJ 比赛
- 26C++lee-语言和编程基础1 (2026/3)
- 26C++lee-语言和编程基础2 (2026/3)
- 26C++lee-语言和编程基础-堂练 (2026/3)
