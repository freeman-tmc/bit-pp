var mainModule = (function () {

    var examFailedList = [];
    var examPassedList = [];
    

    function updateLists(exam) {
        if (exam.hasPassed() == true) {
            examPassedList.push(exam);
        } else {
            examFailedList.push(exam);
        }
    }

    function evaluate() {
        var data = UIModule.collectData();
    
        var validationResult = UIModule.validation(data);

        if (validationResult == false) {
            return;
        }

        var exam = dataModule.createExam(data.subject, data.name, data.surname, data.grade);
        updateLists(exam);

        UIModule.updateExamBox(exam);
        UIModule.updateStatisticsBox(examFailedList, examPassedList);
    }

    var addButton = document.querySelector('.add-btn');  // prebaciti u UIModule
    addButton.addEventListener('click', evaluate);


})(dataModule, UIModule);
