// document.addEventListener("DOMContentLoaded", function() {
//     let slideIndex = 0;
//     const slides = document.querySelector('.slider');
//     const dots = document.querySelectorAll('.dot');
//     const prevButton = document.querySelector('.prev'); // Get the "prev" button
//     const nextButton = document.querySelector('.next'); // Get the "next" button


//     function debounce(func, delay) {
//         let timeoutId;
//         return function(...args) {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(this, args);
//             }, delay);
//         };
//     }

//     function changeSlide(n) {
//         slideIndex += n;

//         // If we've gone too far forward
//         if (slideIndex > document.querySelectorAll('.slide').length - 1) {
//             slideIndex = 0;
//         }

//         // If we've gone too far back
//         if (slideIndex < 0) {
//             slideIndex = document.querySelectorAll('.slide').length - 1;
//         }

//         updateSlider();
//     }

//     function currentSlide(n) {
//         slideIndex = n;
//         updateSlider();
//     }

//     // function updateSlider() {
//         // const translateXValue = -slideIndex * 100;
//         // slides.style.transform = `translateX(${translateXValue}%)`;

//         // // Update active dot
//         // dots.forEach((dot, index) => {
//         //     /*Remove existing active class, then add if index correct*/
//         //     dot.classList.remove('active');
//         //     if (index === slideIndex) {
//         //         dot.classList.add('active');
//         //     }
//         // });
        
//     // }
//     function updateSlider() {
//         setTimeout(() => {
//             const translateXValue = -slideIndex * 100;
//             slides.style.transform = `translateX(${translateXValue}%)`;
    
//             // Update active dot
//             dots.forEach((dot, index) => {
//                 /*Remove existing active class, then add if index correct*/
//                 dot.classList.remove('active');
//                 if (index === slideIndex) {
//                     dot.classList.add('active');
//                 }
//             });
//         },100)
//     }

//     //Debounced currentSlide
//     const debouncedCurrentSlide = debounce(currentSlide, 100); //Adjust 100ms as needed

//     // Apply Javascript handlers to all dot events
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             debouncedCurrentSlide(index);  //Call the debounced method
//         });
//     });

//     prevButton.addEventListener('click', () => {
//         changeSlide(-1);
//     });

//     nextButton.addEventListener('click', () => {
//         changeSlide(1);
//     });

//     //Initial call for the dots to align with the page load.
//     updateSlider();
// });



// ===================================================================
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.querySelector('.slider');
  const dots = document.querySelectorAll('.dot');

  if (n >= dots.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = dots.length - 1;
  }

  slides.style.transform = `translateX(-${slideIndex * 33.33}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}
//read more product description
document.addEventListener('DOMContentLoaded', function() {
  try {
      const readMoreButtons = document.querySelectorAll('.read-more-btn');

      readMoreButtons.forEach(button => {
          button.addEventListener('click', function(event) {
              event.preventDefault();
              const description = this.parentNode;

              if (description) {
                  description.classList.toggle('expanded');
                  if (description.classList.contains('expanded')) {
                      this.textContent = 'Read Less';
                  } else {
                      this.textContent = 'Read More';
                  }
              } else {
                  console.error("Parent 'description' element not found!");  // Error handling
              }
          });
      });
  } catch (error) {
      console.error("An error occurred in the Read More script:", error);  // Global error handling
  }
});