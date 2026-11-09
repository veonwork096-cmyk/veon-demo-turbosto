// Page behaviour for the TurboSTO homepage. Everything works as plain HTML without it:
// both price tables show, every city panel shows, the menu opens through the popover attribute.

/* ---------- Price tabs ---------- */
const tabsRoot = document.querySelector<HTMLElement>("[data-tabs]");
const tabs = tabsRoot ? Array.from(tabsRoot.querySelectorAll<HTMLButtonElement>('[role="tab"]')) : [];
const indicator = tabsRoot?.querySelector<HTMLElement>(".tabs__indicator") ?? null;

function moveIndicator(tab: HTMLElement) {
  if (!indicator) return;
  indicator.style.setProperty("--x", `${tab.offsetLeft}px`);
  indicator.style.setProperty("--w", `${tab.offsetWidth}`);
}

function selectTab(id: string, focus = false) {
  if (!tabsRoot) return;
  for (const t of tabs) {
    const on = t.dataset.tabId === id;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(t.getAttribute("aria-controls") || "");
    if (panel) panel.hidden = !on;
    if (on) {
      moveIndicator(t);
      if (focus) t.focus();
    }
  }
}

if (tabsRoot && tabs.length) {
  tabsRoot.classList.add("is-tabbed");
  selectTab(tabs[0].dataset.tabId || "turbo");
  requestAnimationFrame(() => requestAnimationFrame(() => tabsRoot.classList.add("is-ready")));
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => selectTab(t.dataset.tabId || ""));
    t.addEventListener("keydown", (e) => {
      let n = -1;
      if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") n = 0;
      if (e.key === "End") n = tabs.length - 1;
      if (n >= 0) { e.preventDefault(); selectTab(tabs[n].dataset.tabId || "", true); }
    });
  });
  window.addEventListener("resize", () => {
    const cur = tabs.find((t) => t.getAttribute("aria-selected") === "true");
    if (cur) moveIndicator(cur);
  }, { passive: true });
  document.fonts?.ready.then(() => {
    const cur = tabs.find((t) => t.getAttribute("aria-selected") === "true");
    if (cur) moveIndicator(cur);
  });
}

// Links that lead to a price tab (menu, route keys).
document.querySelectorAll<HTMLAnchorElement>('a[href="#prices"][data-tab]').forEach((a) => {
  a.addEventListener("click", () => selectTab(a.dataset.tab || "turbo"));
});

/* ---------- Network: city index ---------- */
const net = document.querySelector<HTMLElement>("[data-network]");
if (net) {
  net.classList.add("is-filtered");
  const buttons = Array.from(net.querySelectorAll<HTMLButtonElement>("[data-city]"));
  const panels = Array.from(net.querySelectorAll<HTMLElement>("[data-panel]"));
  const show = (slug: string) => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.city === slug)));
    panels.forEach((p) => {
      const on = p.dataset.panel === slug;
      p.hidden = !on;
      if (on) {
        p.classList.remove("is-in");
        void p.offsetWidth; // restart the entrance of the cards
        p.classList.add("is-in");
      }
    });
  };
  const start = buttons.find((b) => b.getAttribute("aria-pressed") === "true")?.dataset.city || buttons[0]?.dataset.city;
  if (start) {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.city === start)));
    panels.forEach((p) => { p.hidden = p.dataset.panel !== start; });
  }
  buttons.forEach((b) => b.addEventListener("click", () => show(b.dataset.city || "")));
}

/* ---------- Menu (popover): close after choosing a section ---------- */
const menu = document.getElementById("menu") as (HTMLElement & { hidePopover?: () => void }) | null;
menu?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => menu.hidePopover?.());
});

/* ---------- Mobile call bar: appears after the hero ---------- */
const bar = document.querySelector<HTMLElement>("[data-mobile-bar]");
const hero = document.getElementById("hero");
if (bar && hero && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(([e]) => {
    bar.classList.toggle("is-shown", !e.isIntersecting);
  }, { rootMargin: "0px 0px -40% 0px" });
  io.observe(hero);
}

/* ---------- Demo form: nothing is sent ---------- */
document.querySelectorAll<HTMLFormElement>("[data-demo-form]").forEach((f) => {
  f.addEventListener("submit", (e) => e.preventDefault());
});
