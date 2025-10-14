# Naieem Islam - Professional Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Software Engineer.

Visit https://naieem-55.github.io/portfolio/

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and smooth navigation
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Introduction with name, title, and call-to-action buttons
2. **About**: Personal overview with statistics (LeetCode, Codeforces, CGPA)
3. **Skills**: Technical skills categorized by type (Programming, Frameworks, Database, etc.)
4. **Projects**: Showcase of 5 major projects with descriptions and tech stacks
5. **Experience & Education**: Timeline of professional experience and academic background
6. **Achievements**: Certifications and accomplishments
7. **Contact**: Contact information and social media links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties and animations
- **JavaScript**: Interactive functionality and scroll effects
- **Font Awesome**: Icons for better visual appeal

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/             # Images and other assets
├── cv/
│   └── CV2.pdf         # Resume/CV
└── README.md           # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) for customization

### Installation & Setup

1. **Clone or Download** this repository to your local machine

2. **Open the portfolio**:
   - Simply open `index.html` in your web browser
   - Or use a local development server for better experience

3. **Using Live Server (Recommended)**:
   - If using VS Code, install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"
   - The portfolio will open at `http://localhost:5500` or similar

## Customization Guide

### 1. Personal Information

Edit `index.html` to update your personal details:

- **Name and Title**: Update in the hero section (lines 33-35)
- **Contact Information**: Update email, phone, and location in the contact section
- **Social Links**: Update GitHub, LinkedIn, Codeforces, and other links

### 2. About Section

Update the about section text and statistics (lines 50-75):
- Personal description
- Problem-solving statistics
- CGPA or other metrics

### 3. Skills

Add or remove skills in the skills section (lines 80-120):
- Programming languages
- Frameworks and tools
- Databases and cloud services
- Version control systems

### 4. Projects

Customize project details (lines 125-230):
- Project titles and descriptions
- Technologies used
- Features and achievements
- Add or remove projects as needed

### 5. Experience & Education

Update timeline items (lines 235-275):
- Work experience details
- Educational background
- Dates and descriptions

### 6. Color Scheme

Edit `css/style.css` to change colors (lines 1-15):

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #3b82f6;       /* Light blue accent */
    /* ... other colors ... */
}
```

### 7. Adding Profile Image

1. Add your image to the `assets/` folder (e.g., `profile.jpg`)
2. In `index.html`, add an image element in the hero or about section:

```html
<img src="assets/profile.jpg" alt="Naieem Islam" class="profile-image">
```

3. Add styling in `css/style.css`:

```css
.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-lg);
}
```

## Deployment

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as source
5. Your site will be available at `https://yourusername.github.io/repository-name/`

### Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Optimize images before adding them (use tools like TinyPNG)
- Keep image file sizes under 500KB
- Use WebP format for better compression
- Minimize CSS and JavaScript for production

## Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## Features to Add (Future Enhancements)

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Contact form with backend integration
- [ ] Project filtering by technology
- [ ] Testimonials section
- [ ] Download resume button
- [ ] Multiple language support

## License

This project is open source and available for personal use. Feel free to customize it for your own portfolio.

## Contact

**Naieem Islam**
- Email: naieemanishaz@gmail.com
- Phone: +880 1791 545638
- Location: Mirpur, Dhaka, Bangladesh
- GitHub: [Naieem-55](https://github.com/Naieem-55)
- LinkedIn: [Naieem](https://linkedin.com/in/Naieem)
- Codeforces: [Naieem10412](https://codeforces.com/profile/Naieem10412)

---

**Built with passion by Naieem Islam** | Last Updated: October 2025
