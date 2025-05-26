function showJoke(response) {
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = response.data.answer;
}

function getJoke() {
  let apiKey = "9f54b409ed45da3co73e59fb34ea8t3b";
  let context = "Be funny and friendly";
  let promptText = "Tell me a joke?";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${promptText}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showJoke);
}

let element = document.querySelector("#joke-button");
element.addEventListener("click", getJoke);
