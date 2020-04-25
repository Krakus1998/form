var FieldType;
(function (FieldType) {
    FieldType["InputBox"] = "input";
    FieldType["multiLine"] = "textarea";
    FieldType["chooseBox"] = "select";
    FieldType["checkBox"] = "checkbox";
    FieldType["email"] = "email";
})(FieldType || (FieldType = {}));
var InputField = /** @class */ (function () {
    function InputField(name, label, type) {
        this.element =
            document.createElement(type);
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
var textAreaField = /** @class */ (function () {
    function textAreaField(name, label, type) {
        this.element = document.createElement(type);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    textAreaField.prototype.render = function () {
        return this.element;
    };
    textAreaField.prototype.getValue = function () {
        return this.element.value;
    };
    return textAreaField;
}());
var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, label) {
        this.element = document.createElement(FieldType.InputBox);
        this.element.setAttribute('type', FieldType.checkBox);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    CheckboxField.prototype.render = function () {
        return this.element;
    };
    CheckboxField.prototype.getValue = function () {
        return this.element.checked == true ? 'Tak,bardzo chętnie' : 'Nie ma mowy';
    };
    return CheckboxField;
}());
var SelectInputText = /** @class */ (function () {
    function SelectInputText(name, label, selectOption) {
        this.element = document.createElement(FieldType.chooseBox);
        for (var i = 0; i < selectOption.length; i++) {
            var option = document.createElement('option');
            option.text = selectOption[i];
            this.element.appendChild(option);
        }
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    SelectInputText.prototype.render = function () {
        return this.element;
    };
    SelectInputText.prototype.getValue = function () {
        return this.element.value;
    };
    return SelectInputText;
}());
var EmailField = /** @class */ (function () {
    function EmailField(name, label) {
        this.element = document.createElement(FieldType.InputBox);
        this.element.setAttribute('type', FieldType.email);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    EmailField.prototype.render = function () {
        return this.element;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
        this.fields.push(new InputField('Surname', 'Surname', FieldType.InputBox));
        this.fields.push(new InputField('Name', 'Name', FieldType.InputBox));
        this.fields.push(new EmailField('Email', 'Email'));
        this.fields.push(new SelectInputText('Wybrany kierunek studiów', 'Wybrany kierunek studiów', ['Mechanik', 'Kucharz', 'Programista']));
        this.fields.push(new SelectInputText('Test', 'Test', ['Fryzjer', 'Nauczyciel', 'KierowcaBombowca']));
        this.fields.push(new CheckboxField('Czy preferujesz e-learning', 'Czy preferujesz e-learning'));
        this.fields.push(new textAreaField('Uwagi', 'Uwagi', FieldType.multiLine));
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
