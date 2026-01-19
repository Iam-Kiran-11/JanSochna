# JanSochna – MGNREGA District Dashboard

JanSochna is a frontend web application that visualizes district-level MGNREGA performance data using the Government of India’s open data API. The project focuses on accessibility, responsiveness, and real-world usability for location-based public data consumption.

🔗 Live Demo: https://iam-kiran-11.github.io/JanSochna
🎥 Loom Walkthrough: https://www.loom.com/share/13f1cddedc3b4f0291a459df2c7c547f

---

## Overview

The application automatically detects the user’s district using browser geolocation and displays key MGNREGA metrics in a simplified dashboard. Data is fetched live from the data.gov.in API and presented using visual components optimized for mobile and low-bandwidth environments.

---

## Features

- Automatic district detection via Geolocation API  
- Live data integration using data.gov.in Open API  
- Client-side data caching using localStorage  
- Responsive, mobile-first UI  
- Icon-based data visualization for clarity and readability  

---

## Tech Stack

- HTML5 (semantic structure)
- CSS3 (Flexbox, Grid, responsive layout)
- JavaScript (ES6+, Fetch API, Geolocation API)
- API: data.gov.in (MGNREGA dataset)

---

## Architecture Notes

- Frontend-only implementation for rapid deployment  
- LocalStorage used to persist last successful API response  
- Designed to be backend-ready (API caching and DB sync can be added later)
- More advance designed automatic district detection

---

## Future Improvements

- Backend caching layer (Node.js + DB)  
- Historical trend analysis and district comparison  
- Multilingual and voice-assisted support  

---

## Author

Kiran Priyadarshini Ray  
Frontend Developer  
GitHub: https://github.com/Iam-Kiran-11 | LinkedIn: https://www.linkedin.com/in/kiranpriyadarshiniray
