---
to: 'src/components/<%= page %>/<%= h.capitalize(component) %>.astro'
---

---
import "@styles/<%= page %>/<%= component %>.css";
---

<div><%= component %></div>