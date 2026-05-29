# 继承与派生

## 为什么要继承
当你有一个类已经实现了某些功能，你想在此基础上"扩展"而不是重写时，就用继承。

## 继承语法
```cpp
class 派生类 : public 基类 {
    // 新增的成员
};
```

## 例：音乐碟片 → 黑胶唱片
```cpp
class MusicDisk {
public:
    string performers;
    string label;
    int selections;
    double playtime;
    MusicDisk(const string s1, const string s2, int n, double x);
    void report();
};

class Vinyl : public MusicDisk {
public:
    int speed;    // 转速
    int size;     // 直径
    Vinyl(int sd, int sz, const string s1, const string s2, int n, double x);
    void report();
};
```

## protected 访问控制
`protected` 成员可以被派生类访问，但不能被外部代码访问。

```cpp
class person {
protected:
    char number[25];
    char name[25];
};
```

## 派生类的构造函数
派生类构造函数必须调用基类构造函数来初始化基类部分。

```cpp
student::student(char num[], char na[], int cl, int sc)
    : person(num, na)     // 初始化列表调用基类构造
{
    classNumber = cl;
    score = sc;
}
```

## 函数重写
派生类定义与基类同名的函数，就会"覆盖"基类的版本。

```cpp
void Vinyl::report() {
    MusicDisk::report();       // 调用基类版本
    cout << "[Vinyl]speed:" << speed << "\n";
}
```

### 你做过这些题的 OJ 比赛
- 26C++lee-继承与派生 (2026/5)
- 26C++lee-继承与派生2 (2026/5)
- 26C++lee-继承与派生-堂练 (2026/5)
