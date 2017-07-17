//export default appl.service('appl.DataService', function ($http) {
//    this.read = function (src, callback) {
//        $http({
//            method: "POST",
//            url: "/orit/data/" + src + ".json",
//            headers: {
//                "Content-type": "application/json"
//            }
//        }).then(function success(response) {
//            callback(response);
//        }, function error() {
//            console.info("Error")
//        });
//    }
//});
export class DataService{
    constructor($http){
        this.$http=$http;
    }
    
    read(src, callback){
        this.$http({
            method: "POST",
            url: "/orit/data/" + src + ".json",
            headers: {
                "Content-type": "application/json"
            }
        }).then(function success(response) {
            callback(response);
        }, function error() {
            console.info("Error")
        });
    }
}