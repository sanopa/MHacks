function myweathers($scope){
    $scope.weathers =[
        { title: 'rainy', image:"assets/images/rainy.png", objects:[{title: 'rain coat', val: true,image:"assets/images/raincoat.png"}, {title:'gloves',val:false, image:"assets/images/mittens-purple.png"}, {title:'bathing suit',val:false, image:"assets/images/swimsuit.png"}, {title:'rain boots',val:true, image:"assets/images/rain-boots.png"}, {title:'T-shirt',val: false, image:"assets/images/green-tshirt.png"}]},
        { title: 'sunny', image:"assets/images/sunny.png", objects:[{title:'pajamas',val: false, image:"assets/images/"}, {title:'sunglasses',val:true, image:"assets/images/sunglasses.png"}, {title:'shorts', val:false, image:"assets/images/white-shorts-md.png"}, {title:'sneakers',val:true, image:"assets/images/tennis_shoes.png"}, {title:'rain boots',val:false, image:"assets/images/rain-boots.png"}]},
        { title: 'cloudy', image:"assets/images/cloudy.png", objects:[{title:'sunglasses',val: false, image:"assets/images/sunglasses.png"}, {title:'scarf', val:false, image:"assets/images/scarf.png"}, {title:'pants',val:true, image:"assets/images/*.png"}, {title:'shorts',val:false, image:"assets/images/white-shorts-md.png"}, {title:'bathing suit',val: false, image:"assets/images/swimsuit.png"}]},
        { title: 'snowy', image:"assets/images/snowy.png", objects:[{title: 'bathing suit', val:false, image:"assets/images/swimsuit.png"},{title:'gloves',val: true, image:"assets/images/mittens-purple.png"}, {title:'coat',val: true}, {title:'pants', val: true, image:"assets/images/.png"}, {title:'scarf',val: true, image:"assets/images/scarf.png"}]}];
    /*$scope.total=function(){
        var t = 0;
        angular.forEach($scope.services, function(s){
            if(s.selected)
                t+=s.price;
        });
        return t;
    };*/
}
/*
var getUrl = ‘’;
jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/396bab011405eb77/geolookup/q/autoip.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var zip = parsed_json[‘zip’];
  getUrl = “http://api.wunderground.com/api/396bab011405eb77/conditions/q/” + zip + “.json”;
  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  url : getUrl,
  dataType : "jsonp",
  success : function(parsed_json) {
  var zip = parsed_json[‘zip’];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);    
  }
  });
});
*/