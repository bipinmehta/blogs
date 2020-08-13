const myText = document.getElementById('blog');
const wordCount = document.getElementById('wordCount');

let characters = [];
myText.addEventListener('keydown', function () {
  characters = myText.value.split('');
  console.log(characters);
  wordCount.innerText = characters.length;
});
