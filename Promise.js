function GetPostData(){
    return new Promise(function execFun(resolve,reject){
        var XMLHttpObj = new XMLHttpRequest();
        XMLHttpObj.open("GET","https://jsonplaceholder.typicode.com/posts"); 
        XMLHttpObj.onreadystatechange =  function(){
            if(XMLHttpObj.readyState == 4 && XMLHttpObj.status == 200)
            {
               //resolve  the promise
             resolve(XMLHttpObj.responseText);
               
            }
            else if(XMLHttpObj.readyState == 4 && XMLHttpObj.status != 200)
            {
                    //reject
                    reject(XMLHttpObj.statusText);
            }
        }
        XMLHttpObj.send();
    });
}