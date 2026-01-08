function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched successfully");
            reject("Failed to fetch data");
        },1500)
    });
}
fetchData()
.then(result=>console.log(result))
.catch(error=> console.log(error));
