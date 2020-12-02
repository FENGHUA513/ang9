// {a:1,b:2} => "a=1&b=2"
function stringifyQS(object) {
  let s = []
  for (let name in object) {
    if (typeof object[name] !== 'undefined') {
      s.push(`${name}=${encodeURIComponent(object[name])}`)
    }
  }
  return s.join('&')
}

export { stringifyQS }
