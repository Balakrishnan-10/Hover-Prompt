function foo(){
    var res = prompt("Enter the Topic")
    var span = document.createElement("span")
    span.innerHTML = `${res}`
    document.body.append(span)
}