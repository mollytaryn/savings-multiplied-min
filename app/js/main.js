(function(){
  'use strict';

  $(document).ready(function(){
    var url = 'https://savingsmultipliedssh.firebaseio.com/items.json';
     $.get(url, function(data){

       _.forEach(data, function(item){
         var $endDate = item.endDate;
         var $timeCalc = moment($endDate).fromNow();

         var $image = item.image,
             $seller = item.seller,
             $title = item.title,
             $price = item.price;

         var $item = $('<div class="sortresults-list"><img src="'
                       + $image + '" class="green-container"><div class="text">'
                       + $seller + '</div><div class= "text">'
                       + $title + '</div><div class="text">'
                       + $timeCalc + '</div></div>');

         $('.sort-results').append($item);
       });
     });
  });
}());
