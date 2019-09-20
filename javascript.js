class Person {
    constructor(first_name, last_name) {
        if (new.target === Person) {
            throw new TypeError("Cannot construct Person instances!");
        }
        this._first_name = first_name;
        this._last_name = last_name;
    }

    get first_name () { return this._first_name }
    set first_name (first_name) { this._first_name = first_name }
    get last_name ()  { return this._last_name }
    set last_name (last_name) { this._last_name = last_name}
}

class Doctor extends Person {
    constructor(first_name, last_name, specialty) {
        super(first_name, last_name);
        this._specialty = specialty;
        this.logDoctor();
    }

    get specialty () { return this._specialty }
    set specialty (specialty) { this._specialty = specialty }
    logDoctor() {
        let today = buildDate();
        document.writeln('[' + today + ']' + ' Kreiran doktor ' + this.first_name + '<br/>');
    }
}

class Patient extends Person {
    constructor(first_name, last_name, social_security_number, health_carton_number) {
        super(first_name, last_name);
        this._social_security_number = social_security_number;
        this._health_carton_number = health_carton_number;
        this._doctor = null;
        this.logPatient();
    }

    get social_security_number () { return this._social_security_number }
    set social_security_number (social_security_number) { 
        this._social_security_number = social_security_number
    }
    get health_carton_number () { return this._health_carton_number }
    set health_carton_number (health_carton_number) {
        this._health_carton_number = health_carton_number
    }

    get doctor () { return this._doctor }
    set doctor (doctor) { 
        this._doctor = doctor;
        this.logSet();
    }

    logSet() {
        let today = buildDate();
        document.writeln('[' + today + ']' + ' Pacijent ' + this.first_name 
        + ' odabrao doktora ' + this.doctor.first_name + '<br/>');
    }

    logPatient() {
        let today = buildDate();
        document.writeln('[' + today + ']' + ' Kreiran pacijent ' + this.first_name + '<br/>');
    }
}

function buildDate() {
    var now = new Date();
    var dd = now.getDate();
    var mm = now.getMonth() + 1;
    var HH = now.getHours();
    var MM = now.getMinutes();
    var yyyy = now.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    } 
    if (mm < 10) {
    mm = '0' + mm;
    } 
    let today = dd + '.' + mm + '.' + yyyy + ' ' + HH + ':' + MM;
    return today;
}

class LabExam {
    constructor(date, doctor, patient) {
        if (new.target === LabExam) {
            throw new TypeError('Cannot construct LabExam instances!');
        }

        this._date = date;
        this._doctor = doctor;
        this._patient = patient;        
    }

    get date () { return this._date }
    set date (date) { this._date = date }
    get doctor () { return this._doctor }
    set doctor (doctor) { this._doctor = doctor }
    get patient () { return this._patient }
    set patient (patient) { this._patient = patient }
}

class BloodPressureExam extends LabExam {
    constructor(date, doctor, patient) {
        super(date, doctor, patient);
        this._upper_value = 0;
        this._lower_value = 0;
        this._heart_rate = 0;
    }

    get upper_value () { return this._upper_value }
    set upper_value (upper_value) { this._upper_value = upper_value }
    get lower_value () { return this._lower_value }
    set lower_value (lower_value) { this._lower_value = lower_value }
    get heart_rate () { return this._heart_rate }
    set heart_rate (heart_rate) { this._heart_rate = heart_rate }

    doExamination() {
        this._upper_value = Math.floor(Math.random() * 150) + 90;
        this._lower_value = Math.floor(Math.random() * 100) + 60;
        this._heart_rate = Math.floor(Math.random() * 90) + 50;
        console.log("Blood pressure examination: ");
        console.log("Patient: " + this.patient.first_name + " " + this.patient.last_name);
        console.log("Doctor: " + this.doctor.first_name + " " + this.doctor.last_name);
        console.log("Upper value: " + this._upper_value);
        console.log("Lower value: " + this._lower_value);
        console.log("Heart rate: " + this._heart_rate);
        this.logExamination();
    }

    logExamination() {
        let today = buildDate();
        document.writeln('[' + today + ']' + ' Doktor ' + this.doctor.first_name 
        + ' obavio merenje krvnog pritiska nad pacijentom ' + this.patient.first_name + '<br/>');
    }
}

class SugarLevelExam extends LabExam {
    constructor(date, doctor, patient) {
        super(date, doctor, patient);
        this._value = 0;
        this._time_of_last_meal = '';
    }

    get value () { return this._value }
    set value (value) { this._value = value }
    get time_of_last_meal () { return this._time_of_last_meal }
    set time_of_last_meal (time_of_last_meal) { this._time_of_last_meal = time_of_last_meal }

    doExamination() {
        this._value = Math.floor(Math.random() * 15) + 1;
        let hours = Math.floor(Math.random() * 23);
        if (hours < 10){
            hours = '0' + hours;
        }
        let minutes = Math.floor(Math.random() * 59);
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        this._time_of_last_meal = hours + ':' + minutes;
        console.log("Sugar level examination: ");
        console.log("Patient: " + this.patient.first_name + " " + this.patient.last_name);
        console.log("Doctor: " + this.doctor.first_name + " " + this.doctor.last_name);
        console.log("Value: " + this._value);
        console.log("Time of last meal: " + this._time_of_last_meal);
        this.logExamination();
    }

    logExamination() {
        let today = buildDate();
        document.writeln('[' + today + ']' + ' Doktor ' + this.doctor.first_name 
        + ' obavio merenje nivoa secera nad pacijentom ' + this.patient.first_name + '<br/>');
    }
}

class CholesterolLevelExam extends LabExam {
    constructor(date, doctor, patient) {
        super(date, doctor, patient);
        this._value = 0;
        this._time_of_last_meal = '';
    }

    get value () { return this._value }
    set value (value) { this._value = value }
    get time_of_last_meal () { return this._time_of_last_meal }
    set time_of_last_meal (time_of_last_meal) { this._time_of_last_meal = time_of_last_meal }

    doExamination() {
        this._value = Math.floor(Math.random() * 50) + 20;
        let hours = Math.floor(Math.random() * 23);
        if (hours < 10){
            hours = '0' + hours;
        }
        let minutes = Math.floor(Math.random() * 59);
        if (minutes < 10){
            minutes = '0' + minutes;
        }
        this._time_of_last_meal = hours + ':' + minutes;
        console.log("Cholesterol level examination: ");
        console.log("Patient: " + this.patient.first_name + " " + this.patient.last_name);
        console.log("Doctor: " + this.doctor.first_name + " " + this.doctor.last_name);
        console.log("Value: " + this._value);
        console.log("Time of last meal: " + this._time_of_last_meal);
        this.logExamination();
    }

    logExamination() {
        let today = buildDate();
        document.writeln('[' + today + ']' + ' Doktor ' + this.doctor.first_name 
        + ' obavio merenje nivoa holesterola nad pacijentom ' + this.patient.first_name + '<br/>');
    }
}


var doc = new Doctor('Marko', 'Markovic', 'Hirurg');
var pat = new Patient('Dragan', 'Draganovic', '15393295723', '235235325');

pat.doctor = doc;

var blood_pressure_exam = new BloodPressureExam(new Date(2019,10,05), doc, pat);
var sugar_level_exam = new SugarLevelExam(new Date(2019,10,05), doc, pat)
var cholesterol_level_exam = new CholesterolLevelExam(new Date(2019,10,05), doc, pat)

blood_pressure_exam.doExamination();
console.log('--------------------------------');
sugar_level_exam.doExamination();
console.log('--------------------------------');
cholesterol_level_exam.doExamination();