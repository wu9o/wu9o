# wu9o

我的 GitHub Profile README 仓库

## 功能特性

- 🌐 **双语支持** - 英文为 GitHub 默认展示，中文版本可切换
- 🔄 每日自动更新博客文章和 README 更新时间
- 📚 聚焦公开项目、实用工具与博客文章
- 🗂️ 历史作品折叠展示，并明确标注归档状态
- 🧠 展示 AI 知识库建设与知识工程方向

## 语言切换

- **主文件**: `README.md` (英文版本，GitHub 默认显示)
- **中文版**: `README.zh.md`
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

- **博客更新**: 每日自动拉取最新博客文章（中英文版本）
- **活动展示**: 不再展示自动活动流水；历史项目归入 README 的折叠区域
- **手动触发**: 支持通过 GitHub Actions 页面手动触发更新
- **双语更新**: 脚本更新两种语言的文章列表和时间；介绍文案需手动同步

## 文件结构

```
├── README.md           # 英文版本 (主文件)
├── README.zh.md        # 中文版本
├── .github/
│   ├── scripts/
│   │   └── build.js    # 双语构建脚本
│   └── workflows/
│       └── profile-updater.yml    # 博客文章与时间更新流程
└── docs/
    └── README.md       # 项目文档
```

## 许可证

MIT
