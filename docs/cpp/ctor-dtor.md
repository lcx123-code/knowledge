# 构造与析构

## 构造函数
构造函数在创建对象时自动调用，用来初始化数据成员。

```cpp
MusicDisk::MusicDisk(const string s1, const string s2, int n, double x) {
    performers = s1;
    label = s2;
    selections = n;
    playtime = x;
    cout << "MusicDisk constructed.\n";
}
```

## 析构函数
析构函数在对象销毁时自动调用，用来释放资源。

```cpp
MusicDisk::~MusicDisk() {
    cout << "MusicDisk destructed.\n";
}
```

## 初始化列表
在派生类构造函数中，用初始化列表指定基类部分的构造方式。

```cpp
Vinyl::Vinyl(int sd, int sz, const string s1, const string s2, int n, double x)
    : MusicDisk(s1, s2, n, x)  // 先构造基类部分
{
    speed = sd;
    size = sz;
}
```

## 构造/析构顺序
构造：基类 → 派生类（从父到子）
析构：派生类 → 基类（从子到父）

运行结果：
```
MusicDisk constructed.
Vinyl constructed.
Vinyl destructed.
MusicDisk destructed.
```

## 默认构造函数
如果你没有定义任何构造函数，编译器会生成一个空的默认构造函数。
但如果你定义了带参数的构造，编译器就不会自动生成默认构造了。
