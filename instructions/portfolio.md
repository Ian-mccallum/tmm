# Atomic Steps for Portfolio and Gallery Page Implementation

## Overall Layout Principle

1.  **Implement a layout across both the portfolio and gallery pages where the site header is positioned transparently over the top full-width background image or section.**
    - The header should remain fixed at the top of the viewport as the user scrolls, using the same styling and functionality as the home page header.
    - The content immediately below the header (the main background image/section) should fill the screen area below the fixed header.

## Portfolio Page Implementation

2.  **Create or modify the portfolio page to include the fixed header positioned over the top section as described in the overall layout principle.**
3.  **Implement an introductory section below the header with a full-width background image, centered "PORTFOLIO" title, a subtitle, and optional intro text.**
4.  **Below the intro section, create individual full-width sections for each portfolio category (Indoor/Outdoor Football, Volleyball, Waterpolo, Soccer, Nature, Events).**
    - Each category section should have a relevant background image.
    - Overlay the category title (e.g., "Waterpolo") and a "View Gallery" button styled consistently with the site theme.
    - Alternate the text/button alignment (left/right) for visual variety between sections.
    - Apply a subtle dark gradient overlay to the background images for readability of overlaid text.
5.  **Ensure all elements and sections on the portfolio page are fully responsive across desktop, tablet, and mobile breakpoints.**
6.  **Link each "View Gallery" button to its corresponding category gallery page (use placeholder links if necessary).**

## Gallery Page Implementation


8.  **Apply the fixed header positioned over the top section principle to each gallery page template.**
9

13. **Implement a feature such that clicking on any image within a gallery grid opens a full-screen lightbox or modal.**
    - The lightbox should display the clicked image prominently at a larger size.
    - Include a clearly visible "X" button to close the lightbox and return to the gallery grid view.
    - Add left and right arrow buttons inside the lightbox to allow the user to navigate sequentially through all images in the current gallery without closing the lightbox.
14. **Ensure the lightbox feature is responsive and provides a smooth user experience on all devices.**
15. **Add appropriate ARIA attributes and keyboard navigation support for the lightbox for accessibility.**

## Final Review and Accessibility

16. **Add descriptive alt text to all significant images used for backgrounds, in the galleries, and within the lightbox.**
17. **Test the responsiveness and visual consistency of both portfolio and gallery pages across various devices and browsers.**
18. **Verify that all navigation links and interactive elements (buttons, gallery images, lightbox controls) are functional and accessible via keyboard.**
19. **Check for sufficient color contrast for all text and overlays.**
