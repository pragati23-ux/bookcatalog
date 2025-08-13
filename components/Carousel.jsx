// import React, {  useEffect, useRef, useState } from 'react'

// function Carousel({children}) {
//      const [currentIndex,setcurrentIndex]=useState(0);
//      const carouselBoxRef=useRef();
//      const intervalRef=useRef(0);
//      useEffect(()=>{ 
//          const {slides}=getSlidesInfo(); 
//          slides[0].setAttribute("data-active","true");
//          startslider();
        
//      },[]);
//      function startslider(){
//          intervalRef.current=setInterval(()=>{
              
//             setcurrentIndex((prev)=>{
//                 const {slides, count}=getSlideInfo();
//                  const newIndex = prev === count -1? 0: prev+1;
//                  [...slides].forEach((slide, index) => {
//                     slide.setAttribute("data-active", index === newIndex);
//                  });
//                  return newIndex;

//             });

//         },3000)
//         }

     
//      function handlePrevious(){
//          clearInterval(intervalRef.current);

//     const { slides, count } = getSlidesInfo();

//     const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;

//     [...slides].forEach((slide, index) => {
//       slide.setAttribute("data-active", index === newIndex);
//     });

//     startSlider();

//     setCurrentIndex(newIndex);
  

//      }
//      function handleNext(event){
//         clearInterval(intervalRef.current);
//          const {slides, count}=getSlidesInfo();
//          const newIndex = currentIndex === count -1? 0: currentIndex+1;
//          event.target.setAttribute("aria-controls", `slideImg${newIndex}`);
//           [...slides].forEach((slide, index) => {
//                     slide.setAttribute("data-active", index === newIndex);
//                      slide.setAttribute(
//         "aria-hidden",
//         index === newIndex ? undefined : "true"
//       );
//                  });
//          startslider();
         

// setcurrentIndex(newIndex);
//      }
//      function getSlidesInfo(){
//        const carouselBox=  carouselBoxRef.current;
//                 const slides=  carouselBox.children;
//                  const count=slides.length;
//                  return {slides,count};
//      }
//   return (
//       <div className="carousel">
//         {currentIndex}
//         <div ref={carouselBoxRef} className='box'>{children}

//         </div>
//         <button onClick={handlePrevious}>prev</button>
//         <button onClick={handleNext}>next</button>
//       </div>
       
//   )
// }

// export default Carousel
 import { useEffect, useState, useRef } from "react";
 
function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselBoxRef = useRef();

  const intervalRef = useRef(0);

  useEffect(() => {
    // get the images, and show the first image
    const { slides } = getSlidesInfo();
    slides[0].setAttribute("data-active", "true");

    startSlider();
  }, []);

  function startSlider() {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const { slides, count } = getSlidesInfo();

        const newIndex = prev === count - 1 ? 0 : prev + 1;

        // slides[prev].classList.remove("show");
        // slides[prev].classList.add("hide");

        // slides[newIndex].classList.remove("hide");
        // slides[newIndex].classList.add("show");

        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", index === newIndex);
        });

        return newIndex;
      });
    }, 2000);
  }

  function handlePrevious() {
    // stop interval
    clearInterval(intervalRef.current);

    const { slides, count } = getSlidesInfo();

    const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });

    startSlider();

    setCurrentIndex(newIndex);
  }

  function handleNext(event) {
    // stop interval
    clearInterval(intervalRef.current);

    const { slides, count } = getSlidesInfo();

    const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;

    event.target.setAttribute("aria-controls", `slideImg${newIndex}`);

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
      slide.setAttribute(
        "aria-hidden",
        index === newIndex ? undefined : "true"
      );
    });

    startSlider();

    setCurrentIndex(newIndex);
  }

  function getSlidesInfo() {
    const carouselBox = carouselBoxRef.current;
    const slides = carouselBox.children;
    const count = slides.length;

    return { slides, count };
  }

  function handleStepperClick(newIndex) {
    return () => {
      // stop interval
      clearInterval(intervalRef.current);

      const { slides } = getSlidesInfo();

      [...slides].forEach((slide, index) => {
        slide.setAttribute("data-active", index === newIndex);
      });

      startSlider();

      setCurrentIndex(newIndex);
    };
  }

  function handleMouseEnter() {
    clearInterval(intervalRef.current);
  }

  function handleMouseLeave() {
    startSlider();
  }

  return (
    <div className="carousel">
      {currentIndex}
      <span role="status" aria-live="polite" id="xyz"></span>
      <section
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselBoxRef}
        className="box"
        aria-label="Sliding Images"
        tabIndex={0}
        onFocus={() => {}}
      >
        {children}
      </section>

      <button className="prev" onClick={handlePrevious}>
        Prev
      </button>
      <button className="next" onClick={handleNext}>
        Next
      </button>

      <div className="stepper">
        {Array.from(children).map((_, index) => {
          return <button onClick={handleStepperClick(index)}>{index}</button>;
        })}
      </div>
    </div>
  );
}

export default Carousel;