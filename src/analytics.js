
export function initGoogleAnalytics(measurementId) {
  if (!measurementId) return;

  // Prevent duplicate initialization
  if (window.__gaInitialized) return;
  window.__gaInitialized = true;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  document.head.appendChild(script);
}
