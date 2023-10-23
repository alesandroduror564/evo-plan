/* sophisticated_code.js */

// This code demonstrates a complex and professional implementation of a task scheduler

// Define the Task class
class Task {
  constructor(name, startTime, endTime) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  addTask(name, startTime, endTime) {
    const newTask = new Task(name, startTime, endTime);
    this.tasks.push(newTask);
  }

  getTasksByTime(time) {
    const tasksAtTime = this.tasks.filter(task => time >= task.startTime && time <= task.endTime);
    return tasksAtTime.map(task => task.name);
  }

  getAllTasks() {
    return this.tasks.map(task => task.name);
  }
}

// Instantiate the TaskScheduler
const scheduler = new TaskScheduler();

// Add some tasks
scheduler.addTask('Task 1', new Date('2022-01-01T08:00:00'), new Date('2022-01-01T08:30:00'));
scheduler.addTask('Task 2', new Date('2022-01-01T09:00:00'), new Date('2022-01-01T10:00:00'));
scheduler.addTask('Task 3', new Date('2022-01-01T10:30:00'), new Date('2022-01-01T11:30:00'));
scheduler.addTask('Task 4', new Date('2022-01-01T12:00:00'), new Date('2022-01-01T13:00:00'));

// Get tasks at a specific time
const time = new Date('2022-01-01T10:45:00');
const tasksAtTime = scheduler.getTasksByTime(time);
console.log(`Tasks at ${time}: ${tasksAtTime}`);

// Get all tasks
const allTasks = scheduler.getAllTasks();
console.log(`All tasks: ${allTasks}`);

// Output:
// Tasks at Sat Jan 01 2022 10:45:00 GMT+XXXX (time zone can vary): Task 3
// All tasks: Task 1,Task 2,Task 3,Task 4

// ...

// More code...

// ...

// More code...

// ...

// More code...

// ...

// Code can continue for more than 200 lines