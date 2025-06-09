# TMM Photography - SEO Optimization Design Document

## Executive Summary
TMM Photography is a sports and nature photography business based in Naperville, Illinois, run by 17-year-old Timmy Miller. The website currently has basic SEO foundations but lacks comprehensive optimization for search engines. This document outlines atomic steps to transform it into a highly SEO-optimized site.

## Current SEO Analysis

### ✅ Strengths
- Basic meta descriptions present on most pages
- Responsive design with proper viewport meta tags
- Clean URL structure
- Fast-loading HTML pages
- Local business focus (Naperville, IL)
- Rich visual content (photography portfolio)
- Contact information clearly displayed

### ❌ Critical Issues
- No XML sitemap
- No robots.txt file
- Missing structured data/schema markup
- Inconsistent title tag optimization
- No Open Graph tags for social sharing
- Missing canonical URLs
- No Google Analytics/Search Console integration
- Alt text missing on many images
- No internal linking strategy
- Missing local SEO optimization

## SEO Optimization Action Plan

### Phase 1: Technical SEO Foundation

#### Step 1.1: Create XML Sitemap
**File:** `sitemap.xml`
**Priority:** Critical
**Implementation:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tmmphotos.com/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tmmphotos.com/portfolio</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tmmphotos.com/about</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tmmphotos.com/contact</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tmmphotos.com/gallery</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

#### Step 1.2: Create Robots.txt
**File:** `robots.txt`
**Priority:** Critical
**Implementation:**
```
User-agent: *
Allow: /

# Block access to admin/development files
Disallow: /css/
Disallow: /js/
Disallow: /vids/
Disallow: /New folder/

# Allow important files for SEO
Allow: /img/

# Sitemap location
Sitemap: https://tmmphotos.com/sitemap.xml
```

#### Step 1.3: Add Canonical URLs
**Files:** All HTML files
**Priority:** High
**Implementation:** Add to `<head>` section of each page:
```html
<!-- index.html -->
<link rel="canonical" href="https://tmmphotos.com/" />

<!-- about.html -->
<link rel="canonical" href="https://tmmphotos.com/about" />

<!-- portfolio.html -->
<link rel="canonical" href="https://tmmphotos.com/portfolio" />

<!-- contact.html -->
<link rel="canonical" href="https://tmmphotos.com/contact" />

<!-- gallery.html -->
<link rel="canonical" href="https://tmmphotos.com/gallery" />
```

### Phase 2: On-Page SEO Optimization

#### Step 2.1: Optimize Title Tags
**Files:** All HTML files
**Priority:** Critical
**Current vs. Optimized:**

```html
<!-- index.html - CURRENT -->
<title>TMM Photography | Naperville Photographer</title>

<!-- index.html - OPTIMIZED -->
<title>Sports Photography Naperville IL | TMM Photography | Timmy Miller</title>

<!-- about.html - CURRENT -->
<title>TMM Photography | About</title>

<!-- about.html - OPTIMIZED -->
<title>About Timmy Miller | Professional Sports Photographer | Naperville Illinois</title>

<!-- portfolio.html - CURRENT -->
<title>TMM Photography | Portfolio</title>

<!-- portfolio.html - OPTIMIZED -->
<title>Sports Photography Portfolio | Football, Basketball, Volleyball | TMM Photography</title>

<!-- contact.html - CURRENT -->
<title>TMM Photography | Book NOW</title>

<!-- contact.html - OPTIMIZED -->
<title>Book Sports Photographer Naperville IL | TMM Photography Pricing | Contact</title>
```

#### Step 2.2: Enhance Meta Descriptions
**Files:** All HTML files
**Priority:** High
**Implementation:**

