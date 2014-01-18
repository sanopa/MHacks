function myweathers($scope){
    $scope.weathers =[
        { title: 'rainy', objects:[{title: 'rain coat', val: true}, {title:'snow boots',val:false}, {title:'bathing suit',val:false}, {title:'rain boots',val:true}, {title:'T-shirt',val: false}]},
        { title: 'sunny', objects:[{title:'pajamas',val: false}, {title:'sunglasses',val:true}, {title:'shorts', val:true}, {title:'sneakers',val:true}, {title:'rain boots',val:true}]},
        { title: 'cloudy', objects:[{title:'sunglasses',val: false}, {title:'scarf, hat, and gloves', val:false}, {title:'pants',val:true}, {title:'shorts',val:false}, {title:'bathing suit',val: false}]},
        { title: 'snowy', objects:[{title: 'bathing suit', val:false},{title:'snow boots',val: true}, {title:'coat',val: true}, {title:'pants', val: true}, {title:'scarf, hat, and gloves',val: true}]}];
    /*$scope.total=function(){
        var t = 0;
        angular.forEach($scope.services, function(s){
            if(s.selected)
                t+=s.price;
        });
        return t;
    };*/
}