

const app = angular.module('myApp',['ngRoute','dbService']);

app.config(['$routeProvider','$locationProvider',($routeProvider,$locationProvider)=>{

    $routeProvider
    .when('/lists',{
        controller:  'ContrList',
        templateUrl: '/views/lists.html'
      
    })
    .when('/inne',{
        templateUrl: '/views/inne.html',
    })
    .when('/lists/:id',{
        templateUrl: '',
    }

    )
    .otherwise({
        redirectTo: '/inne'
    })

    $locationProvider
    .html5Mode(true);

}])



app.controller('ContrTest',['$scope',function($scope){
    alert('test')
}])



 app.controller('ContrList',['$scope', 'dbList',function($scope,dbList){
    
    $scope.lists ={};
    dbList.getList((res)=>{
        $scope.lists = res.data;
        
    })
    console.log("wynik  " +$scope.lists);
}]) 

