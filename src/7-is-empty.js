export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  }

  if (type === 'object') {
    for (var key in stringArrayOrObject) {
      if (stringArrayOrObject.hasOwnProperty(key))
        return false;
    }  

    if  (stringArrayOrObject.length >= 1) {
        return false
      }

  }

  return true
}
