const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".logo", {
  ...scrollRevealOption,
  origin: "left",
 
});

//   HEADER CONTENT
ScrollReveal().reveal(".header-content h2", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "top",
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content img", {
  ...scrollRevealOption,
    delay: 1500,
    origin: "left",
});
//  COVER LETTER

ScrollReveal().reveal(".cover-letter h1", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "top",
});
ScrollReveal().reveal(".cover-letter #p1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".cover-letter #p2", {
  ...scrollRevealOption,
    delay: 1000,
    origin: "left",
    });

    ScrollReveal().reveal(".cover-letter #p3", {
      ...scrollRevealOption,
      delay: 1500,
      origin: "right",
    });
  

    // Weather

    ScrollReveal().reveal(".weatherForm input", {
      ...scrollRevealOption,
        delay: 1000,
        origin: "left",
        });
    
        ScrollReveal().reveal(".weatherForm button", {
          ...scrollRevealOption,
          delay: 1500,
          origin: "right",
        });

