console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
.then(resp => resp.json())
.then(function(json) {
    for (const imageLink of json) {
        let imgElem = document.createElement('img');
        imgElem.src = imageLink;
        document.body.appendChild(imgElem);
    }
})