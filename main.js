// console.log(window);

//single
// console.log(document.getElementById('myform'));
// console.log(document.querySelector('h1'));

//multiple
// console.log(document.querySelectorAll('input'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

const ul = document.querySelector('.item');
// ul.remove()
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "hoi";
// ul.children[1].innerText = 'hallo';
// ul.lastElementChild.innerHTML = '<h3>hi</h3>';



// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log('click me');
// });

// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log(e.target.id);
// });

// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
// });

// let num = [4, 12, 62, 70, -10, 200];
// console.log(Math.max(...num))


// const x = [1,2,3,9,2]
// let max = 0

// for(var i=0; i<x.length ;i++){
//     if(x[i]>max){
//         max = x[i];
//     }
// }
// console.log(max)

// const x = [-1,2,3,-9,2]

// for(var i=0; i<x.length ;i++){
//     if(x[i] < 0){
//         x[i] = 0;
//     }
// }
// console.log(x)


// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add ('bg-dark');
//     document.querySelector('.item').lastElementChild.innerHTML='<h2>hi</h2>';

// });



// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add ('bg-dark');
//     document.querySelector('.item').lastElementChild.innerHTML='<h2>hi</h2>';
// });
// btn.addEventListener('mouseout', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#f00';
//     document.querySelector('body').classList.add ('bg-light');
//     document.querySelector('.item').lastElementChild.innerHTML='<h1>by</h1>';

// });




const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please insert fields';

        setTimeout(() => msg.remove(), 3000)
    } else {
        //console.log('Success')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userlist.appendChild(li);

        //clear fields
        nameInput.value = "";
        emailInput.value = ""
    }
}







