$(function() {
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");
  let number = 0;
  let data = [];

  function getData() {
    return $.ajax('ajax.json',{
      type: 'GET',
    })
  };

  function changeVideo() {
    if(data.length < 1){ //ここがよく分からない
      getData();
    }
    button.click(function(){
    getData().then(function(data){
      videoArea.attr('src', data[number].url);
      titleArea.html(data[number].title);
      contentArea.html(data[number].content);
      number == 2 ? number = 0 : number++;
    })
    });
  };

  changeVideo();
})







//let number = 0; //--1
//const titleArea = document.getElementById("title"); //--2
//const contentArea = document.getElementById("content"); //--2
//const videoArea = document.getElementById("video"); //--2
//const button = document.getElementById('btn'); //--3


//function getData() {
//  button.addEventListener('click', e => { //--4
//    const request = new XMLHttpRequest();
//    request.onreadystatechange = function() {
//      if (request.readyState == 4) {
//        if(request.status == 200) {
//          titleArea.innerHTML = request.response[number].title; //--5
//          contentArea.innerHTML = request.response[number].content; //--5
//          videoArea.setAttribute("src", request.response[number].url); //--6
//          number == 2 ? number = 0 : number++; //--7
//      }
//    }
//  }
//  request.open("GET", "ajax.json");
//  request.responseType = "json";
//  request.send(null);
//})
//}

//window.onload = getData;