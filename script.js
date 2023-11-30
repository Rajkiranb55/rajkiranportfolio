// ScrollReveal({ reset: true });
ScrollReveal().reveal(".slide-up", {
  duration: 800,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5,
});
ScrollReveal().reveal(".fade-in", {
  duration: 1000,
  move: 0,
});
ScrollReveal().reveal(".slide-right", {
  duration: 1000,
  origin: "left",
  distance: "100px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".slide-left", {
  duration: 1000,
  origin: "right",
  distance: "100px",
  easing: "ease-in-out",
});
