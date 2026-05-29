# REST API + curl 调用

## 什么是 API
API 就像餐厅的服务员：你告诉服务员你要什么（发请求），服务员去后厨拿给你（返回数据）。

## CSRF 防护
CSRF token 就像是"临时密码"，每次提交操作都需要重新获取。

```powershell
# 获取 CSRF token
curl.exe -s -c cookies.txt "http://example.com/api/profile"
# cookies.txt 中保存了 csrftoken
```

## curl 发送请求
```powershell
curl.exe -s -c cookies.txt -b cookies.txt `
  -H "X-CSRFToken: $token" `
  -H "Content-Type: application/json" `
  -d "@data.json" `
  "http://example.com/api/login"
```

## 参数说明
| 参数 | 作用 |
|------|------|
| `-s` | 静默模式，不显示进度条 |
| `-c` | 写入 Cookie 到文件 |
| `-b` | 从文件读取 Cookie |
| `-H` | 自定义请求头 |
| `-d` | 发送的数据体 |
| `-X` | 指定请求方法 (GET/POST) |

## 处理 JSON
PowerShell 内置了 JSON 处理命令：
```powershell
# 读取 JSON 配置文件
$config = Get-Content config.json -Raw | ConvertFrom-Json

# 构造 JSON 请求体
[System.IO.File]::WriteAllText("payload.json", '{"key":"value"}')
```

## Cookie 管理
登录后服务器返回 session cookie，后续请求都带上它来保持登录状态。
```powershell
# 登录后自动保存 cookie
curl.exe -s -c cookies.txt -b cookies.txt "http://example.com/api/data"
```
