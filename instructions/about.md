# About Page Design Document

## 1. Design Objective
Create a professional "About" page that introduces the photographer, highlights their background and passion, details their equipment, and promotes their Instagram presence. The page should follow the visual theme of the portfolio and gallery pages, including the fixed, translucent header that overlays the top section.

## 2. Layout & Structure

### Header
-   Standard fixed header, translucent over the top section, matching the style on portfolio/gallery pages 

### Introduction/Bio Section
-   Prominent section featuring the photographer's bio text and photo.
-   Suggested Layout: Photo on one side (e.g., left), bio text on the other (e.g., right) on larger screens. Stack the photo above the text on smaller screens.
-   The photo should be `D:\coding\tmm\img\other\IMG_7878.JPG`.
-   The text is the provided bio: "Hey there! I’m Timmy Miller, a passionate photographer born in Pennsylvania and proudly raised in Naperville, Illinois. Photography has been my calling for as long as I can remember, and since age 12, I've been turning moments into lasting memories for others. Now 17 and a senior at Metea Valley High School, I specialize in capturing the action, intensity, and spirit of sports, but my lens has also explored the quiet beauty of nature and the vibrant energy of events. Whether you're looking for dynamic sports photography or vivid imagery that tells your story, I’m dedicated to delivering stunning visuals that reflect authenticity and emotion.
"

### Camera Specs Section
-   A clear section listing the photographer's main equipment.
-   Format as a list or simple text block.
-   Content:
    -   Canon eos r5 mark 2
    -   Canon RF 100-500mm f/4.5-7.1 L IS USM Lens
    -   Canon RF 70-200mm f/2.8 L IS USM Lens
    -   Canon EF 100mm f/2.8L Macro IS USM

### See More of Me Section
-   Section dedicated to promoting the Instagram profile.
-   Include a clear call to action or heading like "See more of me" or "Connect on Instagram".
-   Display the `D:\coding\tmm\img\other\insta.jpg` image next to the promotion/link on larger screens, stacked on smaller screens.
-   Include a link to the photographer's Instagram profile.

### Footer
-   Include the standard site footer used on other pages.

## 3. Visual Style
-   Maintain consistent typography, color scheme, and spacing as used on the index and portfolio pages.
-   Images should be appropriately sized and styled (e.g., with rounded corners if desired, or a simple border).
-   Ensure clear visual separation between sections.

## 4. Responsiveness
-   The page layout and elements must adapt smoothly to different screen sizes (desktop, tablet, mobile). The bio and Instagram sections, in particular, should handle the photo and text/link arrangement responsively.

## 5. Accessibility
-   Ensure all images have appropriate alt text.
-   Maintain sufficient color contrast for text.
-   Ensure keyboard navigation is functional for any interactive elements (links, buttons).

---

## Atomic Steps for AI Coder

1.  **Create the basic HTML file for the About page** (`about.html`).
2.  **Implement the fixed, translucent header** at the top of `about.html`, following the process established for the portfolio/gallery pages, ensuring it overlays the content below and matches the home page header's style.
3.  **Create the Introduction/Bio section** below the header.
    -   Add an `<img>` element for the photo `D:\coding\tmm\img\other\IMG_7878.JPG`.
    -   Add a container for the bio text and insert the provided text.
    -   Apply CSS to arrange the photo and text side-by-side on desktop and stacked on mobile.
    -   Ensure appropriate spacing and styling consistent with the theme.
4.  **Create the Camera Specs section** below the bio section.
    -   Add a heading (e.g., "Camera Specs").
    -   Format the provided list of specs (e.g., using `<ul>` or paragraphs).
    -   Apply consistent styling.
5.  **Create the "See More of Me" / Instagram promotion section** below the specs.
    -   Add a heading (e.g., "See more of me" or "Connect on Instagram").
    -   Add an `<img>` element for the `D:\coding\tmm\img\other\insta.jpg` file.
    -   Add a link element (`<a>`) for the Instagram profile (use a placeholder URL if needed, e.g., `#`). Style this as a button or clear link.
    -   Apply CSS to arrange the image and link side-by-side on desktop and stacked on mobile.
    -   Apply consistent styling and spacing.
6.  **Include the standard site footer HTML** at the bottom of `about.html`.
7.  **Add or update CSS rules** in the main stylesheet (`css/style.css` or similar) to style the new sections, ensuring consistency with the existing theme (typography, colors, padding, margins).
8.  **Add alt text** to the bio photo (`IMG_7878.JPG`) and the Instagram preview image (`insta.jpg`).
9.  **Test responsiveness** of the entire `about.html` page on different devices/screen sizes.
10. **Verify visual consistency** with the home and portfolio pages.
11. **Test accessibility**, including keyboard navigation and color contrast.
