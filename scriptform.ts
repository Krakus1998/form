enum FieldType {
    InputBox = 'input',
    multiLine = 'textarea',
    chooseBox = 'select',
    checkBox = 'checkbox',
    email ='email',
}

interface Field {
    name: string;
    label: string;
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
}
 
class InputField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name: string, label: string , type:FieldType) {
    this.element =
   <HTMLInputElement>document.createElement(<string>type);
    this.name = name;
    this.label = label;
    this.element.name = this.name;
    }
    render(): HTMLElement {
    return this.element;
    }
    getValue(): any {
    return this.element.value
    }
}

class textAreaField implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLTextAreaElement;
    constructor(name: string, label: string, type: FieldType) {
        this.element =<HTMLTextAreaElement>document.createElement(<string>type);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        }
        render(): HTMLElement {
        return this.element;
        }
        getValue(): any {
        return this.element.value
        }
}

class CheckboxField implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name: string, label: string) {
        this.element =<HTMLInputElement>document.createElement(FieldType.InputBox);
        this.element.setAttribute('type',FieldType.checkBox);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        }
        render(): HTMLElement {
        return this.element;
        }
        getValue(): any {
        return this.element.checked==true?'Tak,bardzo chętnie':'Nie ma mowy';
        }
}

class SelectInputText implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLSelectElement;
    constructor(name: string, label: string, selectOption: Array<string>) {
        this.element =document.createElement(FieldType.chooseBox);
        for(let i=0;i<selectOption.length;i++){
            let option =document.createElement('option')
            option.text = selectOption[i]
            this.element.appendChild(option);          
        }
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        }
        render(): HTMLElement {
        return this.element;
        }
        getValue(): any {
        return this.element.value
        }
}

class EmailField implements Field{
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name: string, label: string) {
        this.element =<HTMLInputElement>document.createElement(FieldType.InputBox);
        this.element.setAttribute('type',FieldType.email);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        }
        render(): HTMLElement {
        return this.element;
        }
        getValue(): any {
        return this.element.value
        }
}
   class Form {
    fields: Field[];
    formElement: HTMLElement;
    constructor(id: string) {
    this.fields = new Array();
    this.formElement = document.getElementById(id);
    this.fields.push(new InputField('Surname','Surname',FieldType.InputBox))
    this.fields.push(new InputField('Name','Name',FieldType.InputBox))
    this.fields.push(new EmailField('Email','Email'))
    this.fields.push(new SelectInputText('Wybrany kierunek studiów','Wybrany kierunek studiów',['Mechanik','Kucharz','Programista']))
    this.fields.push(new SelectInputText('Test','Test',['Fryzjer','Nauczyciel','KierowcaBombowca']))
    this.fields.push(new CheckboxField('Czy preferujesz e-learning','Czy preferujesz e-learning'))
    this.fields.push(new textAreaField('Uwagi','Uwagi',FieldType.multiLine))
    }
    render(): void {
        for(let i=0;i<this.fields.length;i++){
            document.body.append(this.fields[i].label)
            document.body.appendChild(document.createElement('br'))
            document.body.appendChild(this.fields[i].render())
            document.body.appendChild(document.createElement('br'))                  
        }      
    }
    getValue(): void {
   // TODO: pętla wyświetlająca wartości kolejnych pól
        for(let i=0;i<this.fields.length;i++){
            document.body.append(this.fields[i].label+': '+this.fields[i].getValue())
            document.body.appendChild(document.createElement('br'))                
        }
        document.body.appendChild(document.createElement('br'))
    }
   }
   let form = new Form('2')
window.addEventListener('load', () => {
    form.render();
})
document.getElementById("Get").addEventListener("click",() => form.getValue())