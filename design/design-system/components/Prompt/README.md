# Prompt

The hero's shell prompt above the name: `orkhan@khandev:~$ cd ~/devops` with a typing animation and a blinking block cursor. It hints at the move toward DevOps without saying it.

- Mono 15px (13px phones), `muted` for punctuation, `accent` for `orkhan@khandev`, `text` for `~` and the command.
- Cursor: 9×18px block in `accent`, `kd-blink`.
- Typing: start after ~720ms, one character per 180ms. Reduced motion: full command at once, cursor static.
- The command text is the same in every language.

```html
<p class="kd-prompt"><span class="kd-prompt__user">orkhan@khandev</span>:<span class="kd-prompt__cmd">~</span>$ <span class="kd-prompt__cmd" data-type="cd ~/devops"></span><span class="kd-cursor kd-blink" aria-hidden="true"></span></p>
```

Script: fill `[data-type]` character by character; on `prefers-reduced-motion` set the full text immediately.
