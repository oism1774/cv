# BackgroundLog

The only page background: decorative syslog lines drifting upward behind the right half of the page, full page height, fading out toward the left edge so the name and text sit on clean `bg`.

- Layer: absolutely positioned inside the page root (`position: relative; overflow: hidden`), `left: 48%` to the right edge, `z-index: 0`, `pointer-events: none`, `aria-hidden="true"`. Header, main and footer sit above it (`position: relative; z-index: 1`).
- Mask: `linear-gradient(to right, transparent, #000 35%)`.
- Text: Geist Mono 12px, line-height 2, `log-ghost`, `white-space: nowrap`.
- Content: ~20 generic sysadmin lines (cron backup, rsync, dovecot, postfix, sshd, nginx reload, DNS zone khandev.xyz, opendkim, wg-quick, certbot, fail2ban, dnf), repeated enough to cover the page height, then the whole list duplicated; the track animates `translateY(-50%)` over 420s linear, infinite.
- Phones: `left: 30%`, 11px, slightly fainter.
- Never put real claims or client data in the lines. Reduced motion: static.
