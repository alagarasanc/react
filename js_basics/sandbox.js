// console.log("first js code!")


// let fName = 'Alagarasan'
// let lName = 'C'

// let fullName =  fName+" "+lName

// console.log("fullname", fullName)

// console.log("string", `myself ${fullName}`)

// console.log("index" ,fName[0], "length", fullName.length, "indexof", fullName.indexOf("C"))

// console.log("methods", fullName.toUpperCase(), fullName.toLowerCase(), fullName.lastIndexOf("a"), fullName.slice(0,5), fullName.substring(5,11), fullName.replace("C","Chidambaram"))

// console.log(fullName.includes('C'),fullName.includes('Z'))

// //------------------------------------------------------------


// let fNumber = 123;
// let lNumber = 2;
// let x;

// console.log("problems", fNumber/lNumber, fNumber%lNumber, fNumber+=10, lNumber-=2);

// console.log(null+fNumber,  x+lNumber);

// //------------------------------------------------------------

// let values = ['name', 'alagarasan', 'age', 25];
// values[0]='hello';
// values.push('height');

// console.log(values,values[0],values.indexOf('age'));

// console.log(values.concat([ 5.8, "weight"]), values.length, values.join('_'),values.pop(1));

// console.log(values.includes('age'));


// //------------------------------------------------------------

// let data =['alagarasan', 'kee', 'dpr'];
// for(let i=0; i<data.length; i++){
//     if(data[i].includes('a')){
//         console.log("name", data[i]);
//     }
//     else{
//         console.log("not name", data[i]);
//     }
// }

// //------------------------------------------------------------


// let num =[1,23,45,67,89,100,22];
// for(let i=0; i<num.length; i++){
//     if(num[i] === Number(100)){
//         console.log("full_mark", num[i]);
//         break;
//     }
//     else{
//         console.log("initial_attempt", num[i]);
//     }
// }

// //------------------------------------------------------------


// let password='Alag@'

// if(password.includes('@') && password.length==12){
//     console.log('strong password');
// }else if(!password.includes('@') || password.length >= 8){
//     console.log('medium password');
// }else{
//     console.log('weak password');
// }


// //------------------------------------------------------------



// let fUn = function(func){console.log(func)};

// let a_fun =(value)=>console.log(value);

// fUn("worked!!")
// a_fun(['hi','its','worked'])

// //------------------------------------------------------------

// let check_callback = function(second_func){
//     let name = "alagarasan"
//     second_func(name)
// };

// check_callback((value)=>console.log(`myself ${value}`))


// //------------------------------------------------------------



// let people = ['ajay', 'maxwell', 'arun', 'gowtham']

// let it = (name, index)=>console.log(`${index}-${name}`)

// people.forEach(it);


// //------------------------------------------------------------
// let html =``

// let itt = (name, index)=>console.log(html+=`<div>${index}-${name}</div><br>`)

// people.forEach(itt);

// console.log(html)

// //------------------------------------------------------------


// let user={
//     name:"alagarasan",
//     email_id:"alagarasan@dorustree.in"
// };

// console.log(user.name,user['email_id'],user, user['mobile']='7373871565', user.mobile='+917373871565')


// //------------------------------------------------------------

// let users={
//     name:"alagarasan",
//     email_id:"alagarasan@dorustree.in",
//     obj: ()=>{console.log("add function in object worked!!");}
// };

// users.obj()

// //------------------------------------------------------------

// let personal={
//     name:"alagarasan",
//     email_id:"alagarasan@dorustree.in",
//     obj(){console.log(this.name);}
// };

// personal.obj()

// //------------------------------------------------------------


// let bio ={
//     name:"alagarasan",
//     email_id:"alagarasan@dorustree.in",
//     details:[{tech:'python',exp:'1.5'},{tech:'reactjs',exp:'.1'}],
//     obj(){
//         this.details.forEach((value)=>{console.log(value.tech,value.exp);})
//     }
// };

// bio.obj();

// //------------------------------------------------------------

// let numeric = 123.6

// console.log(Math.E,Math.round(numeric),Math.random());

// //------------------------------------------------------------

// const select_div = document.querySelector('div.content');

// console.log(select_div);

// const select_all_p = document.querySelectorAll('p');
// console.log(select_all_p)

// select_all_p.forEach((value)=>console.log(value))

// //------------------------------------------------------------

// let title = document.getElementById('title');
// console.log(title)

// let class_name = document.getElementsByClassName('mention');
// console.log(class_name[0])

// let tag = document.getElementsByTagName('p');
// console.log(tag)

// //------------------------------------------------------------

// title.innerText = 'Title changed by inner text'

// title.innerHTML = `<h1> Title changed by inner html</h1>`


// select_all_p.forEach((value)=>{
//     value.innerText += '-------- new text'
// })



// //------------------------------------------------------------

// let get_h1 = document.querySelector('.check')
// console.log(get_h1)
// let class_value = get_h1.getAttribute('class')
// get_h1.setAttribute('class','use');
// get_h1.setAttribute('style','color:blue');
// get_h1.style.fontSize = '100px';

// //------------------------------------------------------------

// const event_created = document.querySelector('.use')

// event_created.addEventListener('click',()=>console.log('added click event'));


//------------------------------------------------------------
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange',()=>{
//     if(request.readyState === 4 && request.status ===200){
//         console.log(request.responseText)
//     }else{
//         console.log('failed')
//     }
// })

// request.open('GET','https://jsonplaceholder.typicode.com/user');
// request.send();

//------------------------------------------------------------

// const func1 = (callback)=>{
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState === 4 && request.status ===200){
//             callback(JSON.parse(request.responseText));
//         }else{
//             callback("error");
//         }
//     })
    
//     request.open('GET','https://jsonplaceholder.typicode.com/users');
//     request.send();
// }


// func1((value)=>{
//     console.log(value);
// });

//------------------------------------------------------------

// const func = ()=>{
//     return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange',(event)=>{
            
//             if(event.target.readyState === 4){
//                 const data = JSON.parse(event.target.responseText);
//                 resolve(data);
//             }else{
//                 reject("error");
//             }
//         });
        
//         request.open('GET','https://jsonplaceholder.typicode.com/users');
//         request.send();

//     });
// };
// func().then(data=>console.log('three',data)).catch(error=>console.log('four',error));


//------------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     console.log(response);
//     return response.json();
// }).then(data=>console.log(data))
// .catch((error)=>console.log(error));

//------------------------------------------------------------

const func = async() =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/user');
        if (response.status !== 200){
            throw new Error("url not found");
        }
        let data = await response.json()
        return data;
};

func()
.then(data=>console.log('resloved',data))
.catch(error=>console.log('rejected',error.message))
.finally(()=>console.log("finally"));


//------------------------------------------------------------