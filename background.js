function onBeforeRequest(data){
    //perhaps put 'data' in parameter
    console.log("top of on before request method");
    console.log(data);
    //need to return something
    //this is where blocking goes and also figuring out whether something needs to be blocked
    var urlNotFixed = window.location.toString();
    urlNotFixed.replace(" ", "");
    urlNotFixed.toLowerCase();
    var urlFixed = urlNotFixed;
    console.log(urlFixed);
    var blockedList = "facebook.com";
    if(urlFixed.contains(blockedList)){
        //block
    }

    //for block list: look at string mdn on google and look at the methods for the string object
    
}
console.log("executing background code");
chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest);
//you can remove 'blocking' at the end so we can make sure that chrome is running the method just to test


