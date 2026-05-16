# Certificate Signature Images

Drop PNG (or JPG) signature images here to have them embedded above the signature lines on every generated certificate.

## File names

| File | Purpose |
|---|---|
| `authorized.png` | Left side — Authorized Signatory (Varchas Labs). Used for **every** certificate. |
| `mentor.png` | Right side — generic mentor signature fallback. Used when no per-mentor file exists. |
| `<mentor-name-slug>.png` | Right side — per-mentor signature. Overrides `mentor.png` when present. |

## Mentor slug rule

The mentor's name is lowercased, then any non-alphanumeric run becomes a single `-`. Examples:

| Mentor name | File to create |
|---|---|
| `Somashekar R` | `somashekar-r.png` |
| `Dr. Priya Sharma` | `dr-priya-sharma.png` |
| `John O'Neil` | `john-o-neil.png` |

## Image tips

- Use a **transparent-background PNG** for the cleanest look.
- Recommended source size: ~600 × 200 px. The image is auto-scaled to fit a 170 × 40 pt box above the signature line, preserving aspect ratio.
- Black or dark-ink strokes work best against the certificate background.

## Behavior

- If a file is missing, the signature line is still drawn — only the image is omitted. No error.
- Changes take effect on the **next certificate generation** (no server restart required, the file is read on each generate call).
