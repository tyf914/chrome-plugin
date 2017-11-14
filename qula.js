var contentNode = document.getElementsByClassName('content_read')[0];
contentNode.style.cssText += 'width: 100vw';
for (var i = 0; i < contentNode.childNodes.length; i++) {
    if ( contentNode.childNodes[i].tagName === 'DIV' ) {
        contentNode.childNodes[i].style.cssText += 'width: 100%';
    }
}

