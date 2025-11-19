# HireLog — Job Application Tracker

A lightweight, client-side job application tracker built with HTML, CSS and JavaScript. Track applications, update statuses, search and filter entries, and use handy extras like import/export, keyboard shortcuts and summaries.

## Overview

HireLog helps job-seekers keep an organized list of applications — company, role, date applied, status, notes, and links — all stored locally in the browser so nothing is lost between sessions.

## Key Features

- **Core:** Add, edit and delete job entries; change application status (e.g., Applied, Interviewing, Offer, Rejected); persistent storage using `localStorage`.
- **Search & Filter:** Search by company or role and filter entries by status or date range.
- **Sorting:** Sort by date applied, company name, or status.
- **Import / Export:** Export your data as JSON and import it back to restore or migrate.
- **Bulk Actions:** Bulk update status or delete multiple entries.
- **Keyboard Shortcuts:** Quick-add (e.g., press `N`) and save shortcuts to speed up tracking.
- **Customization:** Simple CSS variables allow you to tweak theme colors in `style.css`.
- **Data Summary:** Quick dashboard that shows counts per status and recent activity.

## Added / Advanced Features

- Auto-detect duplicate entries and prompt to merge.
- Reminders (optional): local reminders for follow-ups (implemented as in-app alerts).
- CSV export option for integrating with spreadsheets.
- Light/dark theme toggle persisted in `localStorage`.
- Template snippets for role-specific notes (interview questions, next steps).

## Demo / Screenshots

Place screenshots in the `Images/` folder and reference them here for documentation. Example:

![App Screenshot](Images/screenshot-1.png)

## Getting Started

Prerequisites:

- Modern web browser (Chrome, Edge, Firefox, Safari)
- Optionally: Node.js for `http-server`, or Python for a simple HTTP server

Quick preview options (PowerShell examples):

```powershell
# 1) Open the app directly (double-click index.html) or use a static server:
# Using Python 3
python -m http.server 8000; Start-Process "http://localhost:8000"

# Using npx http-server (Node.js)
npx http-server -c-1 . -p 8000; Start-Process "http://localhost:8000"

# VS Code: use the Live Server extension and open `index.html`.
```

## Installation (clone)

```powershell
git clone https://github.com/Shreyash-30/HireLog.git
cd "Job Application Tracker"
# then open index.html or run a static server (see above)
```

## Usage

- Open `index.html` in your browser.
- Click **Add Job** (or press `N`) to create a job entry: company, role, URL, date, status, notes.
- Use the search bar to find entries quickly.
- Use filters to show only the status you care about (e.g., Interviewing).
- Export to JSON to back up or move your data; import to restore.

Data storage: the app stores everything in the browser `localStorage`. Export before clearing browser data or switching devices.

## Project Structure

- `index.html` — single-page app UI
- `style.css` — styles and CSS variables for theming
- `script.js` — application logic (data handling, UI updates, persistence)
- `Images/` — screenshots and image assets
- `README.md` — this file

## Development

- Keep code simple and modular: UI update functions should be separate from data logic.
- If you add new features, include small unit tests where applicable or manual test steps.
- Format JS with your preferred formatter (Prettier is recommended).

Recommended dev workflow:

```powershell
# create a feature branch
git checkout -b feat/new-feature
# make changes, then run a quick browser preview
# stage and commit
git add .; git commit -m "Add feature: description"
```

## Contributing

Contributions are welcome. Please follow these simple guidelines:

- Open an issue describing the change or feature request.
- Create a fork and a feature branch for work.
- Keep PRs focused and small.
- Provide a short description of manual test steps in your PR.

## License

This project is provided under the MIT License. See `LICENSE` for details (or add an MIT license file to the repo).

## Contact

Maintainer: Shreyash-30 — open an issue on GitHub for questions or feature requests.

---

Enjoy using HireLog — a small, private helper to stay organized during your job search.