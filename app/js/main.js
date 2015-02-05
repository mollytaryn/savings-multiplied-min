(function(){
  'use strict';

  $(document).ready(function(){
    window.imgError = function(img){
      img.onerror = "";
      img.src = 'http://www.editorialmanager.com/grame/img/placeholder.gif';
      return true;
    }

    var url = 'https://savingsmultipliedssh.firebaseio.com/items.json';


     $.get(url, function(data){

       _.forEach(data, function(item){
         var $image = item.image;
         var $seller = item.seller;
         var $title = item.title;
         var $price = item.price;
         var $endDate = item.endDate;

         var $item = $('<div class="sortresults-list"><img src="' + $image + '" class="green-container" onError="imgError(this);"><div class="text">' + $seller + '</div><div class="text">' + $title + '</div></div>');

         $('.sort-results').append($item);
       });

     });

   });

}());

