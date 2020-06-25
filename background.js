function onBeforeRequest(data){
    //perhaps put 'data' in parameter
    console.log("top of on before request method");
    console.log(data.initiator);
    //need to return something
    //this is where blocking goes and also figuring out whether something needs to be blocked

    //rework all of this!
    var urlNotFixed = data.initiator;
    urlNotFixed.replace(" ", "");
    urlNotFixed.toLowerCase();
    var urlFixed = urlNotFixed;
    if(urlFixed.includes(blockedList)){
        console.log("inside if statement");
        //okay so it's entering the if statement correctly but then nothing happens and the code continues to run
        return {cancel : true};
    }

    //for block list: look at string mdn on google and look at the methods for the string object
    
}
var blockedList = "facebook.com";
console.log("executing background code");
chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, {urls: ["http://*/*","https://*/*"] }, ["blocking"]);
//you can remove 'blocking' at the end so we can make sure that chrome is running the method just to test


