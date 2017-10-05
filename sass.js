document.getElementsByClassName('gg')[0].parentNode.removeChild(document.getElementsByClassName('gg')[0]);

var temp=document.getElementsByTagName('footer')[0];

(function test() {
    while(true){
        if(temp.previousElementSibling.className==='container'){
            temp.previousElementSibling.parentNode.removeChild(temp.previousElementSibling);
            return false;
        }
        temp=temp.previousElementSibling;
    };
})();