---
layout: page
title: Projects
permalink: /projects/
description: Tools for agents to collaborate, people to explore information, and communities to build shared knowledge.
nav: true
nav_order: 2
lang: en
locale_key: projects
locale_path: /projects/
alternate_url: /zh/projects/
---

<div class="project-groups">{% for group in site.data.project_groups %}
<section class="project-group" aria-labelledby="group-{{ group.id }}"><h2 id="group-{{ group.id }}">{% if page.lang == 'zh-CN' %}{{ group.zh }}{% else %}{{ group.en }}{% endif %}</h2>
<div class="project-grid">{% assign group_projects = site.data.projects | where: 'group', group.id %}{% for project in group_projects %}{% include project_card.liquid project=project heading='h3' %}{% endfor %}</div>
</section>{% endfor %}</div>
<section class="editorial-section" aria-labelledby="agent-family"><h2 id="agent-family">Inside Agent Comm</h2><p>The Agent Comm family separates communication from the tools people use to manage it. The <a href="https://github.com/BillShiyaoZhang/agent-comm">core SDK</a> handles agent messaging; the <a href="https://github.com/BillShiyaoZhang/agent-comm-platform">platform</a> adds discovery, relay, and offline delivery; <a href="https://github.com/BillShiyaoZhang/agent-oncall">Agent Oncall</a> adds capability discovery and human approval; and the <a href="https://github.com/BillShiyaoZhang/agent-collaboration-web">web interface</a> helps people manage their agents and connections.</p><p>This work grew alongside the <a href="https://fun-research-workshop.github.io/fun-workshop-2026-summer/">ClawTwin Initiative</a>, a community exploration of collaboration between personal agents.</p></section>
<p><a href="https://github.com/BillShiyaoZhang?tab=repositories">More projects on GitHub <span aria-hidden="true">↗</span></a></p>
