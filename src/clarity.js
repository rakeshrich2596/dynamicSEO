
export function initMicrosoftClarity(projectId) {
  if (!projectId) return;

  // Prevent duplicate initialization
  if (window.__clarityInitialized) return;
  window.__clarityInitialized = true;

  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.clarity.ms/tag/${projectId}`;

  document.head.appendChild(script);
}
