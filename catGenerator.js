function generateCat () {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat");
    image.src = "http://thecatapi.com/api/images/get?formatsrc&type=gif&size=small";
    div.appendChild(image);
};