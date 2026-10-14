---
title: 协作与权限
order: 2
---

# 协作与权限

这份手记采用 **公开阅读、受邀协作者共同编辑** 的方式。网站直接阅读；编辑由 GitHub 账号和仓库权限控制。

## 谁可以做什么

| 身份 | 阅读网站 | 直接修改仓库 | 邀请或移除协作者 |
| --- | --- | --- | --- |
| 普通读者 | 可以，无需登录 | 不可以；可以提交 Pull Request 建议 | 不可以 |
| 受邀合作者 | 可以 | 可以，受仓库分支规则约束 | 不可以 |
| 仓库所有者 | 可以 | 可以 | 可以 |

GitHub **个人仓库** 的合作者默认有读写权限，不能给个人仓库合作者单独设置只读角色。当前站点公开，想让某人只读时，直接分享网址即可。若以后需要 Read、Triage、Write、Maintain、Admin 等独立角色，可使用 GitHub Organization 仓库。

## 所有者：邀请合作者

1. 打开 [仓库设置](https://github.com/Mr-ind1fferent/Mr-ind1fferent.github.io/settings/access)。
2. 进入 **Settings → Collaborators**，GitHub 可能要求再次验证身份。
3. 点击 **Add people**，输入对方的 GitHub 用户名并核对账号。
4. 发送邀请，等待对方接受。

接受邀请后，对方就能通过 GitHub 网页编辑 Markdown，也可以在本地克隆仓库进行修改。需要撤销权限时，在同一页面移除协作者。

## 合作者：编辑文档

### 直接在网页上编辑

1. 在网站文档底部点击 **在 GitHub 上编辑此页**。
2. 登录已接受邀请的 GitHub 账号。
3. 修改 Markdown，使用 **Preview** 检查格式。
4. 点击 **Commit changes**，写一句清楚的修改说明。

对 `main` 分支的提交会触发自动发布。可以在 [Actions](https://github.com/Mr-ind1fferent/Mr-ind1fferent.github.io/actions) 查看构建和发布状态。

### 先让别人检查修改

对于大幅改写、技术结论或可能影响网站的改动，建议创建分支并发起 Pull Request。站点会自动检查 Pull Request 能否构建；合并进入 `main` 后再发布。

```bash
git clone https://github.com/Mr-ind1fferent/Mr-ind1fferent.github.io.git
cd Mr-ind1fferent.github.io
git switch -c docs/update-notes
# 修改文档后，先检查实际改动
git status
git diff
git add docs/research/your-note.md
git commit -m "docs: update research note"
git push -u origin docs/update-notes
```

把示例中的文件路径换成实际修改的文档，再到 GitHub 创建 Pull Request。

## 网站发布方式

文档提交 → GitHub Actions 构建 → GitHub Pages 发布。

发布通常需要几分钟。搜索索引和侧栏随构建一起更新；如果发布失败，先查看 Actions 的错误日志。

::: tip 可选的审阅规则
当前支持直接提交和 Pull Request 两种协作方式。若希望所有修改都经过你同意后再上线，可以在仓库 **Settings → Rules → Rulesets** 设置 `main` 分支必须通过 Pull Request 合并。是否启用，取决于你的协作习惯。
:::

## 官方说明

- [个人仓库的权限级别](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository)
- [邀请个人仓库合作者](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)
