# TerminalCard

A "window" for anything a shell would print: the neofetch card (hero), the learning log and the ping output (contact). `surface` ground, `border`, `radius-lg`, mono.

Variants:

- **neofetch** - title bar `neofetch` / `bash` (12px muted, `line` underline), then `orkhan@khandev`, a dashed separator in `border-strong`, key/value rows (key 64px wide in `accent`, value in `text-body`), the status row with a StatusDot, and a palette strip of six 22×14 swatches. Desktop only, 360px wide.
- **learning log** - one row per item: `[spinner]` (36px), name (120px, `text`, 500), description in Geist 15px `muted`, status 12px. In progress: accent, spinning `| / - \`; done: `[ok]` accent; queued: `[..]` muted. Footer line "waiting for new entries" + blinking `_`.
- **ping** - 22px padding, line-height 2: header line in muted, `reply from <label> <link>` rows (label 80px in accent, link `text` underlined in `border-strong`), closing `--- 3 replies, 0% loss ---`. Lines use `kd-ln` with staggered delays, started when the card enters the viewport.

```html
<div class="kd-term" style="max-width:520px">
  <div class="kd-term__row"><span class="kd-term__key">[/]</span><span style="color:var(--text);font-weight:500;width:120px">RHCSA</span><span style="font-family:var(--font-sans);font-size:15px;color:var(--muted);flex:1 1 220px">RHEL 9, Linux administration</span><span class="kd-term__key" style="font-size:12px">in progress</span></div>
</div>
```
