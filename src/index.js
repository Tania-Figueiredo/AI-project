function getDestination(event) {
  event.preventDefault();

  let input = document.querySelector("#search");
  let promptText = input.value;

  let apiKey = "9f54b409ed45da3co73e59fb34ea8t3b";
  let context =
    "You are a helpful travel assistant. Give a short answer, with travel spots. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    promptText
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(function (response) {
    let responseBox = document.querySelector("#response");
    responseBox.innerHTML = response.data.answer;
  });
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", getDestination);
