function map(arr, func){
        return arr.map(x => func(x))
    }

function reduce(sourceArray, func, startingPoint){
        let r = (!!startingPoint) ? startingPoint : sourceArray[0]
        let i = (!!startingPoint) ? 0 : 1
        for (; i < sourceArray.length; i++) {
          r = func(sourceArray[i], r)
        }
        return r;
      }