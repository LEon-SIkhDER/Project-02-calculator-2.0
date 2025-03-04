document.getElementById("container").addEventListener("click", function (e) {
    e.target.classList.remove("test")
    if(e.target.classList.contains("container")){
        return
    }
    const value = e.target.innerText
    const input = document.getElementById("input").value
    console.log(e.target)
    e.target.classList.add("test")
    if (value === "AC") {
        document.getElementById("input").value = ""
        return
    }
    if (value === "DEL") {
        document.getElementById("input").value = input.slice(0, -1)
        console.log(input)
        return
    }
    // return 
    if (value === "=") {
        const result = eval(input)
        console.log(result)
        document.getElementById("input").value = result
    }
    else {
        document.getElementById("input").value += value
        
    }

})
