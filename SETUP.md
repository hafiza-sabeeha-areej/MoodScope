# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Static Assets**
   
   The static folder needs to be copied to the public directory for the React app to access CSS, JS, images, and fonts.
   
   **Windows (PowerShell):**
   ```powershell
   Copy-Item -Path "static" -Destination "public\static" -Recurse
   ```
   
   **Linux/Mac:**
   ```bash
   cp -r static public/static
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

## Project Structure After Setup

```
Moodscope/
├── public/
│   ├── static/          # Copied from root static folder
│   │   ├── css/
│   │   ├── js/
│   │   ├── img/
│   │   ├── fontawesome/
│   │   └── favicon/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── static/              # Original static folder (keep this)
├── templates/           # Original HTML templates (can be kept for reference)
├── package.json
└── README.md
```

## Important Notes

- The `static` folder in the root should remain as it may be used by your backend (Flask) if you're running both together
- The React app serves static files from `public/static/`
- All image paths in JSX components use `/static/img/...` which will resolve to `public/static/img/...`
- CSS files are imported in `src/index.css` and should be accessible from `public/static/css/`

## Troubleshooting

If styles or images are not loading:
1. Verify that `public/static` exists and contains all subdirectories
2. Check browser console for 404 errors
3. Ensure the development server is running (`npm start`)
4. Clear browser cache and reload

