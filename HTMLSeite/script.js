

function getXhr(){
    if (window.XMLHttpRequest){
        var xhr = new XMLHttpRequest();
        return xhr;
    }else return false;
}

function sendXhr(){
    xhr.onreadystatechange = xhrHandler;
    xhr.open("GET", "http://idefix.informatik.htw-dresden.de/it1/js/ajaxdemo.txt");
    xhr.send(null);
    console.debug("Request gesendet");
}

function xhrHandler(){
    console.log ( "Status: " + xhr.readyState );
    if (xhr.readyState != 4){return;}
    console.log ( "Status: " + xhr.readyState+ " " + xhr.status );
    if (xhr.status == 200){
      document.getElementById("ziel").innerHTML = xhr.responseText;  
    }
    
}

var xhr = getXhr();

