function TaskData(name, date, assigned) {
	this.name = name;
	this.date = date;
	this.assigned = assigned;
}

function addTask(){
	var name = document.getElementById('name').value;
	var date = document.getElementById('date').value;
	var assigned = document.getElementById('assigned').value;
	var table = document.getElementById('taskTable');
	
	var data = new TaskData(name, date, assigned);
	
	insertRow(table, data);
}

/**
 * Creates a table row from data.
 * @param {Object} table
 * @param {TaskData} taskData
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