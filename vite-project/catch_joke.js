import axios from "axios";

const displayJoke = document.getElementById("display-joke");

export async function fetchData() {
    const errorMessage = `Mistakes were made. Try Again!`;

    const apiURL = `https://thesimpsonsquoteapi.glitch.me/quotes`;

    try {
        const response = await axios.get(apiURL);
        
        const randomQuote = response.data.quote;
        displayJoke.textContent = randomQuote;
        console.log(randomQuote);

    } catch (error) {
        displayJoke.textContent = errorMessage;
        console.error(error);
    }
}