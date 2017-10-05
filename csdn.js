var ads=document.getElementsByClassName('tracking-ad');
for(var i = 0;i<ads.length;i++){
    if(!ads[i].getAttribute('id')){
        ads[i].parentNode.removeChild(ads[i]);
    }
}
document.getElementById('article_details').nextSibling.nextSibling.parentNode.removeChild(document.getElementById('article_details').nextSibling.nextSibling);
document.getElementById('com-quick-QRcode').parentNode.removeChild(document.getElementById('com-quick-QRcode'));
document.getElementById('com-quick-collect').parentNode.removeChild(document.getElementById('com-quick-collect'));
document.getElementById('com-quick-reply').parentNode.removeChild(document.getElementById('com-quick-reply'));