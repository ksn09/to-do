# To-Do App
This is a simple to-do app built with vanilla JavaScript. It allows users to add tasks to a list, mark tasks as complete, and delete tasks.

## Features
- Add tasks to the to-do list
- Mark tasks as complete
- Delete tasks from the list
- Automatically save tasks to local storage
- Retrieve tasks from local storage on page load

## Usage
To use the app, simply open the index.html file in your web browser. You should see a simple form with a text input and a button. Enter a task in the text input and click the button to add it to the list.
To mark a task as complete, click the checkbox next to the task. To delete a task, click the "x" button next to the task.

## Development
To develop the app, you can clone the repository and open the files in your text editor of choice. The app consists of three files:

- index.html: the HTML structure of the app
- styles.css: the CSS styling for the app
- script.js: the JavaScript code for the app


The app uses the localStorage object to store tasks between page loads. When a user adds or modifies a task, the app calls the saveTasks function to update the local storage.
