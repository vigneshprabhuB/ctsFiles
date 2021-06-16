(function(globalObj,jquery){


    var Greater=function(firstName,LastName,language){
        return new Greater.int(firstName,LastName,language);
    }
    Greater.prototype={
    a:function(){}
    }
    Greater.int=function(firstName,LastName,language){
       this.firstName=firstName;
       this.LastName=LastName;
       this.language=language;
    
    }
    //Greater.int.prototype=Greater.prototype;
    globalObj.G$=Greater;
}(window,$));