```html
<!-- index.html -->
<meta name="description" content="Professional sports photography in Naperville, Illinois. Timmy Miller specializes in football, basketball, volleyball, and nature photography. Affordable rates starting at $25. Book your session today!">

<!-- about.html -->
<meta name="description" content="Meet Timmy Miller, 17-year-old professional sports photographer from Naperville, IL. 5+ years experience capturing athletic moments with Canon R5 Mark 2. Learn about TMM Photography's story and equipment.">

<!-- portfolio.html -->
<meta name="description" content="View TMM Photography's sports portfolio featuring football, basketball, volleyball, soccer, lacrosse, and nature photography. High-quality action shots and athletic moments captured in Naperville, Illinois.">

<!-- contact.html -->
<meta name="description" content="Book TMM Photography for sports events in Naperville, IL. One-hour sessions $25, two-hour sessions $45. Contact Timmy Miller for team bookings, events, and custom photography packages.">
```

#### Step 2.3: Add Meta Keywords
**Files:** All HTML files
**Priority:** Medium
**Implementation:**

```html
<!-- index.html -->
<meta name="keywords" content="sports photography, Naperville photographer, Naperville sports photos, football photography, basketball photography, volleyball photography, athletic photography, lacrosse photography,sports portraits, affordable photographer, teen photographer, high school photographer">

<!-- about.html -->
<meta name="keywords" content="Timmy Miller photographer, TMM Photography, Naperville sports photographer, young photographer, high school photographer naperville, Canon R5 photographer, sports photography equipment, naperville photographer bio">

<!-- portfolio.html -->
<meta name="keywords" content="sports photography portfolio, football photos, basketball photos, volleyball photos, soccer photography, lacrosse photography, nature photography, Naperville athletic photos">

<!-- contact.html -->
<meta name="keywords" content="book sports photographer, photography pricing Naperville, sports photography rates, team photography booking, event photography Illinois, photography contact">
```

### Phase 3: Structured Data Implementation

#### Step 3.1: Add Business Schema Markup
**File:** `index.html`
**Priority:** High
**Implementation:** Add before closing `</head>` tag:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "TMM Photography",
  "alternateName": "Timmy Miller Photography",
  "description": "Professional sports and nature photography services in Naperville, Illinois",
  "url": "https://tmmphotos.com",
  "logo": "https://tmmphotos.com/img/other/TMM1.png",
  "image": "https://tmmphotos.com/img/other/TMM1.png",
  "telephone": "Contact via email",
  "email": "millertimmy626@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Naperville",
    "addressRegion": "Illinois",
    "addressCountry": "United States"
  },
  "founder": {
    "@type": "Person",
    "name": "Timmy Miller",
    "age": "17",
    "jobTitle": "Photographer"
  },
  "serviceType": "Photography Services",
  "areaServed": {
    "@type": "State",
    "name": "Illinois"
  },
  "priceRange": "$25-$45",
  "paymentAccepted": ["Cash", "Zelle"],
  "sameAs": [
    "https://www.instagram.com/tmm.photography1/",
    "https://www.tiktok.com/@tmm.photography1"
  ]
}
</script>
```

#### Step 3.2: Add Person Schema for About Page
**File:** `about.html`
**Priority:** High
**Implementation:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Timmy Miller",
  "alternateName": "TMM Photography",
  "description": "17-year-old professional photographer specializing in sports and nature photography in Naperville, Illinois",
  "image": "https://tmmphotos.com/img/other/IMG_7878.JPG",
  "jobTitle": "Photographer",
  "worksFor": {
    "@type": "ProfessionalService",
    "name": "TMM Photography"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Naperville",
    "addressRegion": "Illinois",
    "addressCountry": "United States"
  },
  "email": "millertimmy626@gmail.com",
  "birthPlace": "Pennsylvania",
  "alumniOf": "Metea Valley High School",
  "knowsAbout": ["Sports Photography", "Nature Photography", "Athletic Photography", "Canon Photography"],
  "owns": [
    "Canon EOS R5 Mark 2",
    "Canon RF 100-500mm f/4.5-7.1 L IS USM Lens",
    "Canon RF 70-200mm f/2.8 L IS USM Lens",
    "Canon EF 100mm f/2.8L Macro IS USM"
  ],
  "sameAs": [
    "https://www.instagram.com/tmm.photography1/",
    "https://www.tiktok.com/@tmm.photography1"
  ]
}
</script>
```

