---
title: "Protecting Users by Confining JavaScript with COWL"
date: "2022-05-23"
---

[Protecting Users by Confining JavaScript with COWL](https://www.usenix.org/system/files/conference/osdi14/osdi14-paper-stefan.pdf>)

## Problem

Web apps have lots of client-side functionality, running third-party code pose threat to security.

### Some-origin Policy(SOP)

Idea: Isolate content from different origins

- Compartmentalize code into contexts(tabs, iframes…)
- Disallow cross-origin reads from contexts & servers

Problems

- Not strict enough: can disclose data arbitrarily
  - Third-party code can leak data
  - Code runs with authority of page
- Not flexible enough: can’t read cross-origin data
  - No secure third-party mashups

### SOP+CSP+CORS

Discretionary Access Control(DAC)

- Content Security Policy: Whitelist origins page can communicate with
- Cross-origin Resource Sharing: Server whitelists origins allowed to read data

DAC → Not enough!

- Forces choice between functionality and privacy
  - Most developer give up privacy for functionality

### Why not think of ideas like Hails, Jif or JSFlow confinement?

- Can’t expect developers to learn new language
- Can’t touch JavaScript runtime
  - Highly optimized JITs
  - Add 1 instruction on hot path → no upstream!
- Can’t radically change the security model
  - Ingrained notion of principals: origins
  - Keep iframes, pages, etc. as security boundaries

## Solution

Need mandatory access control (MAC) to impose restrictions on how code uses data.

### Some good news

- Browsers already offer execution contexts
  - Isolation enforced across context boundaries
- Can enforce MAC at context granularity
  - No need to change language runtime! [BFlow]
- Can easily add new DOM-level APIs
  - Attach policies to messages [Hails]

### **Confinement with Origin Web Labels (COWL)**

Key concepts

1. Labels: using origins to specify MAC policies
   - Every piece of data is protected by a label
   - Label specifies, in terms of origin(s), who cares about the data
   - COWL tracks labels at context/server granularity
   - Messages can be labeled differently from context
2. Labeled communication: security across contexts
   - Avoid changing existing communication APIs
   - Browser-server communication must respect labels
   - Contexts can adopt more restrictive label
3. Privileges: using origins to manage trust

## Reference

[OSDI '14 - Protecting Users by Confining JavaScript with COWL](https://www.youtube.com/watch?v=vvPvrbOM8QQ)

[COWL: A Confinement System for the Web](https://cowl.ws/)

[COWL Slide](http://www.scs.stanford.edu/~deian/pubs/stefan:2014:protecting-slides.pdf)
