# One Day, Nineteen Centuries

A mobile field guide for a one-day Galilee trip to kivrei tzaddikim:
**Amuka → Meron → Tzfat → Tiberias**, Thursday 17 September 2026 / 6 Tishrei 5787.

Built for phones on a bus with bad reception. Installable, works fully offline
after the first load, and has a high-contrast **Sun mode** for reading outdoors.

## What's in it

- **Now** — live position in the day's schedule, countdown to the next stop
- **Route** — the full itinerary plus halachic times for the day
- **Stops** — a deep page per site: a sixty-second brief for standing at the kever,
  then the full history with primary sources quoted and linked
- **Sages** — the nine people you're visiting, in the order they lived, on a time spine
- **Tefillos** — what to say at a kever
- **Field** — dress, terrain, water, navigation links, what to expect
- **Sources** — every claim traced to a source, with tradition marked separately from documented history

## Run locally

```sh
python3 -m http.server 4173
```

Then open http://localhost:4173

## Deploy

Static site, no build step. GitHub Pages serves the repository root.

## Editorial standard

Claims were checked against primary texts (Sefaria) and scholarly sources during
research. Where something is authentic Jewish tradition rather than documented
history, the guide says so on the page rather than blurring the two.
See `CLAIMS.md` for the verification ledger.

## Files

| File | Purpose |
|---|---|
| `index.html` | App shell and view containers |
| `content.js` | All content, sources and schedule data |
| `app.js` | Router, live-schedule engine, renderers |
| `style.css` | Design system |
| `sw.js` | Offline cache — bump `CACHE` after any content change |
