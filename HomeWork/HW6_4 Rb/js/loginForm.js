function LoginFormConstructor(parent){
    this.login='';
    this.getLogin=()=>{return this.login};
    this.hideButton=function(value, type){
        if((type==='login' && (value==='' || this.p.password==='')) || (type==='password' && (value==='' || this.login===''))){
            this.btn.style='visibility:hidden';
        }else {
            this.btn.style='visibility:visible';
        }
    }
    const loginInput=document.createElement('input');
    loginInput.oninput=()=>{
        this.login=loginInput.value;
        this.hideButton(loginInput.value, 'login');
    } 
    const labelTemp=document.createElement('label');
    labelTemp.innerText='Login:';
    labelTemp.style="display: flex; justify-content: space-between; margin-left: 20px;" ;
    parent.appendChild(labelTemp);
    labelTemp.appendChild(loginInput);
    this.p=new Password(parent, true);
    this.p.onChange=(param)=>{
        this.p.password=param;
        this.hideButton(param, 'password');
    }
    this.btn=document.createElement('button');
    this.btn.innerText='Login';
    this.btn.style='visibility:hidden';
    this.btn.onclick=()=>{
        Object.hasOwn(this, 'clickBtn')?this.clickBtn(this.login, this.p.password):'';
    }
    parent.appendChild(this.btn);
}
function Password(parent, open){
    this.password='';
    this.checkbox=open;
    this.setValue=function(data){this.password=data; this.nameTemp.value=data};
    this.getValue=function(){return this.password};
    this.setOpen=function(data){this.checkbox=data; checkTemp.checked=data; data?this.nameTemp.type="text":this.nameTemp.type='password'};
    this.getOpen=function(){return this.checkbox};
    this.nameTemp=document.createElement('input'); 
    this.nameTemp.oninput=()=>Object.hasOwn(this, 'onChange')?this.onChange(this.nameTemp.value):'';
    open?this.nameTemp.type="text":this.nameTemp.type='password';
    this.labelPassword=document.createElement('label');
    this.labelPassword.innerText='Password:';
    this.labelPassword.style="display: flex; justify-content: start; margin-left: 20px" ;
    parent.appendChild(this.labelPassword);
    this.labelPassword.appendChild(this.nameTemp);
    const checkTemp=document.createElement('input'); 
    checkTemp.type='checkbox';
    checkTemp.checked=open;
    checkTemp.oninput=()=>{
        Object.hasOwn(this, 'onOpenChange')?this.onOpenChange(checkTemp.checked):'';
        checkTemp.checked?this.nameTemp.type="text":this.nameTemp.type='password';
    }
    this.labelPassword.appendChild(checkTemp);
}