'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * 
 * indentity: takes a value and returns a value unchanged
 * 
 *@param {*} value
 * 
 *@returns{*} : it returns the value unchanged
 * 
 */
 
 
 function identity(value){
    //return the value passed as arguement
    return value
}

 module.exports.identity = identity;
 
 
 
 
 /**
 *  typeOf: takes a value and returns the type of that value as a string.
 * 
 * param {*} value
 * 
 * @return{String} : it returns the type of that value as a string.
 * 
 */
 
   function typeOf(value){
    let result;
    if(typeof value === 'string'){result = 'string'}
    if(typeof value === 'number'){result = 'number'}
    if(typeof value === 'boolean'){result = 'boolean'}
    if(typeof value === 'undefined'){result = 'undefined'}
    if(value === null){result = 'null'};
    if(Array.isArray(value)){result = 'array'}
    if(typeof value === "object" && !Array.isArray(value) && value !== null && !(value instanceof Date)){result = 'object'}
    if(typeof value === 'function'){result = 'function'}
    return result;
}

 module.exports.typeOf = typeOf;
 
 
 
 
 
 
 /**
 * first: designed to loop over an array and return the first element(s) of that array, as dictated
 * by number parameter.
 * 
 * @param {array} array: the array over which to iterate
 * @param {number} number: the number of elements at the beginning of the array to return
 * 
 * @returns{Array}  returns the given number of element(s) from the array
 */
 
function first(array, number){
    //if the array paramater is not an array arguement retrun empty array literal
    if(!Array.isArray(array)){return []}
    //if number parameter in a negative number retrun and empty array
    if(number <= -1){return []}
    //if number does not exist or is not a number type return first element of array parameter
    if(!number || typeof number !== 'number'){return array.shift()}
    //otherwise return all elements in array up to numbereth index
    return array.slice(0, number);
} 


 module.exports.first = first;
 
 
 
 
 
 
 /**
 * last: designed to loop over an array and return the last element(s) from that array,
 * as dictated by the number arguement.
 * 
 * @param {array} array: the array over which to iterate
 * @param {number} number: the number of elements at the end of the array to return
 * 
 * @returns{Array}: returns the given number of element(s) from the array
 */
 
 function last(array, number){
      //if the array paramater is not an array arguement retrun empty array literal
    if(!Array.isArray(array)){return []}
    //if number parameter in a negative number retrun and empty array
    if(number <= -1){return []}
    //if number paramter is greater than the length of the array return the entire array
    if(number > array.length){return array}
    //if number does not exist or is not a number type return first element of array parameter
    if(!number || typeof number !== 'number'){return array.pop()}
    //otherwise return elements starting from the last element and ending at the numbereth element * -1
    return array.slice(number * -1);
    
}

 module.exports.last = last;
 
 
 /**
 * indexOf: designed to return the index of the first instance of a value
 * 
 * @param {array} array: an array over which to iterate
 * @param {*} value 
 * 
 * @returns{Value} : returns the value at the index of the first instance of the value from the array
 * 
 * 
 */
 
 function indexOf(array, value){
// iterate over array
    for(let i = 0; i < array.length; i++){
        //if the current element equals value arguement
        if(array[i] === value){
            //return the index of the current value
            return i;
        }
    }
    //in all other scenerios return -1
  return  -1; 
}

module.exports.indexOf = indexOf;



/**
 * contains: designed to return true if a given value is found in a given array
 * 
 * @param {array} array: an array over which to iterate
 * @param {*} value
 * 
 * @returns{Boolean}: returns true if the value is found in the given array and false if otherwise
 */
 
  function contains(array, value){
   return array.includes(value) ? true : false;
}
 
 
module.exports.contains = contains;




/**
 *each: designed to loop over an array and pass all elements of that array through a given function and return that array
 *
 * @param {array} array: an array over which to iterate
 * @param {function} function: a function which to apply to each element of the array
 * 
 * @returns:  doesn't return anything, just iterates through array
 *  
 */
  function each(collection, action){
    //if the collecton is an array
    if(Array.isArray(collection)){
      //iterate over array
      for(let i = 0; i < collection.length; i++){
          //call function param with arguments of current element, its index, and the entrie collection
          action(collection[i], i, collection);
      }//if collection is not an array
    } else {
        //iterate through object
        for(let key in collection){
            //call action on the properties value, key, and entire collection
            action(collection[key], key, collection);
        }
    }
}


