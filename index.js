let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configurationObject = {
  method: "POST",
  headers: {
    "content-Type": "application/json",
    "accept": "application/json"
  },
  body: JSON.stringify(formData)
};

function submitData(){
  return fetch("http://localhost:3000/users", configurationObject)
.then(function(response) {
  return response.json();
})
.then(function(object) {
console.log(object)
  document.body.innerHTML = object.id;

})
.catch(function(error) {
  alert("Unauthorized Access");
  document.body.innerHTML = error.message ;

}

);

}

submitData();








// .then(data => {
//   for (const product of data.products) {
//     let listItem = document.createElement('li');
//     listItem.appendChild(
//       document.createElement('strong')
//     ).textContent = product.Name;
//     listItem.append(
//       ` can be found in ${
//         product.Location
//       }. Cost: `
//     );
//     listItem.appendChild(
//       document.createElement('strong')
//     ).textContent = `${object.id}`;
//     myList.appendChild(listItem);
//   }
// })

// // .then(function(object) {
// // document.querySelector(object)
// // const HTMLString = oblect.map ( object => 
// //   `<li> ${object.id}</li> `
// // )
// // List.innerHTML = HTMLString;
// //   console.log(object);
// // })
// .catch(function(error) {
//   alert("Unauthorized Access");
//   script.appendChild(
//     document.createElement('strong')
//     ).textContent = `${error.message}`;
//     // myList.appendChild(listItem);
  
//   console.log(error.message);
// });

// }
// // console.log(submitData)
