function get (array, index, defaultValue = null) {
    if(index >= 0 && index < array.length  || index < 0 && -index <= array.length){
       return   array.at(index) 
    }
    else {
        return   defaultValue
    }
  }

module.exports = get 