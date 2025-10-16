# Profile Card - HNG Internship Stage 0

A responsive and accessible profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

![Profile Card Preview](https://img.shields.io/badge/Status-Complete-green) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🎯 Project Overview

This project is a fully responsive profile card component that meets all the requirements specified in the HNG Internship Stage 0 task. It showcases modern frontend development practices including semantic HTML, accessible design, and responsive layouts.

## ✨ Features

### 🎨 Design & Styling

- **Modern Aesthetic**: Clean, professional design with gradient backgrounds and subtle animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewports
- **CSS Grid & Flexbox**: Modern layout techniques for optimal responsiveness
- **Smooth Animations**: Subtle hover effects and transitions (respects `prefers-reduced-motion`)
- **Beautiful Typography**: Carefully selected fonts and spacing for optimal readability

### ♿ Accessibility

- **Semantic HTML**: Proper use of `<article>`, `<section>`, `<nav>`, `<figure>`, and other semantic elements
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
- **Screen Reader Support**: Comprehensive ARIA labels and semantic structure
- **High Contrast Support**: Enhanced styles for users with contrast preferences
- **Alt Text**: Descriptive alternative text for images

### 🔧 Functionality

- **Live Time Display**: Current time in milliseconds updates every second
- **Copy Feature**: Click/keyboard-activate the timestamp to copy it to clipboard
- **Error Handling**: Graceful fallback for avatar image loading failures
- **Cross-browser Support**: Works on modern browsers with appropriate fallbacks

### 📱 Responsive Design

- **Mobile-first Approach**: Optimized for mobile devices first
- **Flexible Grid Layouts**: Content adapts seamlessly across screen sizes
- **Optimal Typography**: Font sizes and spacing adjust for different viewports
- **Touch-friendly**: Interactive elements sized appropriately for touch interfaces

## 🎯 Required Elements & Data Test IDs

All required elements are implemented with the exact `data-testid` attributes specified:

| Element                 | Data Test ID                 | Implementation                               |
| ----------------------- | ---------------------------- | -------------------------------------------- |
| Profile card container  | `test-profile-card`          | `<article>` element wrapping entire card     |
| User name               | `test-user-name`             | `<h1>` element with proper heading hierarchy |
| User biography          | `test-user-bio`              | `<p>` element with descriptive bio text      |
| Current time            | `test-user-time`             | Live-updating timestamp in milliseconds      |
| Avatar image            | `test-user-avatar`           | `<img>` with proper alt text and fallback    |
| Social links container  | `test-user-social-links`     | `<ul>` containing all social media links     |
| Individual social links | `test-user-social-<network>` | Twitter, LinkedIn, GitHub with specific IDs  |
| Hobbies list            | `test-user-hobbies`          | `<ul>` with hobby items                      |
| Dislikes list           | `test-user-dislikes`         | `<ul>` with dislike items                    |

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Local Development

1. **Clone or download** this repository
2. **Navigate** to the project directory
3. **Open** `index.html` in your browser, or serve via a local server

#### Using a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### File Structure

```
stage1/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Comprehensive CSS with responsive design
├── script.js           # JavaScript for interactivity and time updates
└── README.md           # This documentation file
```

## 🛠️ Technical Implementation

### HTML Structure

- **Semantic elements**: `<article>`, `<header>`, `<section>`, `<nav>`, `<figure>`
- **Proper heading hierarchy**: `<h1>` for name, `<h2>` for section titles
- **Accessible forms**: All interactive elements are keyboard-focusable
- **Meta tags**: Proper viewport and SEO meta tags included

### CSS Features

- **CSS Grid & Flexbox**: Modern layout systems for responsive design
- **Custom Properties**: CSS variables for consistent theming
- **Media Queries**: Responsive breakpoints for mobile, tablet, desktop
- **Animation**: Smooth transitions and hover effects
- **Accessibility**: Focus styles, high contrast support, reduced motion support

### JavaScript Functionality

- **Time Display**: Updates current timestamp every second using `Date.now()`
- **Error Handling**: Graceful fallbacks for image loading and clipboard operations
- **Accessibility**: Enhanced keyboard navigation and ARIA labels
- **Performance**: Efficient event handling and DOM manipulation

## 📋 Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🎨 Customization

### Modifying Content

Edit the following in `index.html`:

- **Name**: Update the text in `[data-testid="test-user-name"]`
- **Bio**: Modify the paragraph in `[data-testid="test-user-bio"]`
- **Avatar**: Change the `src` attribute of the avatar image
- **Social Links**: Update URLs and add/remove social media links
- **Hobbies/Dislikes**: Modify the list items in respective sections

### Styling Changes

Key CSS variables in `styles.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --background-color: #f7fafc;
}
```

## 📈 Performance Considerations

- **Optimized Images**: Avatar image should be 300x300px or smaller
- **Minimal JavaScript**: Lightweight vanilla JS implementation
- **CSS Optimization**: Efficient selectors and minimal reflows
- **Lazy Loading**: Ready for image lazy loading implementation

## 🔒 Security Features

- **Safe External Links**: All social links include `rel="noopener noreferrer"`
- **XSS Prevention**: No dynamic HTML injection
- **Content Security**: Proper meta tags and safe practices

## 🤝 Contributing

This is a learning project for HNG Internship, but suggestions and improvements are welcome!

## 📞 Contact

- **GitHub**: [@Lansa-18](https://github.com/Lansa-18)
- **LinkedIn**: [Mapelujo Abdulkareem](https://www.linkedin.com/in/lancer18/)
- **Twitter**: [@Lansa_18](https://x.com/Lansa_18")

---

**Built for HNG Internship Stage 0**
