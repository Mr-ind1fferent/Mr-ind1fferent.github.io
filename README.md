# 具身手记

Mr-ind1fferent 的具身智能文档站，使用 VitePress 和 GitHub Pages。公开阅读，通过 GitHub 邀请合作者参与编辑。

- 网站：<https://mr-ind1fferent.github.io/>
- 仓库：<https://github.com/Mr-ind1fferent/Mr-ind1fferent.github.io>
- 权限管理：仓库 **Settings → Collaborators**
- 发布状态：仓库 **Actions**

## 本地维护

使用 Node.js 22 或更高版本：

```bash
npm ci
npm run docs:dev
```

构建检查与预览：

```bash
npm run docs:build
npm run docs:preview
```

Windows PowerShell 如限制执行 `npm.ps1`，使用 `npm.cmd`。

## 新增文档

在 `docs/guide`、`docs/research`、`docs/engineering`、`docs/experiments` 或 `docs/resources` 下添加 `.md` 文件，填写 `title` 和 `order` frontmatter。侧栏会自动收录同一文件夹中的 Markdown 文档。新增栏目或多层目录时修改 `docs/.vitepress/config.mts`。

首页布局：`docs/.vitepress/theme/HomePage.vue`；颜色和布局样式：`docs/.vitepress/theme/custom.css`。

## GitHub Pages

仓库名称必须为 `Mr-ind1fferent.github.io`，站点使用根路径 `/`。在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

提交到 `main` 后，`.github/workflows/deploy.yml` 自动构建并发布。Pull Request 只进行构建检查，不发布。

## 协作权限

所有人都可以阅读站点和公开仓库。邀请的合作者有仓库读写权限，不能在个人仓库内分配单独的只读合作者角色。需要只读时分享网址即可；需要更细的角色管理时使用 GitHub Organization。

站点每篇文档底部提供 GitHub 编辑链接。详细操作见 `docs/guide/collaboration.md`。

当前仅提供网站使用说明、协作指南和栏目占位页；具体文档内容后续提供。没有额外设置内容开源许可证。
