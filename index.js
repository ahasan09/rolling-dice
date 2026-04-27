
function init() {
    roll();
}

function roll() {
    const countOutcomes = 12;
    const numberOfRolls = 1000;
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < numberOfRolls; i++) {
        const rollOfFirstDice = Math.floor(Math.random() * 6) + 1;
        const rollOfSecondDice = Math.floor(Math.random() * 6) + 1;
        const rollOfDices = rollOfFirstDice + rollOfSecondDice;
        counts[rollOfDices] = counts[rollOfDices] + 1;
    }

    generateResultTable(counts, countOutcomes);
    generateResultBarGraph(counts, countOutcomes, numberOfRolls);
}

function generateResultTable(counts, countOutcomes) {
    let tableHTML = "<table>";
    tableHTML += "<tr><th>Combined Dice Number</th><th>Frequency</th></tr>";
    for (let i = 2; i <= countOutcomes; i++) {
        tableHTML += "<tr><td>";
        tableHTML += i;
        tableHTML += "</td>";
        tableHTML += "<td>";
        tableHTML += counts[i];
        tableHTML += "</td></tr>";
    }

    tableHTML += "</table>";
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = tableHTML;
}

function generateResultBarGraph(counts, countOutcomes, numberOfRolls) {
    const barGraph = document.getElementById("barGraph");
    let graphHTML = "";

    for (let i = 2; i <= countOutcomes; i++) {
        let frequencyRatio = counts[i] / numberOfRolls * 100;
        frequencyRatio = frequencyRatio.toFixed(1);
        graphHTML += `
        <li>
            <span style="height:${frequencyRatio * 15}px;" title="${i}">${frequencyRatio}%</span>
        </li>`;
    }

    barGraph.innerHTML = graphHTML;
}

window.addEventListener("load", init);
