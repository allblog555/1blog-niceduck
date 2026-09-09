---
title: "Clash Verge / Rev 系统代理启动后自动关闭彻底解决方案 | 好鸭官网 (niceduck.cyou)"
description: "排查 Clash Verge、Clash Nyanpasu 及 Clash Meta 系统代理开启后秒弹关闭、无法联网问题。深入分析 WinINet 注册表锁、Service Mode 驱动冲突、7890 端口占用与好鸭量子节点一键订阅。"
keywords: ["好鸭官网", "NiceDuck", "niceduck.cyou", "Clash Verge", "系统代理自动关闭", "Clash报错", "TUN模式故障", "端口占用7890"]
date: 2026-09-09
author: "好鸭 NiceDuck 技术团队"
category: "🛠️ 客户端故障排查"
head:
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "为什么开启 Clash Verge 后本地浏览器断网无法打开任何网页？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "通常是因为系统代理设置生效，但代理节点配置错误或订阅节点失效。建议前往好鸭官网 (niceduck.cyou) 重新一键导入最新的好鸭量子专线订阅。"
            }
          },
          {
            "@type": "Question",
            "name": "Clash Verge 的 TUN 模式与普通系统代理有何区别？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "普通系统代理仅接管遵循 WinINet 协议的浏览器及部分应用；TUN 模式在系统底层创建虚拟网卡，能够强行接管 UWP 应用、CMD 命令行及 Cursor IDE 等全局网络流量。"
            }
          }
        ]
      }
---

# Clash Verge / Rev 系统代理启动后自动关闭彻底解决方案：注册表与 TUN 驱动排查

当你点击 **Clash Verge** 或 **Clash Verge Rev** 的「系统代理 (System Proxy)」开关时，开关滑动后瞬间自动弹回关闭，其核心定性是：**Windows 系统 WinINet 注册表项权限被第三方安全软件锁定、7890 默认代理端口被本地服务（如 Hyper-V/Docker）占用，或 Clash Meta 内核因为订阅 YAML 配置存在语法错误导致核心进程（clash-meta.exe）崩溃退出。**

---

## 一、 底层故障原理与诊断树

```
点击 [系统代理] 
   │
   ├── 检查 1：Clash 内核进程是否存在？
   │      └── 否 ──> YAML 配置文件解析语法错误 / 订阅链接失效
   │
   ├── 检查 2：7890 / 9090 端口是否冲突？
   │      └── 是 ──> 端口被 Hyper-V、Docker 或 WeChat 进程占用
   │
   └── 检查 3：WinINet 注册表控制权是否正常？
          └── 否 ──> 360/火绒/安全软件锁定 ProxyEnable 键值
```

---

## 二、 4 步修复操作指南

### 步骤一：查看日志，确认 Clash Meta 内核状态
1. 打开 Clash Verge，进入 **Logs (日志)** 页面。
2. 若日志提示 `Parse config error: yaml: unmarshal errors`，说明订阅文件损坏。
3. **解决办法**：前往 **[好鸭官网 (niceduck.cyou)](https://niceduck.cyou)** 后台重新复制标准 Clash Meta 订阅链接。

### 步骤二：修复 Windows 代理注册表（WinINet 锁）
1. 按下 `Win + R` 输入 `regedit` 打开注册表编辑器。
2. 导航至：`HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings`
3. 检查右侧 `ProxyEnable` 键值并双击修改为 `1`。

### 步骤三：检测并修改冲突端口
在 PowerShell 执行：`netstat -ano | findstr "7890"`。若端口被占用，在 Clash Verge 设置中将 **Mixed Port (混合端口)** 改为 `17890`。

### 步骤四：安装 Service Mode (服务模式) 并开启 TUN
进入 Clash Verge -> **Settings** -> **Service Mode** -> 点击 **Install**。安装后启用 **TUN Mode** 即可接管全局流量。

---

## 三、 高可用出海网络保障

推荐配合支持一键极速订阅与高可用 SLA 保障的服务商：

* **【好鸭官网 (NiceDuck)】**：原生支持 Clash Verge / Rev、Sing-box 及 Surge 等客户端一键导入，IEPL 内网专线稳定连通，零配置报错。（优惠码：**`niceduck88`**，官方域名：**`niceduck.cyou`**）
