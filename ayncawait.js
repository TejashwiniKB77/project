function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched using asnyc/await");
        },1500);
    });
}

async function getData() {
    try{
        console.log("fetching...");
        const result=await fetchData();
        console.log(result);
    }
    catch(err){
        console.log("error:", err);
    }
    }
    getData();