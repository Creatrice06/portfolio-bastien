const CALENDLY_URL = "https://calendly.com/votre-lien";

const calendlyLinks = document.querySelectorAll(".js-calendly-link");
const calendlyWidget = document.getElementById("calendly-widget");

const hasRealCalendlyUrl =
  CALENDLY_URL &&
  CALENDLY_URL.startsWith("https://calendly.com/") &&
  !CALENDLY_URL.includes("votre-lien");

for (const link of calendlyLinks) {
  link.href = hasRealCalendlyUrl ? CALENDLY_URL : "#calendly";
  if (hasRealCalendlyUrl) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
}

if (hasRealCalendlyUrl && calendlyWidget) {
  calendlyWidget.innerHTML = `
    <iframe
      title="Réservation Calendly"
      src="${CALENDLY_URL}"
      loading="lazy"
    ></iframe>
  `;
}

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  for (const element of revealElements) {
    revealObserver.observe(element);
  }
} else {
  for (const element of revealElements) {
    element.classList.add("is-visible");
  }
}
