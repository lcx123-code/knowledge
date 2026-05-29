# PowerShell + Word COM 自动化

COM (Component Object Model) 是 Windows 的组件技术，让我们可以用代码操控已安装的软件。

## 启动 Word
```powershell
$word = New-Object -ComObject Word.Application
$word.Visible = $false   # 不显示窗口
$doc = $word.Documents.Add()
```

## 操作表格
```powershell
$tbl = $doc.Tables.Add($word.Selection.Range, 14, 4)
$tbl.Borders.InsideLineStyle = 1
$tbl.Borders.OutsideLineStyle = 1
$tbl.Cell(1,1).Range.Text = "标题"
$tbl.Cell(1,1).Merge($tbl.Cell(1,4))  # 合并单元格
```

## 查找替换
```powershell
$rng = $tbl.Cell(14, 1).Range
$f = $rng.Find
$f.Text = "（占位符）"
if ($f.Execute()) {
    $rng.Text = "新内容"
}
```

## 保存和关闭
```powershell
$doc.SaveAs2($path, 16)   # 16 = Word 文档格式
$doc.Close()
$word.Quit()
```

## 注意事项
- 需要安装 Microsoft Word
- 操作 E 盘等系统保护路径时需要管理员权限
- 结束后要清理进程：`Get-Process winword | Stop-Process`
