// Write a function that when given a URL as a string, parses out
// just the domain name and returns it as a string.

function domainName(url){
  if (url.includes('https')) {
    url = url.replace('https://', '');
  } else if (url.includes('http')) {
    url = url.replace('http://', '');
  }
  
  const remainingUrl = url.split('.');
  
  if (remainingUrl[0] === 'www') {
    return remainingUrl[1]
  } else {
    return remainingUrl[0]
  }
}

console.log(domainName("http://github.com/carbonfive/raygun"));
// "github"

console.log(domainName("http://www.zombie-bites.com"));
// "zombie-bites"

console.log(domainName("https://www.cnet.com"));
// "cnet"
