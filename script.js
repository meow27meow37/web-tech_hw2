const input = document.querySelector("#myinput");
const button = document.querySelector("#mybutton");
const container = document.querySelector("#taskContainer");

function checkEmpty() {
    if (container.children.length === 0) {
        container.innerHTML = "<p id='empty'>список пуст</p>";
    }
}

checkEmpty();

button.addEventListener('click', () => {
    if (!input.value.trim()) return;

    const emptyMsg = document.querySelector("#empty");
    if (emptyMsg) emptyMsg.remove();

    const task = document.createElement("p");
    task.textContent = "* " + input.value;

    task.addEventListener('click', () => {
        task.remove();
        checkEmpty();
    });

    container.append(task);
    input.value = "";
});