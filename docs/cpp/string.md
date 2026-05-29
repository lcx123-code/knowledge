# C++ 字符串处理

## string 类
C++ 的 string 类用起来方便：直接赋值、拼接、比较。

```cpp
string word;
cin >> word;
while (word != "done") {
    sum++;
    cin >> word;
}
```

## char[] 字符数组
C 风格的字符串，用字符数组存储，需要用 `strcpy` 复制。

```cpp
char fname[25];
strcpy(fname, "Heyyou");
```

## string vs char[] 对比

| 特性 | string | char[] |
|------|--------|--------|
| 赋值 | 直接 `=` | 要用 `strcpy` |
| 比较 | 直接 `==` | 要用 `strcmp` |
| 长度 | `.length()` | `strlen()` |
| 头文件 | `#include <string>` | `#include <cstring>` |
| 内存管理 | 自动管理 | 手动管理 |

## 混用示例
有些题目要求同时使用两者，看这个 Person 类：

```cpp
class Person {
private:
    string lname;       // string 类型
    char fname[25];     // char[] 类型
public:
    Person(const string &ln, const char *fn = "Heyyou");
};

Person::Person(const string &ln, const char *fn) {
    lname = ln;             // string 直接赋值
    strcpy(fname, fn);      // char[] 需要 strcpy
}
```
