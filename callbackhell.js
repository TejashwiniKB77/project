setTimeout(()=>{
    console.log("step 1 completed");

    setTimeout(()=>{
        console.log("step 2 completed");

        setTimeout(()=>{
        console.log("step 3 completed");

        setTimeout(()=>{
            console.log("step 4 completed");
        });
    });
    });
});