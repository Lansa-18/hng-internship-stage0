/**
 * Profile Card JavaScript
 * Handles current time display and interactive features
 */

(function () {
  "use strict";

  // DOM elements
  const currentTimeElement = document.getElementById("currentTime");
  const profileCard = document.querySelector(
    '[data-testid="test-profile-card"]'
  );
  const avatarImage = document.querySelector(
    '[data-testid="test-user-avatar"]'
  );
  const socialLinks = document.querySelectorAll(".social-link");

  // Updates the current time display with Date.now()
  function updateCurrentTime() {
    if (currentTimeElement) {
      const currentTime = Date.now();
      currentTimeElement.textContent = currentTime.toString();
      currentTimeElement.setAttribute(
        "aria-label",
        `Current time in milliseconds: ${currentTime}`
      );
    }
  }

  /**
   * Initializes the time display and sets up periodic updates
   */
  function initializeTimeDisplay() {
    updateCurrentTime();

    // Update time every second (1000ms)
    setInterval(updateCurrentTime, 1000);
  }

  /**
   * Adds keyboard navigation enhancements
   */
  function enhanceKeyboardNavigation() {
    // Enhance social links with keyboard feedback
    socialLinks.forEach((link) => {
      link.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          console.log(`Navigating to: ${this.href}`);
        }
      });

      // Add aria-label if not present
      if (!link.getAttribute("aria-label")) {
        const linkText = link.textContent.trim();
        link.setAttribute("aria-label", `Visit ${linkText} profile`);
      }
    });
  }

  /**
   * Handles avatar image error loading
   */
  function setupImageErrorHandling() {
    if (avatarImage) {
      avatarImage.addEventListener("error", function () {
        // Fallback to a default avatar if the image fails to load
        this.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjdGQUZDIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiNENUQ5REQiLz4KPHBhdGggZD0iTTEwMCAyMDBDMTAwIDE3Mi4zODYgMTIyLjM4NiAxNTAgMTUwIDE1MFMyMDAgMTcyLjM4NiAyMDAgMjAwVjI0MEgxMDBWMjAwWiIgZmlsbD0iI0Q1RDlERCIvPgo8L3N2Zz4K";
        this.alt = "Default avatar - profile picture could not be loaded";
        console.warn("Avatar image failed to load, using fallback");
      });

      avatarImage.addEventListener("load", function () {
        console.log("Avatar image loaded successfully");
      });
    }
  }

  /**
   * Adds copy functionality to the current time
   */
  function setupTimeCopyFeature() {
    if (currentTimeElement) {
      currentTimeElement.style.cursor = "pointer";
      currentTimeElement.setAttribute("title", "Click to copy timestamp");

      currentTimeElement.addEventListener("click", async function () {
        try {
          const timeValue = this.textContent;

          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(timeValue);
            showCopyFeedback(this, "Copied!");
          } else {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = timeValue;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            showCopyFeedback(this, "Copied!");
          }
        } catch (err) {
          console.error("Failed to copy timestamp:", err);
          showCopyFeedback(this, "Copy failed");
        }
      });

      // Make it keyboard accessible
      currentTimeElement.setAttribute("tabindex", "0");
      currentTimeElement.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
    }
  }

  /**
   * Shows visual feedback when copying
   */
  function showCopyFeedback(element, message) {
    const originalText = element.textContent;
    const originalColor = element.style.color;

    element.textContent = message;
    element.style.color = "#10B981";

    setTimeout(() => {
      element.textContent = originalText;
      element.style.color = originalColor;
    }, 1000);
  }

  /**
   * Initializes all functionality when DOM is ready
   */
  function initialize() {
    console.log("Profile Card JavaScript initialized");

    // Initialize core features
    initializeTimeDisplay();
    enhanceKeyboardNavigation();
    setupImageErrorHandling();
    setupTimeCopyFeature();
    initializeIntersectionObserver();

    // Add loaded class to profile card for any CSS animations
    if (profileCard) {
      profileCard.classList.add("loaded");
    }

    console.log("Profile Card setup complete");
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
