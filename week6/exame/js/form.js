
var selectSubject = document.querySelector('.add-subject');
var enteredStudentName = document.querySelector(".add-student-name");
var enteredGrade = document.querySelector(".add-grade");

var passedList = document.querySelector('.passed-list');
var failedList = document.querySelector('.failed-list');

var passedStatisticsBox = document.querySelector('.exam-passed-count');
var failedStatisticsBox = document.querySelector('.exam-failed-count');
var failedPercentageBox = document.querySelector('.exam-failed-percentage');
var passedPercentageBox = document.querySelector('.exam-passed-percentage');


function validateData() {
    if (enteredStudentName == "") {
        return "Enter correct student name!";
    } else {
        return true;
    }
}

var examFailedList = [];
var examPassedList = [];


function updateLists(exam) {
    if (exam.hasPassed() == true) {
        examPassedList.push(exam);
    } else {
        examFailedList.push(exam);
    }
}


function updateExamBox(exam) {
    if (exam.hasPassed()) {
        passedList.innerHTML += '<li>' + exam.getExamInfo() + '</li>';
    } else {
        failedList.innerHTML += '<li>' + exam.getExamInfo() + '</li>';
    }
}

function updateStatisticsBox() {
    var totalExams = examFailedList.length + examPassedList.length;
    failedStatisticsBox.innerHTML = examFailedList.length;
    passedStatisticsBox.innerHTML = examPassedList.length;
    passedPercentageBox.innerHTML = (examPassedList.length / totalExams) + '%'; 
    failedPercentageBox.innerHTML = (examFailedList.length / totalExams) + '%';
}

function resetInput() {
    selectSubject.value = '';
    enteredStudentName.value = '';
    enteredGrade.value = '';
}

function evaluate() {
    var subject = new Subject(selectSubject.value);
    console.log(subject);
    var student = new Student(enteredStudentName.value, 'nesto');
    console.log(student);
    var exam = new Exam(subject, student, enteredGrade.value);
    console.log(exam);
    updateLists(exam);
    updateExamBox(exam);
    updateStatisticsBox();
    resetInput();


}

var addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', evaluate)



///app.js

