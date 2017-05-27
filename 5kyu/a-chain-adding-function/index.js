function add(num){
    var f = function(n){
        return add(num + n);
    }
    f.toString = function(){
        return +num
    }
    return f;
}

export default add;