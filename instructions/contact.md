# Contact Page Design Document

## 1. Design Objective
Create a professional "Contact" page that allows visitors to reach out to the photographer and book a shoot. The page should follow the visual theme of the other pages, including the fixed, translucent header and standard footer. It must be mobile responsive and prioritize security to prevent automated form submissions.

## 2. Layout & Structure

### Header
-   Standard fixed header, translucent over the top section, matching the style on other pages.

### Contact Form Section
-   A prominent section featuring a contact form.
-   Form fields should include:
    -   Name (required)
    -   Email (required, with email validation)
    -   Subject (required)
    -   Message (required, textarea)
-   Include a clear "Submit" button.
-   Apply consistent styling with the site's theme.

### Book a Shoot Section
-   A section dedicated to booking a photography session.
-   Include a form or button that directs users to a booking process or contact form.
-   Clearly state the purpose of this section (e.g., "Book Your Shoot").
-   Apply consistent styling with the site's theme.

### Footer
-   Include the standard site footer used on other pages.

## 3. Visual Style
-   Maintain consistent typography, color scheme, and spacing as used on the index, about, and portfolio pages.
-   Ensure clear visual separation between sections.
-   Use appropriate form styling (e.g., input fields, buttons) that matches the site's aesthetic.

## 4. Responsiveness
-   The page layout and elements must adapt smoothly to different screen sizes (desktop, tablet, mobile).
-   Ensure forms and buttons are easily usable on mobile devices.

## 5. Security
-   Implement CAPTCHA or reCAPTCHA to prevent automated form submissions.
-   Ensure all form submissions are validated on both the client and server sides.
-   Use HTTPS for secure data transmission.

## 6. Accessibility
-   Ensure all form elements have appropriate labels and ARIA attributes.
-   Maintain sufficient color contrast for text and form elements.
-   Ensure keyboard navigation is functional for all interactive elements.

---

## Atomic Steps for AI Coder

1.  **Create the basic HTML file for the Contact page** (`contact.html`).
2.  **Implement the fixed, translucent header** at the top of `contact.html`, following the process established for the other pages, ensuring it overlays the content below and matches the home page header's style.
3.  **Create the Contact Form section** below the header.
    -   Add a `<form>` element with appropriate fields (name, email, subject, message).
    -   Include a "Submit" button.
    -   Apply consistent styling with the site's theme.
4.  **Create the Book a Shoot section** below the contact form.
    -   Add a heading (e.g., "Book Your Shoot").
    -   Include a form or button for booking.
    -   Apply consistent styling with the site's theme.
5.  **Include the standard site footer HTML** at the bottom of `contact.html`.
6.  **Add or update CSS rules** in the main stylesheet (`css/style.css` or similar) to style the new sections, ensuring consistency with the existing theme (typography, colors, padding, margins).
7.  **Implement security measures**:
    -   Add CAPTCHA or reCAPTCHA to the contact form.
    -   Ensure form validation on both client and server sides.
    -   Use HTTPS for secure data transmission.
8.  **Test responsiveness** of the entire `contact.html` page on different devices/screen sizes.
9.  **Verify visual consistency** with the home, about, and portfolio pages.
10. **Test accessibility**, including keyboard navigation and color contrast.
