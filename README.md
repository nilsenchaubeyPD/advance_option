# Advance Option

Standalone **Advanced Options** section (Proctoring, Communications, Results & Review, Candidate Experience, Reporting & Analytics), split out from the assessment review page.

No build step — plain HTML/CSS/JS.

```bash
npm start   # or: python3 -m http.server 5192
```

Then open http://localhost:5192.

- `index.html` – page shell
- `styles.css` – section styles (extracted from the live page; page chrome removed)
- `app.js` – renders the five tabs and their behaviour (templates, nested settings, tooltips, IP list, stepper, services menu)
