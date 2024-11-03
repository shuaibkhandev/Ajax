console.log("Hello JS!");

const xhr = new XMLHttpRequest();
const URL = "https://jsonplaceholder.typicode.com/posts";



// 1) XHR REQ  ****************************************************

// // console.log(xhr.readyState);
// xhr.open("GET", URL);
// // console.log(xhr.readyState);
// // xhr.onreadystatechange = function(){
// //     if(xhr.readyState === 4){
// //        const data = JSON.parse(xhr.response);
// //        console.log(data);
// //     }

// // }

// xhr.onload = function () {
//   const data = JSON.parse(xhr.response);
//   console.log(data);
// };

// xhr.send();




// 2) XHR REQ WITH ERROR HANDLING  **************************************************

// xhr.open("GET", URL);
// xhr.onload = () => {
//     console.log(xhr.status);

//     if(xhr.status >= 200 && xhr.status < 300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }else{
//         console.log("Something Went Wrong!");

//     }

// }

// xhr.onerror = () => {
//     console.log("Network Error!");

// }
// xhr.send();


// 3) XHR REQ WITH PARAM  *******************************************

// xhr.open("GET", URL);
// xhr.onload = () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
    
//     const xhr2 = new XMLHttpRequest();
//     const id = 5;
//     const URL2 = `${URL}/${id}`;
//     xhr2.open("GET", URL2);
//     xhr2.onload = () => {
//         const data = xhr2.response;
//         console.log(data);
        
//     }
//     xhr2.send();
//   } else {
//     console.log("Something Went Wrong!");
//   }
// };

// xhr.onerror = () => {
//   console.log("Network Error!");
// };
// xhr.send();


// 4) XHR REQ WITH PROMISE  ********************************


// const sendReq = (method , url) => {
//     return new Promise((resolve, reject)=>{
//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.onload = ()=>{
//         if(xhr.status >= 200 && xhr.status < 300){
//             const data = xhr.response;
//             resolve(JSON.parse(data));
//         }else{
//             reject(new Error("Something Went Wrong!"));
//         }
//     }

//     xhr.send();
//     })
// }


// const whatIsThis = sendReq("GET", URL).then((data)=>{
// return data;
// }).then((data)=>{
// return data[3].id
// }).then((id)=>{
// const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
// return sendReq("GET", url);
// }).then((newResponse)=>{
// console.log(newResponse);
// })
// .catch((err)=>{
//     console.log(err);
    
// });



// 5) Fetch REQUEST  ****************************************************
// const whatIsThis = fetch(URL).then((resp)=>{
//     if(resp.ok){
//         return resp.json();       
//     }else{
//         new Error("Something went wrong!");
//     }
// }).then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// 6) Fetch REQUEST USING ASYNC AWAIT  ****************************************************

const getReq = async () => {
    const resp = await fetch(URL);
    if(!resp.ok){
        throw new Error("Something went wrong!")
    }
    const data = await resp.json();
    return data;
    
};
getReq().then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})
