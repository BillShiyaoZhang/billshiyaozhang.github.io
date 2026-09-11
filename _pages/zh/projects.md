---
layout: page
title: 项目
permalink: /zh/projects/
description: 从智能体协作到知识整理、日常工具与创意实验，探索如何把想法做成可以使用的软件。
nav: true
nav_order: 2
lang: zh-CN
locale_key: projects
locale_path: /projects/
alternate_url: /projects/
---

<div class="project-groups">{% for group in site.data.project_groups %}
<section class="project-group" aria-labelledby="group-{{ group.id }}"><h2 id="group-{{ group.id }}">{% if page.lang == 'zh-CN' %}{{ group.zh }}{% else %}{{ group.en }}{% endif %}</h2>
<div class="project-grid">{% assign group_projects = site.data.projects | where: 'group', group.id %}{% for project in group_projects %}{% include project_card.liquid project=project heading='h3' %}{% endfor %}</div>
</section>{% endfor %}</div>
<section class="editorial-section" aria-labelledby="agent-family"><h2 id="agent-family">Agent Comm 项目群</h2><p>这一组项目把智能体通信与用户管理工具分开实现。<a href="https://github.com/BillShiyaoZhang/agent-comm">核心 SDK</a> 负责智能体消息通信；<a href="https://github.com/BillShiyaoZhang/agent-comm-platform">平台</a> 提供发现、中继与离线投递；<a href="https://github.com/BillShiyaoZhang/agent-oncall">Agent Oncall</a> 提供能力发现与人工审批；<a href="https://github.com/BillShiyaoZhang/agent-collaboration-web">网页界面</a> 则帮助用户管理智能体和连接。</p><p>这些开发与 <a href="https://fun-research-workshop.github.io/fun-workshop-2026-summer/">ClawTwin Initiative</a> 一同推进，探索不同人的私人智能体如何协作。</p></section>
<p><a href="https://github.com/BillShiyaoZhang?tab=repositories">在 GitHub 查看更多项目 <span aria-hidden="true">↗</span></a></p>
