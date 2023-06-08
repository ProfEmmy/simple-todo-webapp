const form = document.querySelector("form")
const input_field = document.querySelector("#input-field")
const ul = document.querySelector("ul")

form.addEventListener("submit", e => {
    e.preventDefault()
    const new_item = document.createElement("li")
    new_item.innerText = input_field.value
    ul.appendChild(new_item)
    const cancel = document.createElement("img")
    new_item.appendChild(cancel)
    cancel.src = "pngtree-vector-cancel-icon-png-image_420077.jpg"
    input_field.value = ""
    new_item.addEventListener("click", () => {
        new_item.classList.toggle("canceled-item")
    })
    cancel.addEventListener("click", () => {
        const list_child = cancel.parentElement
        list_child.parentElement.removeChild(list_child)
    })
})