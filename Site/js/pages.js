document.addEventListener("DOMContentLoaded", () => {

  // data for holding which page were on
  let pageNumber = 0;

  // content for pages
  const pages = [
    { title: 'A houston based freelance web designer / developer',
      background: '#7CFFCB',
      circle: '#9708CC'
    },

    { title: 'Looking for fun and exciting projects to work on',
    background: '#80FF72',
    circle: '#7EE8FA'
    },

    { title: 'A nerd who loves using digital mediums to envoke human emotion',
    background: '#F8EF42',
    circle: '#FCE043'
    },

    { title: `On the line <br>`,
    background: '#9F98E8',
    circle: '#AFF6CF'
    },

    {
      title: `Letting you have access to his<a href="/Site/assets/Josh Martin Resume.PDF" target="_blank">resume</a>`,
    background: '#FE5F75',
    circle: '#D4418E'
    },
  ];
    

  const nextTag = document.querySelector('footer img.next');
  const previousTag = document.querySelector('footer img.prev');
  const randomTag = document.querySelector('footer img.random');
  const outputTag = document.querySelector('h2');
  const circleTag = document.querySelectorAll('.circle');
  const bodyTag = document.querySelector('body');
  const icons = document.querySelector('.icons');


  // display icons for 3rd slide
  const iconCondition = () => {
    if (pageNumber === 3) {
      icons.style.display = "block";
    } else if (pageNumber < 3 || pageNumber > 3) {
      icons.style.display = "none";
    }
  };

  // function to increase page number
  const next = () => {
    pageNumber += 1;
    if (pageNumber > pages.length - 1) {
      pageNumber = 0;
    } 
    iconCondition();
    updateSection();
  };

  // function to decrease page number
  const previous = () => {
    pageNumber -= 1;
    if (pageNumber < 0) {
      pageNumber = pages.length - 1;
    }
    iconCondition();
    updateSection();
  };

  // pick a random slide
  const random = () => {
    pageNumber = Math.floor(Math.random() * pages.length);
    iconCondition();
    updateSection();
  }

  // function to display page object
  const updateSection = () => {
    outputTag.innerHTML = pages[pageNumber].title;
    [...circleTag].forEach((circleColor) => {
        circleColor.style.backgroundColor = pages[pageNumber].circle;
    }); 
    bodyTag.style.backgroundColor = pages[pageNumber].background;
  };

  // button controls
  nextTag.addEventListener('click', () => {
    next();
  });

  previousTag.addEventListener('click', () => {
    previous();
  });

  randomTag.addEventListener('click', () => {
    random();
  });

  // when user pressed key check for arrow left or right
  document.addEventListener('keyup', (event) => {
    if(event.key === "ArrowRight"){
        next();
    } else if (event.key === "ArrowLeft") {
        previous();
    } 
  });

});