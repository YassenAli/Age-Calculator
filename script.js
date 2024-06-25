function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    var d = today.getDate() - dob.getDate();

    if (d < 0) {
        m--;
        d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (m < 0) {
        age--;
        m += 12;
    }
    document.getElementById('result').textContent = 'Your age is: ' + age + ' years, ' + m + ' months, and ' + d + ' days.';
}
const ageCalculatorForm = document.getElementById('age-calculator-form');
ageCalculatorForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
});