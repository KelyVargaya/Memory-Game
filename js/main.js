/*var cartas_img=["img/1.jpg",
                "img/2.jpg",
                "img/3.jpg",
                "img/4.jpg",
                "img/5.jpg",
                "img/6.jpg",
                "img/7.jpg",
                "img/8.jpg"];

var cartasimg = document.getElementById("gameTable");
  var table = document.createElement("table");

    for (var i = 0; i < 4; i++) {
    var tr = document.createElement("tr");

        for (var j = 0; j <4; j++) {
           var td = document.createElement("td");
           var img = document.createElement("img");
           img.source = cartas_img[i];
           //fondoo
           var img2 = document.createElement("img");
           img2.setAttribute("class", "fondo");
           img.source = cartas_img[i];
          td.appendChild(img2);
           tr.appendChild(td);
          }  
          table.appendChild(tr);
    }

    cartasimg.appendChild(table);

*/
var images = [];
var index = [];

for(var i = 1; i <= 16; i++){
  var rand = Math.floor(Math.random() * 16) + 1;
  if((index.find(function (value) {return value === rand;})) === undefined) {
    index.push(rand);
  } else {
    i--;
  }
}

$(document).ready(function(){
  $('img').addClass('hide');
  for (var i = 0; i < 16; i++) {
    $('#img' + index[i]).attr('src', images[i]);
  }
  $('td').click(jugar);
  startTimer();
});

for(var i = 1; i <= 8; i++) {
  images.push('img/' + i + '.png');
  images.push('img/' + i + '.png');
}

var carta1 = '';
var carta2 = '';
var contador = 0;

function jugar () {

  if(contador < 2 && $(this).children('img').hasClass('show') === false) {

    $(this).children('img').addClass('show').css('transform', 'rotateY(360deg)');
    contador++;

    if (contador === 1) {
      carta1 = $(this).children('img').attr('src');
    } else {
      carta2 = $(this).children('img').attr('src');
      if (carta1 === carta2) {
        setTimeout(function() {
          $('td').children("img[src='" + carta2 + "']").attr('src', 'img/iguales.png').removeClass('hide');
        }, 1200);
      } else {
        setTimeout(function() {
          $('img').not('src', 'img/iguales.png').removeClass('show').attr('style', '');
        }, 1200);
      }
      contador = 0;
    }
  }
  //console.log($("img[src='img/iguales.png']").length);
}

