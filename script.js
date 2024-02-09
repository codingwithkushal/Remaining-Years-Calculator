// function totalYears(age) {
//     var remaining = 90 - age;
//     var days = remaining * 365;
//     var weeks = remaining * 52;
//     var months = remaining * 12;
//     alert("You have " + days + " days, " + weeks + " weeks and " + months + " months days to live." );
// }
// totalYears(prompt())
// sef retuen code 
function totalYears(age) {
    var remaining = 90 - age;
    var days = remaining * 365;
    var weeks = remaining * 52;
    var months = remaining * 12;
    var year  = remaining * 1;
    alert("You have " + days + " days, " + weeks + " weeks, " + months + " months" + year + " and year to live.");
}

document.getElementById("calculateButton").addEventListener("click", function() {
    var ageInput = document.getElementById("ageInput").value;
    var ageRegex = /^\d{2}$/; // Regex for exactly two digits
    if (ageRegex.test(ageInput)) {
        var age = parseInt(ageInput);
        totalYears(age);
    } else {
        alert("Please enter a valid two-digit number.");
    }
});
