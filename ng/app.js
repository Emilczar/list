const app = angular.module('myApp', ['ngRoute', 'dbService']);

app.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {

    $routeProvider
        .when('/lists', {
            controller: 'ContrList',
            templateUrl: '/views/lists.html'
        })
        .when('/lists/:id', {
            controller: 'ContrIdList',
            templateUrl: '/views/list_id.html'
        })
        .when('/lists/zm/:idz', {
            controller: 'ContrIdEdit',
            templateUrl: '/views/edycja_id.html'

        })
        .when('/inne', {
            templateUrl: '/views/inne.html',
        })

        .otherwise({
            redirectTo: '/inne'
        })

    $locationProvider
        .html5Mode(true);

}])





app.controller('ContrList', ['$scope', 'dbList', function ($scope, dbList) {

    $scope.lists = {};
    dbList.getList((res) => {
        $scope.lists = res.data;

    })
    console.log("wynik  " + $scope.lists);
}])

app.controller('ContrIdList', ['$scope', 'dbList', '$routeParams', function ($scope, dbList, $routeParams) {
    $scope.list = {};
    dbList.getIdList($routeParams.id, (res) => {
        $scope.list = res.data.list;
        $scope.id = res.data._id;
        $scope.name = res.data.name;
        console.log(`ContrIdList ${res.data.list}`)

    })

}])

app.controller('ContrIdEdit', ['$scope', 'dbList', '$routeParams', function ($scope, dbList, $routeParams) {

    var data = {
        name : "zmian1",
        status: 0
    }


dbList.addList($routeParams.idz, data)





}])