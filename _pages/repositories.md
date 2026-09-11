---
layout: page
permalink: /repositories/
title: Repositories
description: Source code for my tools and research prototypes.
nav: false
lang: en
locale_key: repositories
locale_path: /repositories/
alternate_url: /zh/repositories/
---

<p>For an introduction to what each project does, visit <a href="{{ '/projects/' | localized_url: page.lang | relative_url }}">Projects</a>. The repositories below contain source code, setup instructions, and development details.</p>
<ul>{% for project in site.data.projects %}{% for link in project.links %}{% if link.label == 'Source' %}<li><a href="{{ link.url }}">{{ project.name }}</a> — {{ project.summary }}</li>{% endif %}{% endfor %}{% endfor %}</ul>
<p><a href="https://github.com/BillShiyaoZhang?tab=repositories">All repositories on GitHub</a></p>
