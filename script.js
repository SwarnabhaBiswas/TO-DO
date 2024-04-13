let input=document.querySelector('input');
let addBtn=document.querySelector('.addItem');
let ul=document.querySelector('.listBox');

function tasks(){
    if(input.value===""){
        alert("Please enter something");
    }
    else{
        let li=document.createElement('li');
        let btn1=document.createElement('button');
        let btn2=document.createElement('button');
        let div=document.createElement('div');
        li.innerText= input.value;
        btn1.innerText="C";
        btn2.innerText="D";
        btn1.classList.add('btn1');
        btn2.classList.add('btn2');
        div.classList.add('btns');
        li.classList.add('list');
        ul.appendChild(li);    
        div.append(btn1);
        div.append(btn2);
        ul.appendChild(div);
    }
    input.value="";
}

function keyPress(event){
    if (event.keyCode===13 && input.value.length > 0){
        tasks();
    }
    else{
        alert("Please enter something");
    }
}

addBtn.addEventListener('click',()=>{
    tasks();
});

input.addEventListener('keyup',keyPress);