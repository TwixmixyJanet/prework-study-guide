// Topics we are studying in the pre-work
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// Randomly selecting a topic to study
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

// Outputting the topics
// console.log(topics);

// let topic = "HTML";

// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }

// Shapes Array
// var shapes = ["triangle", "square", "pentagon", "circle"];

// for(var x = 0; x < shapes.length; x++) {
//     console.log(shapes[x]);
//    }

// Topics Functions
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

  function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

  console.log('Here are the topics we learned through Prework:');
  listTopics();
  console.log('Which topic should we study first?');
  selectTopic();

// Topics Array
// for(var subject = 0; subject < topics.length; subject++) {
//     console.log(topics[subject]);
// }