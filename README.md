# MoodScope - Depression Detection in Children with Voice

A React-based web application for detecting depression in children through voice analysis.

## Features

- **Home Page**: Landing page with information about the service
- **Contact Page**: Contact form and location information
- **Sign In/Sign Up**: User authentication
- **Dashboard**: User dashboard with prediction and model training data
- **Prediction**: Upload or record voice for depression prediction
- **Model Training**: Train custom machine learning models

## Installation

1. Install dependencies:
```bash
npm install
```

2. Copy static assets:
Copy the `static` folder from the root directory to the `public` directory. The static assets (CSS, JS, images) should be in `public/static/`.

On Windows (PowerShell):
```powershell
Copy-Item -Path "static" -Destination "public\static" -Recurse
```

On Linux/Mac:
```bash
cp -r static public/static
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
  components/
    Header.jsx      # Shared header component
    Footer.jsx      # Shared footer component
  pages/
    Home.jsx        # Home page
    Contact.jsx     # Contact page
    SignIn.jsx      # Sign in page
    SignUp.jsx      # Sign up page
    Dashboard.jsx   # Dashboard page
    Predict.jsx     # Prediction page
    TrainModel.jsx  # Model training page
  styles/
    *.css          # Component-specific styles
  App.jsx          # Main app component with routing
  index.js         # Entry point
  index.css        # Global styles
  App.css          # App-level styles

public/
  static/          # Static assets (CSS, JS, images, fonts)
  index.html       # HTML template
```

## Responsive Design

The application is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Bootstrap (via CSS)
- Font Awesome Icons
- Custom CSS for styling

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner

## Notes

- The application uses React Router for navigation
- Authentication state is managed in App.jsx (you may want to integrate with a backend)
- Static assets are served from the `public/static` directory
- All components are responsive and mobile-friendly

