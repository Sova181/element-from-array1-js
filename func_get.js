function get (array, index, defaultValue = null) {
    if(array.at(index) !== undefined ){
       return   array.at(index) 
    }
    else {
        return   defaultValue
    }
  }

module.exports = get 