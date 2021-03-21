import { LoremIpsum } from "lorem-ipsum";

let input = document.getElementById("value");
let select = document.getElementById("select");
let selected = select.options[select.selectedIndex];

let copyBtn = document.getElementById("copy");

let generate = document.getElementById("generate");

let text = document.getElementById("generated")

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

select.addEventListener("change", () => {
  selected.value = select.options[select.selectedIndex].value;
});

generate.addEventListener("click", () => {
  selected.value = input.value;
  switch (selected.innerText) {
    case "Paragraph":
      text.innerText = lorem.generateParagraphs(selected.value);
      break;
    case "Word":
      text.innerText = lorem.generateWords(selected.value);
      break;
    case "Sentence":
      text.innerText = lorem.generateSentences(selected.value);
      break;
    default:
      return;
  }
});

copyBtn.addEventListener("click", () => {
  var copyText = document.getElementById("generated");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
});
