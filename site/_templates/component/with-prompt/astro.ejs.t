---
to: 'src/components/<%= page %>/<%= h.changeCase.pascal(component) %>.astro'
---

---
import "@styles/<%= page %>/<%= component %>.css";
---

<div class="<%= page %>-<%= component %>"><%= component %></div>