export const firstLast = (items) => {
  console.log(items)
  var length = items.length
  var lastInArray = items[length-1]

  if(length === 1){
    return `Only item: ${items[0]}`
  }

  if(length === 0){
    return `No items!`
  }

  return `First: ${items[0]}, Last: ${lastInArray}`
  
}
