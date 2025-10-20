// Form validation and submission handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.querySelector(
    '[data-testid="test-contact-success"]'
  );

  // Validation rules
  const validationRules = {
    fullName: {
      test: (value) => value.trim().length > 0,
      message: "Full name is required",
    },
    email: {
      test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Please enter a valid email address",
    },
    subject: {
      test: (value) => value.trim().length > 0,
      message: "Subject is required",
    },
    message: {
      test: (value) => value.trim().length >= 10,
      message: "Message must be at least 10 characters long",
    },
  };

  // Show error message
  function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.setAttribute("role", "alert");
    }
  }

  // Clear error message
  function clearError(field) {
    const errorElement = document.getElementById(`${field}Error`);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.removeAttribute("role");
    }
  }

  // Validate a single field
  function validateField(field) {
    const input = form[field];
    const rule = validationRules[field];

    if (rule && input) {
      const isValid = rule.test(input.value);
      if (!isValid) {
        showError(field, rule.message);
        return false;
      } else {
        clearError(field);
        return true;
      }
    }
    return true;
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    const fields = Object.keys(validationRules);
    const isValid = fields.every((field) => validateField(field));

    if (isValid) {
      successMessage.classList.remove("hidden");
      form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 5000);
    }
  });

  // Real-time validation on input
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", function () {
      validateField(this.name);
    });

    // Validate on blur
    input.addEventListener("blur", function () {
      validateField(this.name);
    });
  });

  // Accessibility enhancements for keyboard navigation
  form.querySelectorAll("input, textarea, button").forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #667eea";
      this.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "";
      this.style.outlineOffset = "";
    });
  });
});
