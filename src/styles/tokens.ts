import tokens from '../../design/design-system/tokens.json';

// Turns tokens.json into one `:root { --name: value }` block.
const vars: [string, string | number][] = [
  ...tokens.color.tokens.map((t) => [t.name, t.value] as [string, string]),
  ...Object.entries(tokens.type.families).map(([k, v]) => [`font-${k}`, v] as [string, string]),
  ...tokens.spacing.tokens.map((t) => [t.name, t.value] as [string, string]),
  ...tokens.radius.tokens.map((t) => [t.name, t.value] as [string, string]),
  ...tokens.layout.tokens.map((t) => [t.name, t.value] as [string, string]),
];

for (const group of tokens.type.groups) {
  for (const s of group.styles as Record<string, string | number>[]) {
    vars.push([`fs-${s.name}`, s.fontSize], [`lh-${s.name}`, s.lineHeight], [`fw-${s.name}`, s.fontWeight]);
    if (s.letterSpacing) vars.push([`ls-${s.name}`, s.letterSpacing]);
  }
}

export const tokenCss = `:root{${vars.map(([k, v]) => `--${k}:${v}`).join(';')}}`;

export const color = (name: string) => tokens.color.tokens.find((t) => t.name === name)!.value;
