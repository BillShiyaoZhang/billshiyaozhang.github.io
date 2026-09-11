# Shiyao Zhang’s personal homepage

A personal academic and software portfolio at https://billshiyaozhang.github.io/, built with Jekyll and the al-folio theme.

## Editing content

- `_pages/about.md`: English homepage introduction, research focus, community, and contact. Chinese counterparts live in `_pages/zh/`.
- `_data/projects.yml`: edited English and Chinese (`zh`) project descriptions and verified source/documentation/demo links. Set `featured: true` for homepage projects and `group` for the project page category.
- `_data/ui.json`: navigation, search, accessibility, and footer translations. `_data/project_groups.json` holds project category names.
- `_bibliography/papers.bib`: publication metadata. Keep `assets/bib/papers.bib` synchronized for the downloadable bibliography, omitting Jekyll front matter.
- `_data/publication_summaries_zh.json`: Chinese editorial summaries, keyed by BibTeX entry ID. Formal publication titles and citations retain their original language.
- `_pages/cv.md`: public English CV and experience; `assets/json/resume.json`: machine-readable profile.
- `assets/pdf/shiyao-zhang-cv-2026.pdf`: supplied Chinese CV download.
- `_pages/teaching.md`: community activities and teaching; keeps the existing `/teaching/` URL.
- `_sass/_personal.scss`: portfolio styling, including mobile and dark mode.
- `_config.yml`: contact details, metadata, and site options.

## Languages

English uses the original URLs; Chinese pages use `/zh/`. Each page sets `lang`, `locale_key`, `locale_path` (the English path), and `alternate_url` (its translation). The header language button links directly to the matching page and preserves URL queries and fragments. Navigation and search stay in the current language. Both languages are available without JavaScript; JavaScript only preserves the query and fragment on switching.

When adding a page, add both language versions and use `localized_url: page.lang` before `relative_url` for internal page links. Assets retain one shared URL. Update both translations together when facts change.

## Preview and build

Use Ruby 3.3 (matching the deployment workflow), Bundler, and Node.js.

```sh
bundle install
bundle exec jekyll serve
```

To reproduce the deployment output:

```sh
JEKYLL_ENV=production bundle exec jekyll build
npx purgecss -c purgecss.config.js
```

The existing GitHub Actions workflow builds on `main`/`master` pushes, then publishes `_site` to `gh-pages`. GitHub Pages should use the `gh-pages` branch. Pull requests build without publishing.

The link-check workflow builds the same commit before scanning `_site/**/*.html`. It checks local pages, assets, and section anchors offline, then checks external URLs separately. This includes links generated from bilingual templates and project data while honoring Jekyll's exclusions. It uses Lychee 0.24.2 with `--no-ignore` (because `_site` is gitignored), the absolute `_site` root, and `--index-files index.html` for directory URLs. Raw Liquid templates and excluded theme documentation are not published pages and are not scanned as HTML. Bot-blocking exceptions are documented in `.lycheeignore`; the verified ICCCN paper on ResearchGate currently returns HTTP 403 to the checker.

## Content provenance — September 2026 update

Professional history and awards are based on the supplied Chinese CV, `张世尧CV-2026-industry-July.pdf`. Its contents include August 2026 project updates despite the filename. Expected dates remain explicitly marked as expected.

Project descriptions are editorial summaries of public repositories and documentation checked on 11 September 2026. They explain the purpose for external readers rather than reproducing README implementation details. Documentation sites are labeled Docs; prototypes and early editions are identified as such. Agent Comm components are grouped as one project family. Only public repositories are included.

The selection covers 12 projects after reviewing 21 public repositories. Beyond the CV projects, it includes [ChronoGraph](https://github.com/BillShiyaoZhang/ChronoGraph) (implemented iOS calendar-image export and privacy display, labeled a prototype), [You Researcher](https://github.com/BillShiyaoZhang/you-researcher) (an experimental research simulation), and [Track Notes](https://github.com/BillShiyaoZhang/track-noetes) (audio transcription demo; score alignment and automatic page turning remain future work). These descriptions were checked against source files as well as READMEs. The homepage highlights Knowledge Atlas, Ambient Agent, Our Choice, and ChronoGraph to show distinct areas of work.

Google Scholar returned a rate limit during verification. Publications were cross-checked against the official [AAMAS proceedings](https://www.ifaamas.org/Proceedings/aamas2024/pdfs/p2594.pdf), [arXiv](https://arxiv.org/abs/2511.18561), the [XJTLU profile](https://scholar.xjtlu.edu.cn/en/persons/SHIYAOZHANG14), the author’s ICCCN paper, and existing DOI records. AAMAS 2024 is an Extended Abstract; the USV paper is a preprint. The BDDM description is deliberately limited to the topic indicated by its title because its full text could not be inspected. Publication summaries are editorial summaries, not quoted abstracts. Citation counts are not hard-coded.

The theme’s sample résumé, third-party feed imports, sample navigation and placeholder page content have been replaced or excluded. The root source CV and unrelated demo documents are excluded from the generated site; the curated download path above is used instead.

Theme copyright and license are retained in `LICENSE`.
