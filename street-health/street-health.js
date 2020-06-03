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
  // slideCategory.innerHTML = stories.storyOne.category;
  slideStoryTitle.innerHTML = stories.storyOne.title;
  link.href= stories.storyOne.link;
});

slide2.addEventListener("click", function() {
  // slideCategory.innerHTML = stories.storyTwo.category;
  slideStoryTitle.innerHTML = stories.storyTwo.title;
  link.href= stories.storyTwo.link;
});

slide3.addEventListener("click", function() {
  // slideCategory.innerHTML = stories.storyThree.category;
  slideStoryTitle.innerHTML = stories.storyThree.title;
  link.href= stories.storyThree.link;
});

slide4.addEventListener("click", function() {
  // slideCategory.innerHTML = stories.storyOne.category;
  slideStoryTitle_2.innerHTML = stories.storyFour.title;
  // link.href= stories.storyOne.link;
});

slide5.addEventListener("click", function() {
  // slideCategory.innerHTML = stories.storyTwo.category;
  slideStoryTitle_2.innerHTML = stories.storyFive.title;
  // link.href= stories.storyTwo.link;
});

slide6.addEventListener("click", function() {
  // slideCategory.innerHTML = stories.storyThree.category;
  slideStoryTitle_2.innerHTML = stories.storySix.title;
  // link.href= stories.storyThree.link;
});

// todo: clean up - one observer for multiple elements

const secondParallaxImage = document.getElementById('secondParallaxImage')
const secondParallaxCaption = document.getElementById('secondParallaxCaption')
const lastParallaxCaption = document.getElementById('lastParallaxCaption')
const lastParallaxImage = document.getElementById('lastParallaxImage')

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.intersectionRatio > 0 && entry.target.id == 'lastParallaxImage') {
      lastParallaxCaption.style.display = 'block'
    } else {
      lastParallaxCaption.style.display = 'none'
    }
  });
});

observer.observe(lastParallaxImage);

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    
    if (entry.intersectionRatio > 0 && entry.target.id == 'secondParallaxImage') {
      secondParallaxCaption.style.display = 'block'
    } else {
      secondParallaxCaption.style.display = 'none'
    }
  });
});

observer.observe(secondParallaxImage);