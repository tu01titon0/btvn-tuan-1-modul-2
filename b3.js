function revertString (string) {
    return string.split("").reverse().join("");
}

let string = "asddfkdjgklfhj"
console.log(revertString(string))