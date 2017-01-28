// function palindrome(str) {
//   str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
//   if (!str || typeof str !== 'string') return false;
//   let pointer1 = 0;
//   let pointer2 = str.length - 1;
//   while (pointer1 <= pointer2) {
//     if (str[pointer1] !== str[pointer2]) return false;
//     pointer1++;
//     pointer2--;
//   }
//   return true;
// }

// function palindrome(str) {
//   if (!str || typeof str !== 'string') return false;
//   str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
//   return str.split('').reverse().join('') === str;
// }


function palindrome(str, start = 0, end = str.length - 1) {
  if (start === 0) {
    if (!str || typeof str !== 'string') return false;
    str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    end = str.length - 1;
  }
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return palindrome(str, ++start, --end);
}



module.exports = palindrome;
