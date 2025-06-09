# TMM Photography - Professional Sports & Nature Photography

A modern, responsive photography portfolio website for Timmy Miller (TMM Photography), a 17-year-old professional photographer from Naperville, Illinois, specializing in sports and nature photography.

## 🎯 About

TMM Photography captures the intensity, emotion, and beauty of athletic moments and natural landscapes. Founded by Timmy Miller, a high school senior at Metea Valley High School, this photography business serves the Naperville, Aurora, Wheaton, and greater DuPage County area with affordable, high-quality photography services.

## ✨ Features

### 🖼️ Dynamic Gallery System
- **Multi-sport portfolios**: Football, Basketball, Volleyball, Soccer, Lacrosse, Water Polo, and Nature
- **Interactive lightbox gallery** with navigation controls
- **Category-based image organization** with dynamic loading
- **Responsive image grid** with lazy loading
- **SEO-optimized** image alt tags and metadata

### 🎨 Modern User Experience
- **Responsive design** optimized for all devices (mobile, tablet, desktop)
- **Smooth animations** with fade-in effects and CSS transitions
- **Typewriter effect** on homepage with rotating slogans
- **Mobile-first navigation** with hamburger menu and sidebar
- **Clean, minimalist design** with professional typography

### 📧 Booking & Contact System
- **Integrated booking system** using Appointlet for scheduling
- **Contact form** with FormSubmit integration
- **Spam protection** with honeypot and captcha
- **Pricing tiers**: $25 (1-hour), $45 (2-hour), Custom team packages
- **Thank you page** with confirmation messaging

### 🔍 SEO & Performance
- **Schema.org structured data** for local business and professional services
- **Open Graph and Twitter Card** meta tags for social sharing
- **XML sitemap** and robots.txt for search engine optimization
- **Canonical URLs** and proper meta descriptions
- **Google Fonts** integration (Outfit & Inter)
- **Font Awesome icons** for professional iconography

### 🎯 Advanced Features
- **FAQ section** with collapsible accordion functionality
- **Professional equipment showcase** (Canon R5 Mark 2, RF lenses)
- **Social media integration** (Instagram, TikTok)
- **Local business optimization** with geographic targeting
- **Easter egg page** (hidden feature)
- **Video background support**

## 🏗️ Technical Architecture

### File Structure
```
tmm/
├── index.html              # Homepage with hero section and typewriter
├── portfolio.html          # Portfolio categories overview
├── gallery.html           # Dynamic gallery viewer
├── about.html             # About page with FAQ section
├── contact.html           # Booking and contact page
├── thank-you.html         # Form submission confirmation
├── freaky.html           # Easter egg page (hidden)
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search engine directives
├── css/
│   ├── style.css         # Main stylesheet (3,595 lines)
│   └── faq.css          # FAQ-specific styles
├── js/
│   ├── main.js          # Core functionality and typewriter
│   ├── gallery.js       # Dynamic gallery system (448 lines)
│   ├── header.js        # Navigation functionality
│   └── animations.js    # Animation utilities
├── img/
│   ├── football/        # Football photography collection
│   ├── basketball/      # Basketball photography collection
│   ├── volleyball/      # Volleyball photography collection
│   ├── soccer/         # Soccer photography collection
│   ├── lax/           # Lacrosse photography collection
│   ├── water-polo/    # Water polo photography collection
│   ├── nature/        # Nature photography collection
│   └── other/         # Brand assets and portraits
└── vids/              # Video assets for special pages
```

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Typography**: Google Fonts (Outfit, Inter)
- **Icons**: Font Awesome 6.0
- **Forms**: FormSubmit.co integration
- **Booking**: Appointlet integration
- **SEO**: Schema.org structured data, Open Graph

## 🎨 Design System

### Color Scheme
- **Primary**: Professional dark themes with white text
- **Accent**: Dynamic color transitions in animations
- **Background**: Dark overlays with image backgrounds

### Typography
- **Headers**: Outfit font family (400, 700 weights)
- **Body**: Inter font family (300, 700 weights)
- **Responsive scaling** across all device sizes

