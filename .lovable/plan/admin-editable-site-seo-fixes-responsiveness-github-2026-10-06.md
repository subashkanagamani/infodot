# Admin-editable site, SEO fixes, responsiveness, GitHub

## 1. Connect content to the admin panel
The admin already has Page Content, Services, Blog, Case Studies, Team, Testimonials and Site Settings screens. Today only Home hero, About, Pricing, Z360, Services, Contact, Navbar, Footer read from them; every other page uses fixed wording in code.

- Wire the remaining public pages (all service pages, compliance/industry pages, Resources hub + guides, Small & Growing Firms, Healthcare/NHS, legal pages) to read their sections from Page Content, keeping today's wording as the fallback so nothing changes visually until edited.
- Add a "Seed from live site" button per page in Page Content that copies the current wording into the database, so editors start from the real text instead of blank forms.
- Per-page SEO fields (title, description) editable in admin and applied on each page.
- Phone, email, socials, footer credit read from Site Settings everywhere.

## 2. SEO
- Run the SEO review, fix every failing item (titles, descriptions, canonical, headings, alt text, sitemap/robots, structured data).
- Mark fixed findings; the next rescan confirms.

## 3. Responsiveness
- Automated check of every public page and admin screen at phone (390), tablet (768) and desktop (1280): no sideways scrolling, readable text, working menus. Fix anything that breaks.

## 4. GitHub
- I can't push code myself. You connect it once: chat "+" menu → GitHub → Connect project → Create Repository. After that every change syncs automatically.

## Technical details
- Use existing `useSection(pageKey, sectionKey, fallback)`; fallbacks come from current data files (`services.ts`, `servicePromises.ts`, `newPages.ts`, resources data) so copy stays verbatim.
- Seed button upserts fallback objects into `page_content` (onConflict page_key,section_key).
- SEO meta via existing per-page head handling, overridable from `page_content` section `seo`.
- Playwright sweep in /tmp/browser/responsive across all routes from `siteNav.ts` + sitemap.
