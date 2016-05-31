/**
 * Represents a row of data for the task table.
 * @constructor
 * @param {string} name - The name of the task.
 * @param {string} date - The date the task was assigned.
 * @param {string} assigned - Who the task was assigned to.
 */
function TaskData(name, date, assigned) {
	this.name = name;
	this.date = date;
	this.assigned = assigned;
}

/**
 * Creates a table row from data.
 * @param {Object} table
 * @param {Object} taskData
 */
function insertRow(table, task) {
	var row = table.insertRow(-1);
	
	var taskCell = row.insertCell(0);
	taskCell.setAttribute('id', 'table-name');
	taskCell.innerHTML = task.name;
	
	var dateCell = row.insertCell(1);
	dateCell.setAttribute('id', 'table-date');
	dateCell.innerHTML = task.date;
	
	var assignedCell = row.insertCell(2);
	assignedCell.setAttribute('id', 'table-assigned');
	assignedCell.innerHTML = task.assigned;

}

/**
 * Adds a new task upon form submission.
 */
function addTaskFromForm(){
	var name = document.getElementById('name').value;
	var date = document.getElementById('date').value;
	var assigned = document.getElementById('assigned').value;
	var table = document.getElementById('taskTable');
	
	var data = new TaskData(name, date, assigned);
	
	insertRow(table, data);
}

/**
 * Loads initial data into the Task Table.
 */
function loadData(){
	var table = document.getElementById('taskTable');
	
	for (var i = 0; i < taskData.tasks.length; i++){
		var task = new TaskData(
			taskData.tasks[i]['name'],
			taskData.tasks[i]['date'],
			taskData.tasks[i]['assigned'])
		insertRow(table, task);
	}
}

window.onload = loadData;