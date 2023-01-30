//promise
        // JS is doing promises to us that some resouce is fetching right now 
        // as soon it resolves it gives us output if it resovled otherwise rejected 
        // function getmePromise(){
        //     return fetch('/data.json');
        // }
        // const promise = getmePromise();
        // console.log(promise);

// .then uses only when the promise is resolved 
// means promise goes pending to resolved only

        // promise.then(result => {
        //     console.log(result);
        // })

// .catch uses only when promise gets failed and gets rejected

        // promise.catch((error) =>{
        //     console.log('Got an error', error);
        // })

// lets see how to use them but only one of them is going to run
// if gets resolved then run .then() 
// if rejected then runs .catch()

        // promise.then((data) =>{
        //     console.log('got something', data);
        // }).catch((error) => {
        //     console.log('Got an error', error);
        // })

// how to create our own promise in js
    // we can create i by using (new) keyword and then (Promise())
    // inside promise(fn) fn - it need a function which decide how this promise will run
    // and this function calls with two argument one is resolve and 2nd is reject
    // syntax-
            // {
            // function fn(resolve,reject){
            //     do whatever you want to do here 
            //     As soon you are ready to resolve or reject just call resolve() or reject()
            //         resolve('whatever we pass here is resolve or reject value')
            //         reject('whatever we pass here is resolve or reject value')
            //     }
            //     new Promise(fn)
            // }

          
        // Ex- 
                // const timer = document.querySelector('.timer');
                // function promiseCreation(){
                //     return new Promise((resolve,reject) => {     // for easy understanding
                //         setTimeout(() =>{
                //             timer.innerText = new Date().to
                                // resolve();
                //         },1000)
                //         
                //          reject();
                //     })
                // }  
                           //  down below is same as above 

                //     function promiseCreation(){
                //     return Promise.reject(404);
                // }
                // promiseCreation().then((res) => {
                //     console.log("done",res);
                // }).catch((err) => {
                //     console.log('failed',err);
                // });
    
 