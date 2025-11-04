# wu9o

我的 GitHub Profile README 仓库

## 功能特性

- 🔄 自动更新博客文章（每6小时）
- 📊 显示 GitHub 统计信息
- 🎯 展示最近活动（每30分钟）
- 🌏 中文本地化
- 📱 响应式设计

## 技术栈

- Node.js + RSS Parser
- GitHub Actions
- GitHub API

## 本地开发

```bash
# 安装依赖
npm install

# 手动更新 README
npm run build
```

## 配置

修改 `.github/scripts/build.js` 中的 `RSS_FEED_URL` 为你的博客 RSS 地址。

## 自动化

- **博客更新**: 每6小时自动拉取最新博客文章
- **活动更新**: 每30分钟更新最近的 GitHub 活动
- **手动触发**: 支持通过 GitHub Actions 页面手动触发更新

## 许可证

MIT
