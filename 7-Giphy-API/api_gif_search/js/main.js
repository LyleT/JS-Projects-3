// Do the activity here!
let state = {
        apiGifData: [
            {

            }
        ]
}

function displayOutput() {
    let output = document.querySelector('#output');
    //let gifImage = 'https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif';
    //image.src = gifImage;
    //output.appendChild(image);
    output.innerHTML= '';
    for (let gifInfo of state.apiGifData.data) {
        let image = document.createElement('img')
        let gifURL = gifInfo.images.preview_gif.url;
        image.src = gifURL;
        output.appendChild(image);
        image.onclick = () => alert(`Title: ${gifInfo.title}`);
    }
}

function doFetch() {
    let input = document.querySelector("#search");
    const query = input.value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=4Qrqh60DtAYy2uStSn8Tdhk9HFVHirhf&q=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            state.apiGifData = data;
            displayOutput();
        })
}

doFetch();