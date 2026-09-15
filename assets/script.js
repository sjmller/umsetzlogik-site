document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  const mailForm = document.querySelector("[data-mail-form]");
  if (mailForm) {
    mailForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!mailForm.reportValidity()) return;

      const data = new FormData(mailForm);
      const recipient = mailForm.dataset.recipient || "sergej.mueller@umsetzlogik.de";
      const subject = String(data.get("subject") || "Anfrage über umsetzlogik.de").trim();
      const lines = [
        `Name: ${String(data.get("name") || "").trim()}`,
        `Unternehmen: ${String(data.get("company") || "").trim() || "–"}`,
        `E-Mail: ${String(data.get("email") || "").trim()}`,
        `Telefon: ${String(data.get("phone") || "").trim() || "–"}`,
        "",
        "Nachricht:",
        String(data.get("message") || "").trim(),
      ];

      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      window.location.href = mailto;
    });
  }
});
