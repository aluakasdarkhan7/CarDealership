CarDeal Pro — Professional static site + optional Flask backend (mini project)
---------------------------------------------------------------------------

What is inside:
- index.html, inventory.html, about.html, contact.html, admin.html
- assets/css/styles.css, assets/js/app.js
- assets/img/*.svg (logo, car illustrations)
- server.py (optional Flask server to run API locally)
- requirements.txt (Flask if you want server)
- UML diagram (uml/diagram.svg)
- report.md (short 1-2 page report in markdown)

How to use (static):
1. Unzip the package.
2. Open index.html in your browser (double-click). The site works as a fully static demo.
3. Bookings are stored in browser localStorage (key: bookings_v2).

How to use (optional Flask backend):
1. Install Python 3.8+ and pip.
2. Create a venv, activate it.
3. pip install -r requirements.txt
4. python server.py
5. Open http://localhost:5000 in your browser.
The Flask server will serve static files and exposes a simple API to GET/POST bookings (saved to bookings.json).

If you want: I can also prepare a Word (DOCX) or PDF report from report.md — say which one.
