---
layout: default
title: 关于我
permalink: /zh/
description: 张世尧，博士研究生，研究多智能体协作与知识对齐，并开发实用的 AI 工具。
lang: zh-CN
locale_key: about
locale_path: /
alternate_url: /
---

<div class="home-page">
<section class="profile-intro" aria-labelledby="intro-title">
<div class="intro-copy">
<p class="eyebrow">研究 · 开发 · 社群</p>
<h1 id="intro-title">张世尧 <span lang="en">Shiyao Zhang</span></h1>
<p class="intro-role">利物浦大学博士研究生<br>在苏州西交利物浦大学开展研究</p>
<p class="intro-lead">我研究如何让 AI 智能体通过协作，理解不同系统中的知识。</p>
<p>我的研究将大语言模型引入多智能体对话与本体对齐，帮助不同系统对数据的含义达成共识，从而交换和使用数据。在研究之外，我也开发个人 AI 助手、智能体协作和知识共享工具。</p>
<div class="profile-links" aria-label="个人资料与联系方式">
<a class="primary-link" href="mailto:{{ site.email }}">联系我</a>
<a href="https://scholar.google.com/citations?user=OCfMc6oAAAAJ&amp;hl=en">Google Scholar</a>
<a href="https://github.com/BillShiyaoZhang">GitHub</a>
<a href="{{ '/cv/' | localized_url: page.lang | relative_url }}">简历与经历</a>
</div>
</div>
<figure class="intro-portrait"><img src="{{ '/assets/img/portrait.png' | localized_url: page.lang | relative_url }}" alt="张世尧" width="1348" height="1344" fetchpriority="high"><figcaption>做研究，写软件，也组织社群活动。</figcaption></figure>
</section>
<section class="home-section" aria-labelledby="research-title">
<div class="section-heading"><h2 id="research-title">研究</h2><a href="{{ '/publications/' | localized_url: page.lang | relative_url }}">全部论文 <span aria-hidden="true">↗</span></a></div>
<div class="research-overview"><p class="section-statement">智能体如何达成共识？</p><div><p>两个系统可能用不同的方式描述同一件事。我探索如何借助大语言模型，让智能体通过协商处理这些差异，支持跨领域的数据交换。</p><p>我的研究涉及本体对齐、多智能体对话，以及以资源为中心的物联网系统，相关成果发表于 AAMAS、ICCCN 和 BDDM。</p></div></div>
</section>
<section class="home-section" aria-labelledby="building-title">
<div class="section-heading"><h2 id="building-title">精选项目</h2><a href="{{ '/projects/' | localized_url: page.lang | relative_url }}">查看项目 <span aria-hidden="true">↗</span></a></div>
<div class="project-grid">{% assign featured_projects = site.data.projects | where: 'featured', true %}{% for project in featured_projects %}{% include project_card.liquid project=project %}{% endfor %}</div>
</section>
<section class="home-section community-preview" aria-labelledby="community-title">
<div><p class="eyebrow">代码之外</p><h2 id="community-title">让好奇的人聚在一起。</h2></div>
<div><p>我发起了 <a href="https://fun-research-workshop.github.io/fun-workshop/">Fun Workshop</a>，邀请不同学科的人聚在一起，分享有趣的项目与真实的经验，在动手实践中学习。在 ClawTwin 计划中，我还召集了 20 多位参与者，一起探索各自的个人智能体如何协作。</p><a href="{{ '/teaching/' | localized_url: page.lang | relative_url }}">社群与教学 <span aria-hidden="true">↗</span></a></div>
</section>
<section class="contact-strip" aria-labelledby="contact-title"><h2 id="contact-title">期待与你合作。</h2><p>我期待开展研究合作，也希望将智能体研究转化为实用的产品。</p><a href="mailto:{{ site.email }}">{{ site.email }}</a></section>
</div>
