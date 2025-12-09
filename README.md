# Naieem Islam - Professional Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Software Engineer.

**Live Demo**: [naieem-55.github.io/portfolio](https://naieem-55.github.io/portfolio/)

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean design with smooth animations
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: Follows WCAG guidelines

## Sections

1. **Hero**: Introduction with name, title, and call-to-action
2. **About**: Overview with statistics (LeetCode, Codeforces, CGPA)
3. **Skills**: Technical skills by category
4. **Projects**: Major projects with descriptions and tech stacks
5. **Experience & Education**: Timeline of professional journey
6. **Achievements**: Certifications and accomplishments
7. **Contact**: Contact information and social links

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Naieem-55/portfolio.git
cd portfolio

# Open in browser (Option 1: Direct)
open index.html  # macOS
start index.html # Windows

# Open in browser (Option 2: Local server)
python -m http.server 5500
# Visit http://localhost:5500
```

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
└── README.md
```

## Customization

### Personal Information
Edit `index.html` to update:
- Name and title (hero section)
- Contact information
- Social links (GitHub, LinkedIn, LeetCode)

### Color Scheme
Edit `css/style.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #3b82f6;       /* Light blue accent */
}
```

### Adding Profile Image
1. Add image to `assets/` folder
2. Add to HTML:
```html
<img src="assets/profile.jpg" alt="Naieem Islam" class="profile-image">
```

## Deployment

### GitHub Pages (Recommended)
1. Push code to GitHub
2. Go to Settings > Pages
3. Select main branch as source
4. Site available at `https://username.github.io/portfolio/`

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop project folder
3. Site live instantly

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Deploy with one click

## Performance

### Lighthouse Scores (Target)

| Metric | Target | Status |
|--------|--------|--------|
| Performance | 90+ | Optimize images |
| Accessibility | 90+ | Add ARIA labels |
| Best Practices | 90+ | Use HTTPS |
| SEO | 90+ | Add meta tags |

### Performance Tips
- Optimize images with [TinyPNG](https://tinypng.com)
- Keep images under 500KB
- Use WebP format for better compression
- Minify CSS/JS for production

### Run Lighthouse Audit
```bash
# Using Chrome DevTools
# 1. Open site in Chrome
# 2. Right-click > Inspect > Lighthouse tab
# 3. Click "Analyze page load"
```

## Accessibility Checklist

- [x] Semantic HTML structure
- [x] Proper heading hierarchy (h1 > h2 > h3)
- [x] Alt text for images
- [x] Sufficient color contrast
- [x] Keyboard navigation support
- [ ] ARIA labels for interactive elements
- [ ] Skip navigation link
- [ ] Focus indicators visible

### WCAG Guidelines
- **Level A**: Basic accessibility
- **Level AA**: Target compliance level
- **Level AAA**: Enhanced accessibility

Test with:
- [WAVE Web Accessibility Tool](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Keyboard-only navigation

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | Fully supported |
| Firefox | Latest | Fully supported |
| Safari | Latest | Fully supported |
| Edge | Latest | Fully supported |
| Mobile Chrome | Latest | Fully supported |
| Mobile Safari | Latest | Fully supported |

## Responsive Breakpoints

| Device | Width | Notes |
|--------|-------|-------|
| Desktop | 1200px+ | Full layout |
| Tablet | 768-1199px | Adjusted grid |
| Mobile | 480-767px | Single column |
| Small Mobile | <480px | Compact layout |

## Contributing

Contributions are welcome! If you'd like to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test across browsers and devices
5. Commit (`git commit -m 'Add improvement'`)
6. Push (`git push origin feature/improvement`)
7. Open a Pull Request

### Development Guidelines
- Keep HTML semantic
- Use CSS custom properties for theming
- Ensure responsive design
- Test accessibility

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Contact form with backend
- [ ] Project filtering by technology
- [ ] Testimonials section
- [ ] Multi-language support

## License

This project is open source and available for personal use. Feel free to customize for your own portfolio.

## Contact

**Naieem Islam**
- Email: naieemislam27@gmail.com
- Location: Mirpur, Dhaka, Bangladesh
- GitHub: [Naieem-55](https://github.com/Naieem-55)
- LinkedIn: [Naieem Islam](https://www.linkedin.com/in/naieem-islam-0025061b2/)
- LeetCode: [Naieem_55](https://leetcode.com/u/Naieem_55/)
