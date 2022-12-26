{
    const tasks = [
        {
            content: "test1",
            done: false,
        },
        {
            content: "test2",
            done: true,
        },
    ];
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };
    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };
    const toggleStatus = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => { removeTask(index); })
        });

        const toggleStatusButtons = document.querySelectorAll(".js-done");

        toggleStatusButtons.forEach((toggleStatusButton, index) => {
            toggleStatusButton.addEventListener("click", () => { toggleStatus(index); })
        });
    };
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            class="list__item${task.done ? " list__item--done" : ""}">
            <button class="js-done">Zrobione?</button>
            <button class="js-remove">Usuń</button>
            ${task.content}
            </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}