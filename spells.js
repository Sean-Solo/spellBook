const BASE_URL = "https://api.open5e.com/search/";

const params = new URLSearchParams(window.location.search)

var searchParams = params.toString();

var url = BASE_URL + "?" +  searchParams;

var spellData = [];

const moreButton = document.getElementById("moreSpells");

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.results.length; i++) {
        var spellName = data.results[i].name;
        var spellText = data.results[i].text.replace(/&#39;/g, "'");
        var divCardRow = document.createElement("div");
            divCardRow.setAttribute("id", "hover");
            divCardRow.setAttribute("class", "row bg-light ml-5 mr-5 border-top border-dark rounded-top");
            divCardRow.setAttribute("data-toggle", "collapse");
            divCardRow.setAttribute("data-target", "#collapse" + i.toString());
        var divCardCol1 = document.createElement("div");
            divCardCol1.setAttribute("class", "col");
        var divCardBody1 = document.createElement("div");
            divCardBody1.setAttribute("class", "card-body text-center");
        var pCardText1 = document.createElement("p");
            pCardText1.setAttribute("class", "card-text");
            pCardText1.innerHTML = data.results[i].name; 
        var divCardCol2 = document.createElement("div");
            divCardCol2.setAttribute("class", "col");
        var divCardBody2 = document.createElement("div");
            divCardBody2.setAttribute("class", "card-body text-center");
        var pCardText2 = document.createElement("p");
            pCardText2.setAttribute("class", "card-text");
            pCardText2.innerHTML = data.results[i].level;
        var divCardCol3 = document.createElement("div");
            divCardCol3.setAttribute("class", "col");
        var divCardBody3 = document.createElement("div");
            divCardBody3.setAttribute("class", "card-body text-center");
        var pCardText3 = document.createElement("p");
            pCardText3.setAttribute("class", "card-text");
            pCardText3.innerHTML = data.results[i].school;
        var divCardCol4 = document.createElement("div");
            divCardCol4.setAttribute("class", "col");
        var divCardBody4 = document.createElement("div");
            divCardBody4.setAttribute("class", "card-body text-center");
        var pCardText4 = document.createElement("p");
            pCardText4.setAttribute("class", "card-text");
            pCardText4.innerHTML = data.results[i].dnd_class;
        var divCollapse = document.createElement("div");
            divCollapse.setAttribute("class", "collapse bg-light ml-5 mr-5 rounded-bottom");
            divCollapse.setAttribute("id", "collapse" + i.toString());
            divCollapse.setAttribute("data-parent", ".row");
        var divCardSpellText = document.createElement("div");
            divCardSpellText.setAttribute("class", "card-body bg-light ml-5 mr-5");
        var pCardSpellText = document.createElement("p");
            pCardSpellText.setAttribute("class", "bg-light");
            pCardSpellText.innerText = spellText.replace(spellName, " ");
            mainContainer.appendChild(divCardRow);
            divCardRow.appendChild(divCardCol1);
            divCardCol1.appendChild(divCardBody1);
            divCardBody1.appendChild(pCardText1);
            divCardRow.appendChild(divCardCol2);
            divCardCol2.appendChild(divCardBody2);
            divCardBody2.appendChild(pCardText2);
            divCardRow.appendChild(divCardCol3);
            divCardCol3.appendChild(divCardBody3);
            divCardBody3.appendChild(pCardText3);
            divCardRow.appendChild(divCardCol4);
            divCardCol4.appendChild(divCardBody4);
            divCardBody4.appendChild(pCardText4);
            mainContainer.appendChild(divCollapse);
            divCollapse.appendChild(divCardSpellText);
            divCardSpellText.appendChild(pCardSpellText);
    }
}

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    if (data.next !== null){
    spellData = data.next;
    }
    else if (data.count === 0) {
        alert("No spells found =(")
    }
    appendData(data);
    })
.catch(function (err) {
    console.log('error: ' + err);
});






