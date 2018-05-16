$(document).ready(function(){




});

function myFunction2(num , element) {
    if (num == 0){
        var a = document.getElementById("search_concept");
        var node = '<a href="#" onclick="myFunction2(0,this);return false;">'+ a.textContent +'</li>'
        a.innerHTML = element.textContent;
        var li = document.createElement('li');
        li.innerHTML = node;
        var parentNode = document.getElementById("searchUl");
        parentNode.appendChild(li);
        parentNode.removeChild(element.parentElement);
    }else{
        var a = document.getElementById("search_concept2");
        var node = '<a href="#" onclick="myFunction2(1,this);return false;">'+ a.textContent +'</li>'
        var parentNode = document.getElementById("searchUl2");
        if (a.textContent != "Destinations"){
            a.innerHTML = element.textContent;
            var li = document.createElement('li');
            li.innerHTML = node;
            parentNode.appendChild(li);
        }else {
            a.innerHTML = element.textContent;
        }
        parentNode.removeChild(element.parentElement);
    }
    //console.log(number);

}