function Exam(subject, student, grade) {
    this.subject = subject.getSubjectName();
    this.student = student;
    this.grade = parseInt(grade);
}

Exam.prototype.getExamInfo = function () {
    return this.subject + " " + this.student.getStudentData();
}

Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return true;
    } else {
        return false;
    }
}