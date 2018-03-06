var dataModule = (function () {

    //subject constructor
    function Subject(name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function () {
        return this.name;
    }
    //student constructor
    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Student.prototype.getStudentData = function () {
        return this.name + " " + this.surname;
    }

    //exam constructor
    function Exam(subject, student, grade) {
        this.subject = subject.getSubjectName();
        this.student = student;
        this.grade = parseInt(grade);
    }

    Exam.prototype.getExamInfo = function () {
        return this.subject + ", " + this.student.getStudentData() + ' ' + this.grade;
    }

    Exam.prototype.hasPassed = function () {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }

    function createExam(name, studentName, surname, grade) {
        var subject = new Subject(name);
        var student = new Student(studentName, surname);
        var exam = new Exam(subject, student, grade);
        return exam;

    }    

    return {
        createExam: createExam
    }


})();