const btnGenerate = document.getElementById("generate");
const text = document.getElementById("q");
const auth = document.getElementById("a");

btnGenerate.addEventListener("click", () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let qoutes = data;
            let oneQuote = qoutes[Math.floor(Math.random() * qoutes.length)];
            text.innerHTML = oneQuote.text;
            auth.innerHTML = oneQuote.author;
            console.log(oneQuote);
        });
    console.clear();
});
