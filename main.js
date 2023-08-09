window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //  stops it to prvent refesh the form

    const task = input.value;

    if (!task) {
      alert("plases fill out the task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);
    // document.createElement() to create a new HTML element and attach it to the DOM tree.
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    // TO EDIT
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    // task_edit_el.innerHTML = "Edit";
    const editIcon = document.createElement("i");
    editIcon.style.color = "#2A563F";
    editIcon.classList.add("ri-edit-box-fill");
    task_edit_el.appendChild(editIcon);

    // TO DELETE
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    // task_delete_el.innerHTML = "Delete";
    const deleteIcon = document.createElement("i");
    deleteIcon.style.color = "crimson";
    deleteIcon.classList.add("ri-delete-bin-6-fill");
    task_delete_el.appendChild(deleteIcon);

    // appendChild() method to add a node to the end of the list of child nodes of a specified parent node.
    // Actions
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    
    // edit

    task_edit_el.addEventListener("click", () => {
      if (
        task_edit_el.querySelector("i").classList.contains("ri-edit-box-fill")
      ) {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.querySelector("i").classList.remove("ri-edit-box-fill");
        task_edit_el.querySelector("i").classList.add("ri-save-fill");
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.querySelector("i").classList.remove("ri-save-fill");
        task_edit_el.querySelector("i").classList.add("ri-edit-box-fill");
      }
    });

    // delete
    task_delete_el.addEventListener("click", () => {
      task_content_el.classList.add("deleted");
      setTimeout(() => {
        list_el.removeChild(task_el);
      }, 1000);
    });
  });
});
