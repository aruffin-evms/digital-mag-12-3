const slideStoryTitle = document.getElementById("slideStoryTitle");
const storyTextBlock = document.getElementById("storyTextBlock");
const link = document.getElementById('storyLink');
const slide1 = document.getElementById("s1");
const slide2 = document.getElementById("s2");
const slide3 = document.getElementById("s3");

const stories = {
  storyOne: {
    category: "",
    title: "Alumni Title",
    link: ""
  },
  storyTwo: {
    category: "",
    title: "Behind bench title",
    link: ""
  },
  storyThree: {
    category: "",
    title: "Comics title",
    link: ""
  }
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
