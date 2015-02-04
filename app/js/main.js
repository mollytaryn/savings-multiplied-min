(function(){
  'use strict';

  $(document).ready(function(){
    var url = 'https://savingsmultipliedssh.firebaseio.com/items.json';


     $.get(url, function(data){
       var $image = data[0].image,
           $seller = data[0].seller,
           $title = data[0].title,
           $price = data[0].price,
           $endDate = data[0].endDate;
           $timeCalc = moment($endDate).fromNow();


       var $item = $('<div class="sortresults-list"><img src="' + $image + '" class="green-container"><div>' + $seller + '</div><div>' + $title + '</div></div>');

       $('.sort-results').append($item);
     });


  });
 

}());