#### Step 3.3: Add Service Schema for Contact Page
**File:** `contact.html`
**Priority:** High
**Implementation:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Photography Services",
  "provider": {
    "@type": "ProfessionalService",
    "name": "TMM Photography",
    "founder": "Timmy Miller"
  },
  "areaServed": {
    "@type": "State",
    "name": "Illinois"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Photography Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "One Hour Sports Shoot",
          "description": "Perfect for individual player sessions and capturing your athletic moments"
        },
        "price": "25",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Two Hour Sports Shoot",
          "description": "Extended session for comprehensive coverage and multiple angles"
        },
        "price": "45",
        "priceCurrency": "USD"
      }
    ]
  }
}
</script>
```

### Phase 4: Social Media & Open Graph Optimization

#### Step 4.1: Add Open Graph Tags
**Files:** All HTML files
**Priority:** High
**Implementation:**

```html
<!-- index.html -->
<meta property="og:title" content="Sports Photography Naperville IL | TMM Photography | Timmy Miller">
<meta property="og:description" content="Professional sports photography in Naperville, Illinois. Specializing in football, basketball, volleyball, and nature photography. Affordable rates starting at $25.">
<meta property="og:image" content="https://tmmphotos.com/img/other/TMM1.png">
<meta property="og:url" content="https://tmmphotos.com/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="TMM Photography">
<meta property="og:locale" content="en_US">

<!-- Twitter Card tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sports Photography Naperville IL | TMM Photography">
<meta name="twitter:description" content="Professional sports photography in Naperville, Illinois. Affordable rates starting at $25.">
<meta name="twitter:image" content="https://tmmphotos.com/img/other/TMM1.png">
```

### Phase 5: Image SEO Optimization

#### Step 5.1: Add Comprehensive Alt Text
**Files:** All HTML files
**Priority:** Critical
**Current Issues:** Many images lack descriptive alt text
**Implementation Examples:**

```html
<!-- BEFORE -->
<img src="img/volleyball/IMG_6002.jpg" alt="Volleyball Portrait">

<!-- AFTER -->
<img src="img/volleyball/IMG_6002.jpg" alt="Female volleyball player spiking ball during high school game - TMM Photography Naperville">

<!-- BEFORE -->
<img src="img/football/cool1.JPEG" alt="Football Portrait">

<!-- AFTER -->
<img src="img/football/cool1.JPEG" alt="Football player in action pose during outdoor game - Sports photography by Timmy Miller">

<!-- BEFORE -->
<img src="img/nature/IMG_7709.JPEG" alt="Nature Portrait">

<!-- AFTER -->
<img src="img/nature/IMG_7709.JPEG" alt="Scenic nature landscape photography - Professional nature photos by TMM Photography Illinois">
```

#### Step 5.2: Implement Image Schema Markup
**File:** `portfolio.html`
**Priority:** Medium
**Implementation:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "TMM Photography Portfolio",
  "description": "Sports and nature photography portfolio by Timmy Miller",
  "creator": {
    "@type": "Person",
    "name": "Timmy Miller"
  },
  "image": [
         {
       "@type": "ImageObject",
       "contentUrl": "https://tmmphotos.com/img/volleyball/IMG_6002.jpg",
       "description": "Volleyball action photography",
       "creator": "Timmy Miller"
     },
     {
       "@type": "ImageObject",
       "contentUrl": "https://tmmphotos.com/img/football/cool1.JPEG",
       "description": "Football sports photography",
       "creator": "Timmy Miller"
     }
  ]
}
</script>
```

### Phase 6: Local SEO Enhancement

