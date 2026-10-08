# StudyBot 5.0 — GitHub Pages + Firebase

StudyBot 5.0 keeps the earlier StudyBot workflow and adds the new study-system features requested:

- Google student login
- Student name + roll number profile
- Firestore cloud progress linked to the student's Google UID
- Mid-Term 2026-27 portion and timetable
- Full Part 1 + Part 2 chapter database
- Editable Mid-Term portion
- Add custom chapters
- Backup / restore / reset
- Smart Daily Plan with weak-topic weighting, exam urgency and spaced review
- Practice quiz with scoring and history
- Offline Smart Question Generator / practice-set generator
- Focus Mode timer with study-time and session tracking
- Streaks, points and levels
- Subject analytics and weak-topic list
- Personal chapter notes synced in the progress document
- Student Doubt Box
- Anonymous class leaderboard based on study points
- Teacher Admin Dashboard
- Student search and detailed student view
- Open-doubt monitoring and teacher replies
- CSV export for teacher use

## Firebase setup

1. Create a Firebase project.
2. Enable **Authentication -> Google**.
3. Create **Cloud Firestore**.
4. Register a **Web App** and copy its config into `firebase-config.js`.
5. In **Authentication -> Settings -> Authorized domains**, add your GitHub Pages domain. For local testing also add `localhost`.
6. Publish the contents of `firestore.rules` in **Firestore -> Rules**.
7. Run StudyBot once with the teacher Google account. The first login creates a `users/{uid}` document with `role: student`.
8. In Firestore, change that teacher document's `role` field to `admin`.
9. Push the project files to GitHub and enable **GitHub Pages**.

## GitHub Pages files

Keep these files together:

- `index.html`
- `admin.html`
- `firebase-config.js`
- `firestore.rules`
- `README.md`
- `run-local.bat`
- `run-local.ps1`

## Local testing

Do not double-click `index.html` for Google login. That uses `file://` and browser authentication is not intended to run from that origin.

1. Put all files in one folder.
2. Fill in `firebase-config.js`.
3. Make sure `localhost` is in Firebase Authentication's authorized domains.
4. Double-click `run-local.bat`.
5. Open `http://localhost:8000/` if it does not open automatically.

## Admin URL

After GitHub Pages is enabled:

`https://YOUR-USERNAME.github.io/YOUR-REPO/admin.html`

## Security

Never put a Firebase service-account JSON file, private key, or server credential in GitHub.

The Admin page is intended only for an authorized teacher. It can display student names, roll numbers and Google email addresses, so keep it private and follow your school's data-privacy rules.

Google is used for authentication. StudyBot does not collect Google passwords, and StudyBot progress is stored in Firestore under the user's Firebase Auth UID rather than "inside Gmail".
