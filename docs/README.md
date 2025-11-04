# wu9o

我的 GitHub Profile README 仓库

## 功能特性

- 🌐 **双语支持** - 中文优先，英文版本支持
- 🔄 自动更新博客文章（每6小时）
- 📊 显示 GitHub 统计信息
- 🎯 展示最近活动（每30分钟）
- 🌏 中文本地化
- 📱 响应式设计

## 语言切换

- **主文件**: `README.md` (中文版本，GitHub默认显示)
- **英文版**: `README.en.md` (英文版本)
- **切换方式**: 通过右上角的语言链接切换

## 技术栈

- Node.js + RSS Parser
- GitHub Actions
- GitHub API
- 双语内容管理

## 本地开发

```bash
# 安装依赖
npm install

# 手动更新 README (会同时更新中英文版本)
npm run build
```

## 配置

修改 `.github/scripts/build.js` 中的 `RSS_FEED_URL` 为你的博客 RSS 地址。

## 自动化

- **博客更新**: 每6小时自动拉取最新博客文章（中英文版本）
- **活动更新**: 每30分钟更新最近的 GitHub 活动
- **手动触发**: 支持通过 GitHub Actions 页面手动触发更新
- **双语同步**: 自动保持中英文版本的内容同步

## 文件结构

```
├── README.md           # 中文版本 (主文件)
├── README.en.md        # 英文版本
├── .github/
│   ├── scripts/
│   │   └── build.js    # 双语构建脚本
│   └── workflows/
│       ├── profile-updater.yml    # 主要更新流程
│       └── recent-activity.yml    # 活动更新流程
└── docs/
    └── README.md       # 项目文档
```

## 许可证

MIT
