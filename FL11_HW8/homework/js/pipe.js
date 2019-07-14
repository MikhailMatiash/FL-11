function pipe (){
    for (let i = 1; i < arguments.length; i++){
        arguments[0] = arguments[i](arguments[0]);
    }
    return arguments[0];
}
