export const hashtags = (text) => {
  var regex = /(?:^|[ ])#([a-zA-Z]+)/g
  var arr = text.match(regex)
  arr = arr.map(el => el.trim());
  return arr
}
