---
layout: default
title: About
permalink: /
description: Shiyao Zhang is a PhD candidate researching multi-agent collaboration and knowledge alignment, and building practical AI tools.
lang: en
locale_key: about
locale_path: /
alternate_url: /zh/
---

<div class="home-page">
<section class="profile-intro" aria-labelledby="intro-title">
<div class="intro-copy">
<p class="eyebrow">Research · Software · People</p>
<h1 id="intro-title">Shiyao Zhang <span lang="zh-CN">张世尧</span></h1>
<p class="intro-role">PhD candidate · University of Liverpool<br>Based at Xi’an Jiaotong-Liverpool University, Suzhou</p>
<p class="intro-lead">I study how AI agents can work together to make sense of different systems’ knowledge.</p>
<p>My research brings large language models into multi-agent dialogue and ontology alignment: helping systems agree on what their data means so they can exchange and use it. Alongside research, I build tools for personal AI assistants, agent collaboration, and shared knowledge.</p>
<div class="profile-links" aria-label="Profile links">
<a class="primary-link" href="mailto:{{ site.email }}">Get in touch</a>
<a href="https://scholar.google.com/citations?user=OCfMc6oAAAAJ&amp;hl=en">Google Scholar</a>
<a href="https://github.com/BillShiyaoZhang">GitHub</a>
<a href="{{ '/cv/' | localized_url: page.lang | relative_url }}">CV & experience</a>
</div>
</div>
<figure class="intro-portrait"><img src="{{ '/assets/img/portrait.png' | localized_url: page.lang | relative_url }}" alt="Shiyao Zhang" width="1348" height="1344" fetchpriority="high"><figcaption>Researcher, builder, and community organizer.</figcaption></figure>
</section>
<section class="home-section" aria-labelledby="research-title">
<div class="section-heading"><h2 id="research-title">Research</h2><a href="{{ '/publications/' | localized_url: page.lang | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
<div class="research-overview"><p class="section-statement">How can agents find common ground?</p><div><p>Two systems may describe the same thing in different ways. I explore how language-model-assisted agents can negotiate these differences and support data exchange across domains.</p><p>My work spans ontology alignment, multi-agent dialogue, and resource-centric IoT systems, with publications at AAMAS, ICCCN, and BDDM.</p></div></div>
</section>
<section class="home-section" aria-labelledby="building-title">
<div class="section-heading"><h2 id="building-title">Selected projects</h2><a href="{{ '/projects/' | localized_url: page.lang | relative_url }}">Explore projects <span aria-hidden="true">↗</span></a></div>
<div class="project-grid">{% assign featured_projects = site.data.projects | where: 'featured', true %}{% for project in featured_projects %}{% include project_card.liquid project=project %}{% endfor %}</div>
</section>
<section class="home-section community-preview" aria-labelledby="community-title">
<div><p class="eyebrow">Beyond the code</p><h2 id="community-title">Making space for shared curiosity.</h2></div>
<div><p>I started <a href="https://fun-research-workshop.github.io/fun-workshop/">Fun Workshop</a> to bring people across disciplines together for interesting projects, honest insights, and hands-on learning. Through the ClawTwin Initiative, I also brought together more than 20 people to explore how their personal agents could collaborate.</p><a href="{{ '/teaching/' | localized_url: page.lang | relative_url }}">Community & teaching <span aria-hidden="true">↗</span></a></div>
</section>
<section class="contact-strip" aria-labelledby="contact-title"><h2 id="contact-title">Let’s work together.</h2><p>I’m interested in research collaborations and opportunities to turn agent research into useful products.</p><a href="mailto:{{ site.email }}">{{ site.email }}</a></section>
</div>
