function onBeforeRequest(data){
    //perhaps put 'data' in parameter
    console.log("top of on before request method");
    console.log(data.url);
   
    
    
    if((data.url).includes(blockedList) || (data.url).includes("googletagservices.com") || (data.url).includes("amazon-adsystem.com")){
        console.log("inside if statement");
        //okay so it's entering the if statement correctly but then nothing happens and the code continues to run
        return {cancel : true};
    }

    //for block list: look at string mdn on google and look at the methods for the string object
    
}
const blockedList = "facebook.com";
console.log("executing background code");
chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, {urls: ["http://*/*","https://*/*"] }, ["blocking"]);
//you can remove 'blocking' at the end so we can make sure that chrome is running the method just to test


