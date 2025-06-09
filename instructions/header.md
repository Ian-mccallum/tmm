# Header Design and Implementation Steps (Based on Provided Code Structure)

## Design Objective
Implement a fixed header on the portfolio and gallery pages that is translucent when positioned over the top section's background image, allowing the image to show through. The header should maintain the layout (logo left, navigation right) and fixed behavior of the home page header but have a transparent/translucent background when visually overlaying the initial hero/intro image section on these pages.

## Atomic Steps for AI Coder

1.  **Locate the HTML structure for the header and the first main content section** on the portfolio page (`portfolio.html`) and any gallery page templates.
2.  **Ensure the header element comes directly before the HTML for the first main content section** (the one with the large background image) in the document flow.
3.  **Identify the CSS file(s)** used for styling the header and overall layout (likely `css/style.css`).
4.  **Apply CSS styles to the header element to make it fixed and translucent:**
    - Set `position: fixed;` to keep it in place during scrolling.
    - Set `top: 0;` and `left: 0;` to align it to the top-left of the viewport.
    - Set `width: 100%;`.
    - Apply a `background-color` that is `transparent` or uses an `rgba()` value with an alpha channel (e.g., `rgba(0, 0, 0, 0.5)`) to create the translucent effect.
    - Assign a high `z-index` (e.g., `z-index: 999;`) to ensure it layers correctly above the content below.
5.  **Style the first main content section** (the hero/intro section with the background image) on these pages:
    - Ensure this section has a background image applied (`background-image`, `background-size`, `background-position`).
    - Add `padding-top` to this section equal to the height of the fixed header. This creates space at the top of this section so the content *within* it is not hidden behind the fixed header.
    - Alternatively, if the structure allows, ensure the content *within* this section is pushed down using internal padding or margin to clear the header height.
6.  **Verify the internal layout of the header.** Confirm that the logo is on the left and navigation links are on the right within the fixed header, matching the home page layout.
7.  **Test the fixed and translucent behavior on scroll.** Scroll down the portfolio and gallery pages. The header should remain fixed at the top, and the content should scroll underneath it. The header should appear translucent over the initial background image section.
8.  **Test responsiveness.** Check the header's appearance and behavior on various device sizes (desktop, tablet, mobile) to ensure the fixed, translucent style and layout are maintained and the content spacing below the header is correct.
9.  **Review overall visual integration.** Confirm that the fixed, translucent header integrates seamlessly with the rest of the page design and aligns with the visual examples provided.
