class EmployeePayrollData{
    get id() {return this._id;}
    set id(id){
        this._id=id;
    }
    get name(){return this._name;}
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name=name;
        else throw 'Name is Incorrect!';
    }
    get profilepic(){return this._profilepic;}
    set profilepic(profilepic){
        this._profilepic=profilepic;
    }
    get gender(){return this._gender;}
    set gender(gender){
        this._gender=gender;
    }
    get department(){return this._department;}
    set department(department){
        this._department=department;
    }
    get salary(){return this._salary;}
    set salary(salary){
        this._salary=salary;
    }
    get note(){return this._note;}
    set note(nate){
        this._note=note;
    }
    get startDate(){return this._startDate;}
    set startDate(startDate){
        this._startDate=startDate;
    }
    toString(){
        const option={year:'numeric',month:'long',day:'numeric'};
        const empDate=!this.startDate? "undefined":this.startDate.toLocalDateString("en-US",options);
        return "id="+this.id+",name='"+this.name+",gender='"+this.gender+", profilePic='"+this.profilepic+",department="+this.department+",salary="+ this.salary+",startDate="+empDate+",note="+ this.note;
        
    }
}
window.addEventListener('DOMContentLaded', (event)=> {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new employeePayrollData()).name=name.ariaValueMax;;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });
     const salary = document.querySelector('#salary');
     const output = document.querySelector('.salary-output');
     output.textContent = salary.value;
     salary.addEventListener('input', function(){
        output.textContent = salary.value;

     });

});
const saave=()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
    }catch(e){
        return;
    }
}
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }catch(e){
        settextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilepic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender= getSelectedValues('[name=gender]').pop();
    employeePayrollData.department= getSelectedValues('[name=department]').pop();
    employeePayrollData.salary= getSelectedValues('#salary');
    employeePayrollData.gender= getSelectedValues('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue)=>{
    let allItems = document.querySelectorAll(propertyValue);
    let aetItems = [];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
const save=()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
        createandUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}
function createAndUpdateStorage(employeePayrollData){
    
}