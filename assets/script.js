function myweathers($scope){
    $scope.weathers =[
        { title: 'rainy', image:"assets/images/rainy.png", objects:[{title: 'rain coat', val: true}, {title:'snow boots',val:false}, {title:'bathing suit',val:false}, {title:'rain boots',val:true}, {title:'T-shirt',val: false}]},
        { title: 'sunny', image:"assets/images/sunny.png", objects:[{title:'pajamas',val: false}, {title:'sunglasses',val:true}, {title:'shorts', val:false}, {title:'sneakers',val:true}, {title:'rain boots',val:false}]},
        { title: 'cloudy', image:"assets/images/cloudy.png", objects:[{title:'sunglasses',val: false}, {title:'scarf, hat, and gloves', val:false}, {title:'pants',val:true}, {title:'shorts',val:false}, {title:'bathing suit',val: false}]},
        { title: 'snowy', image:"assets/images/snowy.png", objects:[{title: 'bathing suit', val:false},{title:'snow boots',val: true}, {title:'coat',val: true}, {title:'pants', val: true}, {title:'scarf, hat, and gloves',val: true}]}];
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