---
title: "Two Forms of Pre-rendering in Next.js"
date: "2022-06-17"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

## Static Generation

This is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.

This means that the server only needs to respond to requests for pre-built pages and doesn't need to generate content on the fly for each request.

### Pros

- Fast performance, as pre-built pages can be served directly to the user.
- Low server requirements, as the server only needs to respond to requests for pre-built pages.
- Better security, as there is no database or server-side code that can be exploited.

### Cons

- Difficult to implement dynamic content, as the pre-rendered HTML is reused on each request.
- Not suitable for sites that require frequent content updates.

### Suitable for

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

## Server-side Rendering

This is the pre-rendering method that generates the HTML on **each request**. So it means that the server needs to generate content on the fly for each request, which can slow down performance.

### Pros

- Dynamic content such as user-specific data can be easily integrated into pages.
- Changes to content can be made in real-time and immediately visible to users.
- Suitable for sites that require frequent content updates.

### Cons

- Slower performance, as the server needs to generate content on the fly for each request.
- Higher server requirements.
