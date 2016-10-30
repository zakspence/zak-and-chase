var entryMake = [];

var content = {
  title: "Moving Away",
  text: ["paragraph1", "paragraph2", "paragraph3", "paragraph4"],
  author: "Zak Spence",
  date: "10.29.2016"
};

var content2 = {
  title: "MBlah",
  text: ["thy mother", "was", "a", "hamster"],
  author: "Zak Spence",
  date: "10.30.2016"
};

var content3 = {
  title: "Cheso queso",
  text: ["never", "watched", "chef's", "table"],
  author: "Zak Spence",
  date: "10.31.2016"
};

entryMake.push(content, content2, content3);

var titleEl = document.getElementById('entry-title');
var authorEl = document.getElementById('entry-author');
var dateEl = document.getElementById('entry-date');
var textEl = document.getElementById('entry-text');

function displayEntry(entry) {
  titleEl.innerHTML = entry.title;
  authorEl.innerHTML = entry.author;
  dateEl.innerHTML = entry.date;
  textEl.innerHTML = entry.text;

  var tempText = "";
  for (var i = 0; i < entry.text.length; i++){
    tempText += `<p>${entry.text[i]}</p>`;
    if (i === (entry.text.length - 1)) {
      textEl.innerHTML = tempText;
    }
  }
}

var currentEntry = 0;

displayEntry(entryMake[currentEntry]);

var arrows = Array.from(document.getElementsByClassName('arrow'));

arrows.forEach(function(arrow) {
  arrow.addEventListener('click', function () {
    if (arrow.classList[0] === 'left') {
      if (currentEntry === 0) {
        alert('You shall not pass!');
      } else {
        currentEntry--;
        displayEntry(entryMake[currentEntry])
      }
    } else if (arrow.classList[0] === 'right') {
      if (currentEntry === (entryMake.length - 1)) {
        alert('You shall not pass!')
      } else {
        currentEntry++;
        displayEntry(entryMake[currentEntry]);
      }
    }
  })
})
