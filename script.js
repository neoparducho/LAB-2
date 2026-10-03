alert("Welcome to the Student Score Evaluation System!");

function evaluateScore(score) {

    if (score === "") {
        return "Invalid score";
    }

    if (isNaN(score)) {
        return "Invalid score";
    }

    score = Number(score);

    if (score <= 0) {
        return "Invalid score";
    }

    if (score >= 90 && score <= 100) {
        return "Excellent";
    } else if (score >= 75 && score <= 89) {
        return "Passed";
    } else if (score < 75) {
        return "Failed";
    } else {
        return "Invalid score";
    }
}

let studentName = prompt("Enter your name:");

if (studentName === null || studentName.trim() === "") {

    alert("Please enter your name.");

    document.getElementById("result").innerHTML =
        '<p class="invalid">No name was entered.</p>';

} else {

    let studentScore = prompt("Enter your score:");

    let proceed = confirm("Do you want to evaluate your score?");

    if (proceed) {

        let remark = evaluateScore(studentScore);
        let resultClass = "";

        if (remark === "Excellent") {
            resultClass = "excellent";
        } else if (remark === "Passed") {
            resultClass = "passed";
        } else if (remark === "Failed") {
            resultClass = "failed";
        } else {
            resultClass = "invalid";
        }

        document.getElementById("result").innerHTML =
            "<h2>Result</h2>" +
            "<p><b>Name:</b> " + studentName + "</p>" +
            "<p><b>Score:</b> " + studentScore + "</p>" +
            "<p><b>Remark:</b> <span class='" + resultClass + "'>" +
            remark + "</span></p>";

    } else {

        document.getElementById("result").innerHTML =
            '<p class="invalid">Evaluation cancelled.</p>';
    }
}