module.exports.each = each; 


/**
 *unique: designed to return an array from an array with no duplicate values 
 * 
 *@param {Array}: an array over which to iterate 
 * 
 *@returns {Array}:returns an array containing no duplicates
 * 
 */
 
 function unique(array){
    console.log(array)
  //create new array to be returned
  let newArr = [];
  //iterate over array
  for(let i = 0; i < array.length; i++){
      //implementing indexOf, which takes an array and a value...If the current element of array does not match any elements
        if(indexOf(newArr, array[i]) === -1){
        // push those elements into newArr
        newArr.push(array[i])
      }
  }
  //return newArr
  return newArr;
}
 
module.exports.unique = unique;



 /**
 *filter: design to look through each value in an array and return a new array of all elements that pass a truthy test
 * 
 *@param {Array} array: an array over which to iterate.
 *@param {Function} action: the function to be applied to each value in the array.
 *
 *@returns{Array} : an array of which all elements have passed a truthy test 
 * 
 */
 
 function filter(array, action){
    //create new array variable to return
    let newArr = [];
    //iterate over array parameter
    for(let i = 0; i < array.length; i++){
    //call action passing the current element, the index, and the entire collection as parameters
      action(array[i], i, array)
      //if passing those parameters through action don't resolve to false...
      if(action(array[i], i, array)){
          //push elements to newArr
        newArr.push(array[i]);  
      }
    }
    //return the newArr with filtered items
    return newArr
}

module.exports.filter = filter;












/**
 *reject: designed to return values from an array that do not pass a truth test.
 * 
 *@param:{Array} array: an array over which to iterate.
 *@param:{function}: a function that will return all elements if they return false after a truth test
 * 
 *@returns{Array} : an array of which all elements return false from a truth test
 * 
 */

function reject(array, action){
    //create new array variable to return
    let newArr = [];
    //iterate over array parameter
    for(let i = 0; i < array.length; i++){
    //call action passing the current element, the index, and the entire collection as parameters
      action(array[i], i, array)
      //if passing those parameters through action resolve to false...
      if(!action(array[i], i, array)){
          //push elements to newArr
        newArr.push(array[i]);  
      }
    }
    //return the newArr with filtered items
    return newArr
}
module.exports.reject = reject;
 
 
/**
 *partition: designed to seperate truthy and falsie value returns from a function
 * 
 *@param{Array} array: an array over which to iterate
 *@param{Function} action: an action to preform to test for truthy or falsie values
 * 
 *@returns{Array} : an array of nested arrays, one containing truthy returns and one containing falsie returns
 * 
 */
 
 function partition(array, action){
    let truthie = filter(array, function(element, index, array){
        
        return action(element, index, array)
    })
    let falsie = reject(array, function(element, index, array){
        
        return action(element, index, array)
    })
    return [truthie, falsie]
}

module.exports.partition = partition;
 
 
 
 /**
 *map: designed to create a new array with the results of calling a provided function on that array
 * 
 *@params{Object or Array} a collection: a collection over which to iterate
 *@params{Function} action : a function to apply to all the values inside the collection
 * 
 *@returns:{Object or Array} a collection: a collection containing all the values to which the function was applied to
 * 
 */
 
 function map(collection, action){
    
    let newArr = [];
    //if the collection is an array
    if(Array.isArray(collection)){
        //iterate over array
        for(let i = 0; i < collection.length; i++){
            //call param function and pass the current element, the index, and the entire collection as arguements and push the result into newArr
         newArr.push(action(collection[i], i, collection));
        }
    } else {
            //if collection is not an array and is instead an object
            //iterate over object
            for(let key in collection){
                //call our param function on the current property value, its key, and the entire collection and push the result into newArr
                newArr.push(action(collection[key], key, collection));
            }
        }
        //return newArr
        return newArr;
    };

module.exports.map = map;








