# SectionHeader

The row above every section heading: a shell command in accent, a hairline filling the row, a two-digit index. Followed by the Fraunces section heading (`heading-section`, 40px; 32px phones) 28-40px below.

| Section | Command | Index |
| --- | --- | --- |
| About | `$ whoami` | 01 |
| Experience | `$ cat experience.log` | 02 |
| Learning now | `$ tail -f learning.log` | 03 |
| Education & languages | `$ cat about.txt` | 04 |
| Contact | `$ ping orkhan` | 05 |

Commands are not translated. The heading under them is.

```html
<div class="kd-section-head">
  <span class="kd-section-head__cmd">$ cat experience.log</span>
  <span class="kd-section-head__rule" aria-hidden="true"></span>
  <span class="kd-section-head__num">02</span>
</div>
<h2 class="kd-serif" style="font-size:40px;line-height:1.1;letter-spacing:-0.02em;margin:0 0 40px">Experience</h2>
```
