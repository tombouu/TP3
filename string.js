function repeat(s, n){
    let rep ="";
    for (let i = 0; i < n; i++) {
        rep = rep + s;  
    }
    return rep;
}

function truncate(s,n){
    let size =s.length;
    let mot = (s.substring(0,n));
    if (n<size) {
        mot = mot + '...';
    }
    return mot;
}

function isPalindrome(s){
    let mot = s.split("").reverse().join("");
    return (s==mot);
}

function swapCase(s){
    let swap = "";
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        swap += (c===c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase();
    }
    return swap;
}

function main(){
    console.log(repeat("foo", 3));
    console.log(truncate("unchanged text", 20)); // => unchanged text
    console.log(truncate("unchanged text", 14)); // => unchanged text
    console.log(truncate("truncated text", 10)); // => truncat...
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
    console.log(swapCase("TeStE"));
}
main();