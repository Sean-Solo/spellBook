var className = [];

var spellList = [];

var spellInfo = [];

var spellData = {};

const classLink = document.querySelector("#classSpells")

const classBtns = document.querySelectorAll(".classes");

for(i = 0; i < classBtns.length; i++){
    classBtns[i].addEventListener("click", function(){
        if (className.indexOf(this.innerText) === -1) {
            className.push(this.innerText);
            this.classList.replace("btn-outline-light", "btn-light");
        }
        else {
            className.splice(className.indexOf(this.innerText), 1);
            this.classList.replace("btn-light", "btn-outline-light");
        }
        console.log(className)

    });
}

classLink.addEventListener("click", function (){
    window.location.href = `file:///C:/Users/Sean.Brickley/Documents/OneDrive/Programming/D&D%20project/spells.html?limit=400&dnd_class=${className.toString()}`;
})


function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.results.length; i++) {
        var div = document.createElement("div");
        div.innerHTML ="Name: " + data.results[i].name + " ___" + "Level: " + data.results[i].level;
        mainContainer.appendChild(div);
    }
}


           
  































