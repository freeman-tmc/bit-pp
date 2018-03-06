var statsModule = (function() {


    var examFailedList = [];
    var examPassedList = [];
    
//populating lists
    function updateLists(exam) {
        if (exam.hasPassed() == true) {
            examPassedList.push(exam);
        } else {
            examFailedList.push(exam);
        }
    }


    //colecting statistics
    function getTotalNumOfExams() {
        var totalNumOfExams = examFailedList.length + examPassedList.length;
        return totalNumOfExams;
    }

    function getNumOfPassedExams() {
        var passedExams = examPassedList.length;
        return passedExams;
    }

    function getNumOfFailedExams() {
        var failedExams = examFailedList.length;
        return failedExams;
    }

    function getPercentOfPassedExams() {
        var passedExamsPercent = parseInt((examPassedList.length / getTotalNumOfExams()) * 100) + '%';
        return passedExamsPercent;
    }

    function getPercentOfFailedExams() {
        var failedExamsPercent = parseInt((examFailedList.length / getTotalNumOfExams()) * 100) + '%';
        return failedExamsPercent;
    }

    return {
        updateLists: updateLists,
        getTotalNumOfExams: getTotalNumOfExams,
        getNumOfPassedExams: getNumOfPassedExams,
        getNumOfFailedExams: getNumOfFailedExams,
        getPercentOfPassedExams: getPercentOfPassedExams,
        getPercentOfFailedExams: getPercentOfFailedExams 
    }


})();