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

        const _getIdList = (id,cb)=>{
            cb = cb|| function(){};
            
            $http.get('api/lists/'+id)
            .then((res) => {
                console.log(`cb dbIdList :  ${JSON.stringify(res.data.list)}`)
                cb(res)
            })
            .catch((err)=>{
                console.log(`error dbIdList :  ${err}`)
            })
        }

        const _addList = (id, data)=>{

            
            $http.put('api/lists/'+id , data)
            .then((data)=>{
                console.log(`editList :  ${data}`)
            })
            .catch((err)=>{
                console.log(`error dbIdList :  ${err}`)
            })
        }
        return {
            getList: _getList,
            getIdList: _getIdList,
            addList: _addList
        };
    }])


 

  


})();