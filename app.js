function register() {
    var first = document.getElementById('firstname');
    var Sur = document.getElementById('surename');
    var conf = document.getElementById('confidential');
    var pass = document.getElementById('password');
    var dayselect = document.getElementById('day');
    var monthselect = document.getElementById('month');
    var yearselect = document.getElementById('year');
    var selectedDay = dayselect.value;
    var selectedMonth = monthselect.value;
    var selectedYear = yearselect.value;
    var genderElements = document.getElementsByName("gender");
    var selectedGender;
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            selectedGender = genderElements[i].value;
            break;
        }
    }
    console.log(first.value)
    console.log(Sur.value)
    console.log(conf.value)
    console.log(pass.value)
    console.log("Selected Date of Birth: " + selectedDay + " " + selectedMonth + " " + selectedYear);
    console.log(selectedGender)

}