/**
 *pluck: designed to extract a list of property values 
 * 
 *@param{Array} array: an array over which to iterate;
 *@param{prop} property: a property to pull the value from
 * 
 *@returns: return properties value in the form of an array after applying a given function to all the elements in the array
 * 
 * 
 */
 function pluck(array, prop){
    //create container array
    let newArr = []
    //implementing map funtion above, push every elements property into new array after passing through map param function
   map(array, function(element, index, array){
       
     newArr.push(element[prop])    
   });
   //return newArr
   return newArr;
}    
    
module.exports.pluck = pluck;


/**
 *every: designed to return all the values in a collection if all the elements pass a truthy test, will return false if even
 * one element if found to be false
 *
 *@param{Object or Array} a collection: a collection over which to iterate
 *@param{Function} action: an function to apply to all the values of the collection 
 * 
 *@returns{Boolean} : returns true if all of the elements in the collection pass the truthy test, returns false if even one of them does not pass 
 * 
 */
 function every(collection, action){
     //set result variable
let result = true;
//if no action param was given
    if(!action){
        //create loop to gain access to collection element
        for(let i = 0; i < collection.length; i++){
            //if any element resolves to false
            if(!collection[i]){
                //set result variable to false;
                result = false;
            }
        }
        //else, if a function is passed as a parameter
    } else {
         //assign a variable to the result of passing the collection through callback function
    let newArr = map(collection, function(element, index, collection){
        //return the result from passing collection through funciton param, or predicate
        return action(element, index, collection)
    })
     
     //now check newArr to see if any elements resolve to falsie
     each(newArr, function(element, index, collection){
        //if an element resolves to falsie
        if(!element){
            //set result to false
            result = false;
        }
     })
     
    }
    return result;
 }
 
module.exports.every = every;


/**
 *some: designed to return true if any values in the collection pass a truthy test
 * 
 *@param{Object, Array}  collection: a collection over which to iterate
 *@param{Function}  action: an action to apply to every every value in the collection
 * 
 *@returns{Boolean} : returns true if any values in the collection are true, returns false if all the values in the collection are false 
 * 
 */
 
 function some(collection, action){
     //set result variable
let result = false;
//if no action param was given
    if(!action){
        //create loop to gain access to collection element
        for(let i = 0; i < collection.length; i++){
            //if and any element resolves to false
            if(collection[i]){
                //set result variable to false;
                result = true;
            }
        }
        //else, if a function is passed as a parameter
    } else {
         //assign a variable to the result of passing the collection through callback function
    let newArr = map(collection, function(element, index, collection){
        //return the result from passing collection through funciton param, or predicate
        return action(element, index, collection)
    })
     
     //now check newArr to see if any elements resolve to falsie
     each(newArr, function(element, index, collection){
        //if an element resolves to falsie
        if(element){
            //set result to false
            result = true;
        }
     })
     
    }
    return result;
 }
 

module.exports.some = some;


/**
 *reduce: designed to execute a reducer function on each item of the array resulting in a new output array 
 * 
 *@param{Array} array: an array over which to iterate
 *@param{Function} action: an action to apply to every item in the array
 *@seed{value} value: an value at which to start
 * 
 *@returns{Array} : returns a new array after function has been used on each item of the previous array
 * 
 */
function reduce(array, action, seed){
   //setting variable equal to seed, or if seed is undefined the first element in the array 
 let previousResult = seed === undefined ? array[0] : seed;
 //if seed is undefined/does not exist
  if(seed === undefined){
//set previousResult equal to value at array index 0      
  //iterate over array
    for(let i = 1; i < array.length; i++){
        //set previousResult equal to the result of passing previousresult through callback function
        previousResult = action(previousResult, array[i], i, array);
    }
  //else if seed exists
  } else {
    //pass parameters through _.each
      each(array, function(element, index, array){
          //set previousResult equal to the previous result of the callback function
          previousResult = action(previousResult, element, index, array);
      });
  }//return preiousResult;
  return previousResult;
};


module.exports.reduce = reduce;






/**
 *extend: copys all of the property values in objects passed as arguements to target and returns target object.
 *
 *@param{Object(s)} object(s): a variable amount of objects
 * 
 *@returns: returns the target object 
 * 
 * 
 */

function extend(object1, object2, ...objects){
    return Object.assign(object1, object2, ...objects)
}

module.exports.extend = extend;











