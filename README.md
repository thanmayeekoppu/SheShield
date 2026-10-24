# SheShield — Beginner-friendly hackathon MVP

**Goal:** Build a working, privacy-conscious prototype for PS2: Women’s Safety. The MVP accepts a pasted incident description and an optional file, performs transparent keyword-based triage, creates an editable complaint draft in English/Telugu/Hindi, generates a text report and JSON evidence manifest, and checks a selected file's SHA-256 hash.

## Important scope and honesty

This is a prototype, not an emergency service, legal adviser, official cybercrime portal integration, or reliable crime predictor.

- The initial version does **not** use a server or database. Message text and file hashing are processed in the browser.
- The optional file is hashed locally; its contents are not uploaded or saved by this app.
- The app does not OCR text from screenshots. For the MVP, paste the message text from the screenshot. Screenshot OCR can be added later only if the team can test it reliably.
- The threat classifier uses transparent keyword rules, not a trained AI model. It can miss context and can be wrong.
- A SHA-256 hash verifies byte equality against a previously recorded hash. It does not prove who made a file, whether it is genuine, when an incident occurred, or whether it is legally admissible.
- The app creates a draft only. The user must review facts and submit through an official channel themselves.
- Never use real sensitive messages, intimate images, phone numbers, addresses, passwords, or private evidence in a public demo.

## Run it (easiest route)

### Option A: VS Code Live Server
1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Open the `SheShield_Starter` folder.
3. In Extensions, install **Live Server** by Ritwick Dey.
4. Right-click `index.html` → **Open with Live Server**.
5. Use the fictional demo sample. Test file hashing with a harmless sample `.txt` file.

### Option B: Python local server
Install Python if it is not already installed. Open a terminal in this folder and run:

```bash
python -m http.server 8000
```

On Windows, if `python` does not work, try:

```bash
py -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Web Crypto works on localhost and HTTPS contexts.

## Folder structure

```text
SheShield_Starter/
├── index.html
├── styles.css
├── app.js
├── README.md
└── docs/
    ├── BUILD_PLAN.md
    ├── TEST_PLAN.md
    ├── PITCH_AND_DEMO.md
    └── PPT_OUTLINE.md
```

## How the current MVP works

1. User enters a fictional message and optionally selects a file.
2. `app.js` runs a transparent keyword classifier and shows the matched reason.
3. A mini exposure chain connects the incident category to a potential information risk and suggested response.
4. A localized complaint draft is created and can be edited.
5. If a file is selected, Web Crypto calculates its SHA-256 hash in the browser.
6. Download creates a `.txt` incident summary and `.json` manifest. Use browser Print → Save as PDF for a PDF copy.
7. “Verify selected file again” recalculates the selected file's hash and compares it with the recorded hash. Because browsers normally do not let a web page silently alter the user's original disk file, this test compares the selected file's current bytes in the session; for a convincing modification test, select the original, record its hash, then select a changed copy as a new file and compare hashes manually.

## Limitations to explain to judges

- No OCR, live AI API, automatic portal submission, account creation, cloud storage, or digital signature in this starter.
- The manifest is not digitally signed. Do not call it signed or tamper-proof.
- The “severity” is a rough triage cue based on rule matches, not a prediction of danger.
- Translations are starter templates and must be reviewed by fluent speakers before any real use.
- This is a hackathon prototype, not a production-grade security product.

## Suggested future upgrades only if the MVP is stable

1. OCR for screenshots using a locally run, tested library.
2. Proper digital signing of the manifest with a documented signing key and verification procedure.
3. A reviewed set of localized templates and a broader, tested threat taxonomy.
4. Accessibility testing and privacy threat modelling.
5. Independent review by cyber-safety practitioners.

## Project sources

Use the official portal for real reporting guidance: https://cybercrime.gov.in/
