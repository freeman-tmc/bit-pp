var UIModule = (function () {

    var selectSubject = document.querySelector('.add-subject');
    var enteredStudentName = document.querySelector(".add-student-name");
    var enteredGrade = document.querySelector(".add-grade");

    var passedList = document.querySelector('.passed-list');
    var failedList = document.querySelector('.failed-list');

    var passedStatisticsBox = document.querySelector('.exam-passed-count');
    var failedStatisticsBox = document.querySelector('.exam-failed-count');
    var failedPercentageBox = document.querySelector('.exam-failed-percentage');
    var passedPercentageBox = document.querySelector('.exam-passed-percentage');
    var totalStudents = document.querySelector('#total');

    var addButton = document.querySelector('.add-btn');


    function collectData() {
        var formData = {};
        formData.subject = selectSubject.value;
        var studentFullName = enteredStudentName.value;
        formData.nameArr = studentFullName.split(' ');
        formData.name = formData.nameArr[0];
        formData.surname = formData.nameArr[1];
        formData.grade = enteredGrade.value;
        return formData;
    }

    function validation(formData) {  // dodati funkciju unutar ove koja vraca poruke
        var error = document.querySelector('p');
        if (formData.nameArr.length < 2) {
            error.innerHTML = 'Please enter full name';
            return false;
        } else if(formData.name[0] !== formData.name[0].toUpperCase() || formData.surname[0] !== formData.surname[0].toUpperCase()){
            error.innerHTML = 'Name and surname must start with capital letter';
            return false;
        } else {

            error.innerHTML = '';
            if (formData.grade < 0 || formData.grade > 10 || formData.grade == '') {
                error.innerHTML = 'Please enter valid grade';
                return false;
            } else {
                error.innerHTML = '';
                return true;
            }
        }
    }


    function updateExamBox(exam) {
        if (exam.hasPassed()) {
            passedList.innerHTML += '<li>' + exam.getExamInfo() + '</li>';
        } else {
            failedList.innerHTML += '<li>' + exam.getExamInfo() + '</li>';
        }
    }

    //uses statsModule 
    function updateStatisticsBox(statsObject) { 

        failedStatisticsBox.innerHTML = statsObject.getNumOfFailedExams();
        passedStatisticsBox.innerHTML = statsObject.getNumOfPassedExams();
        passedPercentageBox.innerHTML = statsObject.getPercentOfPassedExams();
        failedPercentageBox.innerHTML = statsObject.getPercentOfFailedExams();
        totalStudents.innerHTML = statsObject.getTotalNumOfExams();
    }

    return {
        collectData: collectData,
        validation: validation,
        updateExamBox: updateExamBox,
        updateStatisticsBox: updateStatisticsBox,
        addButton: addButton
    }

})();