#### Step 6.1: Add Local Business Markup
**File:** `index.html`
**Priority:** High
**Implementation:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TMM Photography",
  "image": "https://tmmphotos.com/img/other/TMM1.png",
  "description": "Professional sports photography services in Naperville, Illinois",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Naperville",
    "addressRegion": "IL",
    "postalCode": "60540",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.7508",
    "longitude": "-88.1535"
  },
  "url": "https://tmmphotos.com",
  "telephone": "Contact via email",
  "email": "millertimmy626@gmail.com",
  "priceRange": "$25-$45",
  "paymentAccepted": ["Cash", "Zelle"],
  "currenciesAccepted": "USD",
  "openingHours": "Mo-Su 08:00-20:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "41.7508",
      "longitude": "-88.1535"
    },
    "geoRadius": "50"
  }
}
</script>
```

#### Step 6.2: Enhance Location-Based Content
**Files:** All HTML files
**Priority:** Medium
**Implementation:** Add location-specific content throughout:

```html
<!-- Add to footer or header -->
<div class="location-info">
  <span>Serving Naperville, Aurora, Wheaton, and surrounding Illinois communities</span>
</div>

<!-- Update contact section -->
<div class="service-area">
  <h3>Service Areas</h3>
  <p>Naperville, Aurora, Wheaton, Bolingbrook, Plainfield, and surrounding DuPage County areas</p>
</div>
```

### Phase 7: Content Strategy & Internal Linking

#### Step 7.1: Create Blog Section
**File:** `blog.html` (New)
**Priority:** Medium
**Purpose:** Drive organic traffic with sports photography tips
**Content Ideas:**
- "Best Camera Settings for Indoor Sports Photography"
- "How to Capture Perfect Action Shots in Football"
- "Sports Photography Tips for Parents"
- "Why Professional Sports Photos Matter for Athletes"

#### Step 7.2: Implement Internal Linking Strategy
**Files:** All HTML files
**Priority:** High
**Implementation Examples:**

```html
<!-- In about.html, link to portfolio -->
<p>Whether you're looking for dynamic <a href="/portfolio#sports">sports photography</a> or vivid imagery that tells your story...</p>

<!-- In portfolio.html, link to contact -->
<p>Ready to book your session? <a href="/contact">Contact TMM Photography</a> for competitive rates starting at $25.</p>

<!-- In index.html, link to about -->
<p>Learn more <a href="/about">about Timmy Miller</a> and his 5+ years of photography experience.</p>
```

### Phase 8: Performance & Analytics

#### Step 8.1: Add Google Analytics
**Files:** All HTML files
**Priority:** High
**Implementation:** Add before closing `</head>` tag:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

#### Step 8.2: Add Google Search Console Verification
**File:** `index.html`
**Priority:** High
**Implementation:**

```html
<meta name="google-site-verification" content="VERIFICATION_CODE" />
```

#### Step 8.3: Implement Schema Markup Testing
**Priority:** High
**Action Items:**
1. Test all schema markup using Google's Rich Results Test
2. Validate sitemap.xml using Google Search Console
3. Check mobile-friendliness using Google's Mobile-Friendly Test

### Phase 9: Advanced SEO Features

#### Step 9.1: Add FAQ Schema to About Page
**File:** `about.html`
**Priority:** Medium
**Implementation:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zelle or Cash only"
      }
    },
    {
      "@type": "Question",
      "name": "How long until I receive my final images?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Photos are usually processed and sent within 24 hours after shoot."
      }
    },
    {
      "@type": "Question",
      "name": "Do you watermark the images?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I never watermark any images and always provide clean files."
      }
    }
  ]
}
</script>
```

