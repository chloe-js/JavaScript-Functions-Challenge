let boxes = document.getElementsByClassName('box');
// boxes = []
for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function(obj){
        // this is how and event listener is made
        boxClicked(obj);
    });
}
function boxClicked (placeHolderEvent){
    if (placeHolderEvent.target.style.backgroundColor === 'green')
    {
        placeHolderEvent.target.style.backgroundColor = 'orange';
    } 
    else if(placeHolderEvent.target.style.backgroundColor === 'orange'){
        placeHolderEvent.target.style.backgroundColor = 'green'
    }
}