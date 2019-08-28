
function init() {
    var rollButton = document.getElementById("rollButton");
    rollButton.addEventListener("click", roll);
    roll();
}

function roll() {
    var countOutcomes = 12;
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var numberOfRolls = parseInt(document.getElementById("numberOfRolls").value);

    if (numberOfRolls < 100) {
        alert("Please choose minimum 100 times roll !!!");
        return;
    }

    for (var i = 0; i < numberOfRolls; i++) {
        var rollOfFirstDice = Math.floor(Math.random() * 6) + 1;
        var rollOfSecondDice = Math.floor(Math.random() * 6) + 1;
        var rollOfDices = rollOfFirstDice + rollOfSecondDice;
        counts[rollOfDices] = counts[rollOfDices] + 1;
    }

    generateResultTable(counts, countOutcomes);
    generateResultBarGraph(counts, countOutcomes, numberOfRolls);
}

function generateResultTable(counts, countOutcomes) {
    var tableHTML = "<table>";
    tableHTML += "<tr><th>Combined Dice Number</th><th>Frequency</th></tr>";
    for (var i = 2; i <= countOutcomes; i++) {
        tableHTML += "<tr><td>";
        tableHTML += i;
        tableHTML += "</td>";
        tableHTML += "<td>";
        tableHTML += counts[i];
        tableHTML += "</td></tr>";
    }

    tableHTML += "</table>";
    var resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = tableHTML;
}

function generateResultBarGraph(counts, countOutcomes, numberOfRolls) {
    var barGraph = document.getElementById("barGraph");
    var graphHTML = "";

    for (var i = 2; i <= countOutcomes; i++) {
        var frequencyRatio = counts[i] / numberOfRolls * 100;
        frequencyRatio = frequencyRatio.toFixed(1);
        var color = getRandomColor();
        graphHTML += `
        <li>
            <span style="height:${frequencyRatio * 15}px;" title="${i}">${frequencyRatio}%</span>
        </li>`;
    }

    // background-color:${color};color:black

    barGraph.innerHTML = graphHTML;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.addEventListener("load", init);

