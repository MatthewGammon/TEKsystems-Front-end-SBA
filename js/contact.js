const notAllowed = ['bad', 'negative', 'poor', 'ugly', 'broken', 'improvement'];

const handleSubmit = (event) => {
  event.preventDefault();
  const feedback = document.getElementById('feedback').value;
  const feedbackArr = feedback.split(' ');
  let leftBadReview = false;

  for (let word of feedbackArr) {
    // if statements to satisfy project requirements
    if (word.includes('.')) {
      word = word.split('.').join('');
    }
    if (notAllowed.includes(word)) {
      leftBadReview = true;
      break;
    }
  }
  // if statements to satisfy project requirements
  if (!leftBadReview) {
    window.alert('Thank you for your submission. I will be in touch shortly!');
    window.location.replace('../index.html');
  } else {
    window.alert('Sorry, but negative feedback is not allowed!');
    window.location.replace('https://youtu.be/dQw4w9WgXcQ');
  }
};
