# UnicornStudio React Website

A modern React website featuring UnicornStudio animations in the first viewport.

## Features

- 🦄 UnicornStudio animation integration
- ⚛️ React 18 with modern hooks
- 🎨 Beautiful, responsive design
- 📱 Mobile-friendly layout
- ⚡ Fast loading with webpack optimization
- 🎯 Clean, modern UI/UX

## Project Structure

```
src/
├── App.js          # Main React component with UnicornStudio integration
├── App.css         # Styling for the entire application
├── index.js        # React app entry point
└── index.html      # HTML template

Configuration files:
├── package.json     # Dependencies and scripts
├── webpack.config.js # Webpack configuration
└── .babelrc        # Babel configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run dev` - Alternative development command

## UnicornStudio Integration

The UnicornStudio animation is embedded in the first viewport using:

- **Project ID**: `VWAWx0owTqw36ZTfeBvQ`
- **Dimensions**: 1440px × 900px (responsive)
- **Script Version**: v1.4.29

The integration includes:
- Automatic script loading
- Responsive design adjustments
- Loading states
- Error handling

## Customization

### Modifying the Animation

To use a different UnicornStudio project, update the `data-us-project` attribute in `src/App.js`:

```javascript
<div 
  data-us-project="YOUR_PROJECT_ID" 
  style={{ width: '1440px', height: '900px' }}
/>
```

### Styling

The application uses modern CSS with:
- CSS Grid for responsive layouts
- Flexbox for component alignment
- Gradient backgrounds
- Smooth animations and transitions
- Mobile-first responsive design

### Adding Content

Additional sections can be added in `src/App.js` below the hero section. The current structure includes:
- Hero section (UnicornStudio animation)
- Content section
- Features section
- Footer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as a starting point for your own applications.
