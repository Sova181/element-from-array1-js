function get (array, index, defaultValue = null) {
    if(array.at(index) !== undefined ){
       return   array.at(index) 
    }
    else {
        return   defaultValue
    }
  }
  //const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]; 
module.exports = get;