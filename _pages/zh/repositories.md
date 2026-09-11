---
layout: page
permalink: /zh/repositories/
title: 代码仓库
description: 工具与研究原型的源代码。
nav: false
lang: zh-CN
locale_key: repositories
locale_path: /repositories/
alternate_url: /repositories/
---

<p>想了解每个项目的用途，可以先看<a href="{{ '/projects/' | localized_url: page.lang | relative_url }}">项目介绍</a>。下面的仓库提供源代码、安装说明与开发细节。</p>
<ul>{% for project in site.data.projects %}{% for link in project.links %}{% if link.label == 'Source' %}<li><a href="{{ link.url }}">{{ project.zh.name }}</a>：{{ project.zh.summary }}</li>{% endif %}{% endfor %}{% endfor %}</ul>
<p><a href="https://github.com/BillShiyaoZhang?tab=repositories">在 GitHub 查看全部仓库</a></p>
