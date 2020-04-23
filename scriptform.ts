enum FieldType {
    textBox = 1,
    multiLine = 2,
    data = 3,
    chooseBox = 4,
    checkBox = 5,
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
    constructor(name: string, label: string) {
    this.element =
   <HTMLInputElement>document.createElement('input');
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

class 

   class Form {
    fields: Field[];
    formElement: HTMLElement;
    constructor(id: string) {
    this.fields = new Array();
    console.log(this.fields)
    this.formElement = document.getElementById(id);
    this.fields.push(new InputField('Surname','Surname'))
    this.fields.push(new InputField('Name','Name'))
    this.fields.push(new InputField('Email','Email'))
    this.fields.push(new InputField('Date','Date'))
    this.fields.push(new InputField('Phone','Phone'))
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