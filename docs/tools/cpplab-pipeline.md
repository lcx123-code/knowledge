# C++ 实验报告流水线

这是为 C++ 课程实验设计的自动化工具体系，三步完成实验报告。

## 三步流程

### download — 从 OJ 下载代码
登录 NBU OJ 平台，输入用户名密码，授权比赛，自动遍历所有比赛下载 AC 代码。

### template — 生成 Word 模板
用 COM 操控 Word，生成实验报告模板（14 行 × 4 列的表格），自动填入标题、实验目的等固定内容。

### report — 填充代码到模板
读取下载的 .cpp 文件，按题号排序，自动替换模板中的占位符（题目、代码、分析），输出最终报告。

## 使用示例
```powershell
.\CppLabReport.ps1 download              # 下载代码
.\CppLabReport.ps1 template              # 生成模板
.\CppLabReport.ps1 report                # 填充报告
```

## 技术栈
- PowerShell 5.1
- curl.exe (HTTP 请求)
- Word COM 组件
- JSON 配置文件