### Photography Categories
1. **Water Polo** - Aquatic sports action and competition
2. **Football** - High school football action and portraits
3. **Volleyball** - Indoor volleyball dynamics and team spirit
4. **Soccer** - Outdoor soccer matches and player moments
5. **Lacrosse** - Fast-paced lacrosse action shots
6. **Basketball** - Court action and athletic moments
7. **Nature** - Landscape and outdoor photography

## 📱 Responsive Design

- **Mobile First**: Optimized for smartphones with touch navigation
- **Tablet Support**: Adjusted layouts for tablet viewing
- **Desktop**: Full-featured experience with hover effects
- **Cross-browser**: Compatible with Chrome, Firefox, Safari, Edge

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed for faster page speeds
- **Optimized Assets**: Compressed images and efficient CSS
- **Minimal JavaScript**: Focused functionality without bloat
- **SEO Optimized**: Fast loading times and search engine friendly

## 🎯 Business Features

### Service Offerings
- **Individual Sports Sessions**: 1-hour ($25) and 2-hour ($45) options
- **Team Photography**: Custom packages for sports teams
- **Event Photography**: Dances, balls, and parties
- **Nature Photography**: Landscape and outdoor sessions

### Service Area
- **Primary**: Naperville, Illinois
- **Extended**: Aurora, Wheaton, Bolingbrook, DuPage County
- **Service Radius**: 50-mile radius from Naperville

### Equipment
- Canon EOS R5 Mark 2
- Canon RF 100-500mm f/4.5-7.1 L IS USM Lens
- Canon RF 70-200mm f/2.8 L IS USM Lens
- Canon EF 100mm f/2.8L Macro IS USM

## 🔧 Setup & Deployment

### Local Development
1. Clone the repository
2. Serve files through a local web server (due to CORS restrictions)
3. Update image paths in `js/gallery.js` for new photography
4. Modify contact information in HTML files as needed

### Production Deployment
- **Domain**: tmmphotos.com
- **Hosting**: Standard web hosting with HTML/CSS/JS support
- **CDN**: Font Awesome and Google Fonts via CDN
- **Forms**: FormSubmit.co handles form submissions
- **Booking**: Appointlet integration for scheduling

## 📊 Analytics & Tracking

- **Schema.org**: Local business and professional service markup
- **Social Media**: Instagram and TikTok integration
- **Contact**: millertimmy626@gmail.com
- **Payment**: Zelle and Cash accepted

## 🎨 Customization

### Adding New Photos
1. Add images to appropriate `img/[category]/` directory
2. Update the gallery configuration in `js/gallery.js`
3. Include proper alt text for accessibility and SEO

### Modifying Styles
- Main styles in `css/style.css`
- FAQ-specific styles in `css/faq.css`
- Responsive breakpoints already configured

### Content Updates
- Business information in HTML files
- Equipment list in `about.html`
- Pricing in `contact.html`
- Social media links in footer sections

## 🔐 Security Features

- **Spam Protection**: Honeypot fields and captcha
- **Form Filtering**: Automatic spam word filtering
- **Safe Redirects**: Controlled redirect after form submission
- **Input Validation**: Required fields and email validation

## 📈 SEO Optimization

- **Local SEO**: Naperville, Illinois geographic targeting
- **Structured Data**: Professional service and local business markup
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Image SEO**: Descriptive alt tags for all photography
- **Sitemap**: XML sitemap for search engine indexing

## 🎭 Easter Eggs

- **Hidden page**: `freaky.html` accessible via secret button on about page
- **Video background**: Special effects and animations
- **Rainbow text**: Animated color-changing effects

## 📞 Contact & Support

- **Email**: millertimmy626@gmail.com
- **Location**: Naperville, Illinois
- **Social**: @tmm.photography1 (Instagram, TikTok)
- **Website**: tmmphotos.com

## 📄 License & Credits

- **Website Development**: Powered by Ianinnovates
- **Photography**: © 2025 TMM Photography - All rights reserved
- **Fonts**: Google Fonts (Outfit, Inter)
- **Icons**: Font Awesome
- **Serving**: Naperville, Aurora, Wheaton & DuPage County 