document.addEventListener("DOMContentLoaded", () => {
  // your code here
   // Select the form using its ID
   const form = document.getElementById("create-task-form");
  
   // Add an event listener to the form for the "submit" event
   form.addEventListener("submit", function(event) {
     // Prevent the default form submit action
     event.preventDefault();
     
     // Get the task description from the input field
     const taskDescription = event.target["new-task-description"].value;
 
     // Create a new list item element
     const newTask = document.createElement("li");
     
     // Set the text content of the new list item to the task description
     newTask.textContent = taskDescription;
     
     // Optionally, add a delete button to each task
     const deleteBtn = document.createElement("button");
     deleteBtn.textContent = "X";
     deleteBtn.addEventListener("click", function(e) {
       e.target.parentNode.remove();
     });
     newTask.appendChild(deleteBtn);
     
     // Select the tasks list using its ID (assuming there's an <ul> or <ol> with id="tasks" in your HTML)
     const taskList = document.getElementById("tasks");
     
     // Append the new task list item to the tasks list
     taskList.appendChild(newTask);
     
     // Clear the input field to ready it for the next task entry
     form.reset();
   });
});
