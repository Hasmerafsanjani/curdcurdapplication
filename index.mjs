// const apiUrl = `https://api.github.com/users`;
// // Fetching data from GitHub API
// fetch(apiUrl)
//     .then(response => {
//         return response.json(); // Parse the JSON data
//     })
//     .then(data => {
//         let images = document.getElementById('images');
//         images.innerHTML = ''; // Clear previous content
//         // console.log( data);
//  data.forEach(e=>console.log(e.id))
//         data.forEach(user => {
//             let img = document.createElement('img');
//             img.src = user.avatar_url;
//             img.alt = user.login;
//             img.style.width = '100px'; // Set a width for the images
//             images.appendChild(img);
//         });
//     })
const form = document.getElementById('form')
const url = 'https://crudcrud.com/api/8791ec4adbb848c7a8d29afe30107449/fromdata'
form.addEventListener('submit',(e)=>{
       e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const mobile = document.getElementById('mobile').value
        const data = {name,email,mobile} 
   
    
fetch(url,{
    method: "POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(data),
})
.then(res=>res.json())
.then(data=>{
    // console.log('success', data)
    fetchData()
}).catch((err)=>{
    console.log(err)
})
form.reset()

})
fetchData()

function deleteData(id){
    fetch(`${url}/${id}`,{
        method:"DELETE",
    })
    .then(()=>{
        console.log("Delete data")
        fetchData()
        form.reset()
    })
    .catch((err)=>{
        console.log(err)
    })
}
fetchData()        

// function deleteData(id) {
//     fetch(`${url}/${id}`, {
//         method: "DELETE",
//     })
//     .then(() => {
//         console.log("Data deleted successfully");
//         fetchData(); // Refetch the data to update the display
//     })
//     .catch((err) => {
//         console.error("Error deleting data:", err);
//     });
// }

  
async function fetchData(){
    const apidata = await fetch("https://crudcrud.com/api/8791ec4adbb848c7a8d29afe30107449/fromdata")
    const data = await apidata.json()
    console.log(data)
    const mydiv = document.getElementById('Myapidata')
    let alldata = ''
    data.map(e=>{
         alldata += `<div>
                          <p>${e.name}</p> <p>${e.email}</p> <p>${e.mobile}</p><button onclick="deleteData('${e._id}')">Delete</button>
                             
                     </div>`
                       
                        
        //  document.createElement('h2')
        // h1.textContent = e.name
    })
    mydiv.innerHTML=alldata
}
