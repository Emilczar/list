(function () {
    const app = angular.module('dbService', [])

    app.factory('dbList', ['$http', ($http) => {

        const _getList = (cb) => {
            cb = cb || function () {};
            $http.get('/api/lists')
                .then((data) => {
                    cb(data);
                })
        }
        return {
            getList: _getList
        };
    }])


    app.factory('dbIdList',[$http,($http)=>{
        const _getIdList = (cb)=>{
            cb = cb || function () {};
            $http.get('api/lists/:id')
            .then((data) => {
                cb(data);
            })
        }
        return {
            getIdList: _getIdList
        };

    }])


})();