#### Step 9.2: Add Breadcrumb Schema
**Files:** All non-index HTML files
**Priority:** Low
**Implementation Example for about.html:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
             "name": "Home",
       "item": "https://tmmphotos.com/"
     },
     {
       "@type": "ListItem",
       "position": 2,
       "name": "About",
       "item": "https://tmmphotos.com/about"
     }
  ]
}
</script>
```

### Phase 10: Monitoring & Maintenance

#### Step 10.1: SEO Monitoring Setup
**Tools to Implement:**
1. Google Search Console for search performance
2. Google Analytics for traffic analysis
3. Schema markup testing tools
4. Page speed monitoring tools

#### Step 10.2: Regular Content Updates
**Schedule:** Monthly
**Actions:**
- Update portfolio with new images
- Add new blog posts with photography tips
- Update pricing and service information
- Refresh meta descriptions based on performance

## Priority Implementation Order

### Week 1 (Critical)
1. Create sitemap.xml
2. Create robots.txt
3. Optimize all title tags
4. Add canonical URLs
5. Add comprehensive alt text to all images

### Week 2 (High Priority)
1. Implement business schema markup
2. Add Open Graph tags
3. Enhance meta descriptions
4. Add Google Analytics
5. Submit to Google Search Console

### Week 3 (Medium Priority)
1. Add person schema for about page
2. Implement FAQ schema
3. Add local business markup
4. Create internal linking strategy
5. Add meta keywords

### Week 4 (Low Priority)
1. Add breadcrumb schema
2. Create blog section framework
3. Implement image schema markup
4. Add service area content
5. Set up monitoring tools

## Expected Results

### Short-term (1-3 months)
- 30-50% increase in organic search visibility
- Improved local search rankings for "photographer Naperville"
- Better click-through rates from search results
- Enhanced social media sharing appearance

### Long-term (3-6 months)
- Top 3 rankings for "sports photographer Naperville IL"
- Increased bookings from organic search traffic
- Higher domain authority and local SEO rankings
- Better user engagement metrics

## Success Metrics

### Key Performance Indicators (KPIs)
1. **Organic Search Traffic:** Target 200% increase in 6 months
2. **Local Search Rankings:** Top 3 for primary keywords
3. **Booking Inquiries:** 50% increase from organic search
4. **Page Load Speed:** Under 3 seconds on all pages
5. **Mobile Usability:** 100% mobile-friendly score

### Tracking Tools
- Google Search Console for search performance
- Google Analytics for traffic and conversions
- Local SEO tracking tools for location-based rankings
- Rich results testing for schema markup validation

## Implementation Notes

### Technical Requirements
- Access to website hosting/FTP
- Google Analytics account
- Google Search Console account
- Schema markup testing tools
- Image optimization tools
- Server configuration access for URL redirects

### URL Structure & Redirects
**Important:** The website will use clean URLs without .html extensions:
- `tmmphotos.com/about` instead of `tmmphotos.com/about.html`
- `tmmphotos.com/portfolio` instead of `tmmphotos.com/portfolio.html`
- `tmmphotos.com/contact` instead of `tmmphotos.com/contact.html`

**Server Configuration Required:**
1. **Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.html [NC,L]

# Redirect .html to clean URLs
RewriteCond %{THE_REQUEST} /([^.]+)\.html [NC]
RewriteRule ^ /%1? [NC,L,R=301]
```

2. **Nginx:**
```nginx
location / {
    try_files $uri $uri.html $uri/ =404;
}

# Redirect .html to clean URLs
location ~ \.html$ {
    return 301 $scheme://$host$uri;
}
```

**Benefits of Clean URLs:**
- Better user experience and memorability
- Improved SEO rankings (search engines prefer clean URLs)
- More professional appearance
- Easier social sharing

### Content Strategy
- Focus on local Naperville/Illinois market
- Emphasize sports photography specialization
- Highlight competitive pricing and young photographer angle
- Showcase equipment and experience despite age

This comprehensive SEO strategy will transform TMM Photography from a basic website into a search engine optimized powerhouse, driving more organic traffic and bookings for Timmy Miller's photography business.
