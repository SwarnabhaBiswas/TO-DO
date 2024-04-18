let input=document.querySelector('input');
let addBtn=document.querySelector('.addItem');
let ul=document.querySelector('.listBox');
let btn1=document.querySelector('.btn1');


addBtn.addEventListener('click',()=>{
    tasks();
});
ul.addEventListener('click',check);

input.addEventListener('keyup',keyPress);



function tasks(){
    if(input.value===""){
        alert("Please enter something");
    }
    else{
        let li=document.createElement('li');
        let btn1=document.createElement('button');
        let btn2=document.createElement('button');
        let div=document.createElement('div');
        let div2=document.createElement('div');
        li.innerText= input.value;
        btn1.innerText="C";
        btn2.innerText="D";
        btn1.classList.add('btn1');
        btn2.classList.add('btn2');
        div.classList.add('btns');
        li.classList.add('list');
        div2.classList.add('secBox');
        div2.append(li);
        div.append(btn1);
        div.append(btn2);
        div2.append(div);
        ul.append(div2);
    }
    input.value="";
}

function check(e){
    const item= e.target;
    if(item.classList[0]==='btn2'){
        const main= item.parentElement;
        const main2=main.parentElement;
        main2.children[0].classList.add('fall');
        main.style.opacity='0';
        main.style.transition='all 0.2s ease-out';
        main2.children[0].addEventListener('transitionend',function(){
            main2.remove();
        })
    }
    if(item.classList[0]==='btn1'){
        const main= item.parentElement;
        const main2=main.parentElement;
        main2.children[0].classList.toggle('strike');
    }}

function keyPress(event){
    if (event.keyCode===13 && input.value.length > 0){
        tasks();
    }
}
