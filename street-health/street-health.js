const slideStoryTitle = document.getElementById("slideStoryTitle");
const slideStoryTitle_2 = document.getElementById("slideStoryTitle_2");
const storyTextBlock = document.getElementById("storyTextBlock");
const storyTextBlock_2 = document.getElementById("storyTextBlock_2");
const link = document.getElementById('storyLink');
const slide1 = document.getElementById("s1");
const slide2 = document.getElementById("s2");
const slide3 = document.getElementById("s3");
const slide4 = document.getElementById("s1_2");
const slide5 = document.getElementById("s2_2");
const slide6 = document.getElementById("s3_2");

const stories = {
  storyOne: {
    title: `Fatmata Conteh,
    MD Class of 2022, takes a
    history on a patient.`
  },
  storyTwo: {
    title: `Chirag Patel, MD
    Class of 2023, talks with a
    clinic patient.`
  },
  storyThree: {
    title: `Norine Kuhn, Research Associate with the EVMS Strelitz Diabetes Center, talks to student volunteers about diabetes screenings.`
  },
  // ollie
  storyFour: {
    title: `Ollie Celestin, right, attended his first
    Street Health clinic after experiencing
    homelessness. Mr. Celestin depends on the
    care provided by Street Health, Freemason
    Baptist Church and Norfolk’s NEST program.`
  },
  // thomas
  storyFive: {
    title: `Thomas Stokes Jr. of Norfolk rode his bike to Freemason Baptist Church to have his vitals checked by the Street Health volunteers.`
  },
  storySix: {
    title: `Norine Kuhn,
    Research Associate
    with the EVMS
    Strelitz Diabetes
    Center, shares a
    laugh with a patient
    at the clinic.`
  },

};

slide1.addEventListener("click", function() {
  slideStoryTitle.innerHTML = stories.storyOne.title;
  link.href= stories.storyOne.link;
});

slide2.addEventListener("click", function() {
  slideStoryTitle.innerHTML = stories.storyTwo.title;
  link.href= stories.storyTwo.link;
});

slide3.addEventListener("click", function() {
  slideStoryTitle.innerHTML = stories.storyThree.title;
  link.href= stories.storyThree.link;
});

slide4.addEventListener("click", function() {
  slideStoryTitle_2.innerHTML = stories.storyFour.title;
  
});

slide5.addEventListener("click", function() {
  slideStoryTitle_2.innerHTML = stories.storyFive.title;
});

slide6.addEventListener("click", function() {
  slideStoryTitle_2.innerHTML = stories.storySix.title;
});

// todo: clean up - one observer for multiple elements

const secondParallaxImage = document.getElementById('secondParallaxImage')
const secondParallaxCaption = document.getElementById('secondParallaxCaption')
const lastParallaxCaption = document.getElementById('lastParallaxCaption')
const lastParallaxImage = document.getElementById('lastParallaxImage')
const firstParallaxImage = document.getElementById('firstParallaxImage')
const firstParallaxCaption = document.getElementById('firstParallaxCaption')

console.log(innerWidth)

const mobile = innerWidth < 899;
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    
    if (entry.intersectionRatio > 0 && entry.target.id == 'firstParallaxImage' && !mobile) {
      firstParallaxCaption.style.display = 'block'
    } else {
      firstParallaxCaption.style.display = 'none'
    }
  });
});

observer.observe(firstParallaxImage);


observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    
    if (entry.intersectionRatio > 0 && entry.target.id == 'secondParallaxImage' && !mobile) {
      secondParallaxCaption.style.display = 'block'
    } else {
      secondParallaxCaption.style.display = 'none'
    }
  });
});

observer.observe(secondParallaxImage);

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.intersectionRatio > 0 && entry.target.id == 'lastParallaxImage' && !mobile) {
      lastParallaxCaption.style.display = 'block'
    } else {
      lastParallaxCaption.style.display = 'none'
    }
  });
});

observer.observe(lastParallaxImage);
