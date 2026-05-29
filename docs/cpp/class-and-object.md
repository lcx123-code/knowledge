# 类和对象

## 什么是类
类就像一张"设计图"，而对象是根据这张图造出来的"实物"。

```cpp
class BankAccount {
private:
    string client;
    string num;
    double balance;
public:
    BankAccount(const string &client, const string &num, double bal = 0.0);
    void show();
    void deposit(double cash);
    void withdraw(double cash);
};
```

## 封装
用 `private` 把数据藏起来，只通过 `public` 的成员函数来操作。这样外部代码不能直接修改内部数据。

## 构造函数
构造函数与类同名，没有返回值。创建对象时自动调用。

```cpp
BankAccount::BankAccount(const string &client, const string &num, double bal) {
    this->client = client;
    this->num = num;
    this->balance = bal;
}
```

## this 指针
`this` 是一个指向"当前对象自己"的指针。当参数名和成员名相同时用来区分。

```cpp
void Box::Display() {
    cout << "Volume:" << this->GetVolume() << " Area:" << this->GetArea() << endl;
}
```

## 类的使用
先定义类 → 创建对象 → 调用成员函数。

```cpp
int main() {
    string sn, sa;
    double db;
    cin >> sn >> sa >> db;
    BankAccount ba(sn, sa, db);
    ba.show();
    ba.deposit(20);
    ba.show();
    return 0;
}
```

### 你做过这些题的 OJ 比赛
- 26C++lee-类和对象1 (2026/3)
- 26C++lee-类和对象2 (2026/4)
- 26C++lee-类和对象3, 3-2, 堂练
