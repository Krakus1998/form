var FieldType;
(function (FieldType) {
    FieldType[FieldType["textBox"] = 1] = "textBox";
    FieldType[FieldType["multiLine"] = 2] = "multiLine";
    FieldType[FieldType["data"] = 3] = "data";
    FieldType[FieldType["chooseBox"] = 4] = "chooseBox";
    FieldType[FieldType["checkBox"] = 5] = "checkBox";
})(FieldType || (FieldType = {}));
var InputField = /** @class */ (function () {
    function InputField(name, label) {
        this.element =
            document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    InputField.prototype.render = function () {
        return this.element;
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        console.log(this.fields);
        this.formElement = document.getElementById(id);
        this.fields.push(new InputField('Surname', 'Surname'));
        this.fields.push(new InputField('Name', 'Name'));
        this.fields.push(new InputField('Email', 'Email'));
        this.fields.push(new InputField('Date', 'Date'));
        this.fields.push(new InputField('Phone', 'Phone'));
    }
    Form.prototype.render = function () {
        for (var i = 0; i < this.fields.length; i++) {
            document.body.append(this.fields[i].label);
            document.body.appendChild(document.createElement('br'));
            document.body.appendChild(this.fields[i].render());
            document.body.appendChild(document.createElement('br'));
        }
    };
    Form.prototype.getValue = function () {
        // TODO: pętla wyświetlająca wartości kolejnych pól
        for (var i = 0; i < this.fields.length; i++) {
            document.body.append(this.fields[i].label + ': ' + this.fields[i].getValue());
            document.body.appendChild(document.createElement('br'));
        }
        document.body.appendChild(document.createElement('br'));
    };
    return Form;
}());
var form = new Form('2');
window.addEventListener('load', function () {
    form.render();
});
document.getElementById("Get").addEventListener("click", function () { return form.getValue(); });
