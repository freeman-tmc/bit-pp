var mainModule = (function () {

    var examFailedList = [];
    var examPassedList = [];
    

    function evaluate() {
        var data = UIModule.collectData();
    
        var validationResult = UIModule.validation(data);

        if (validationResult == false) {
            return;
        }

        var exam = dataModule.createExam(data.subject, data.name, data.surname, data.grade);
        statsModule.updateLists(exam);

        UIModule.updateExamBox(exam);
        UIModule.updateStatisticsBox(statsModule);
    }

    UIModule.addButton.addEventListener('click', evaluate);


})(dataModule, UIModule, statsModule);
