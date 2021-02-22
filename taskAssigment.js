function taskAssignment(k, tasks) {
	const result = []
	const tasksDurationIdx = tasks.map((duration, idx) => ({duration, idx}))
	const sortedTasks = tasksDurationIdx.sort((a,b) => a.duration - b.duration)
	for (let i=0; i<sortedTasks.length/2; i++) {
		const first = sortedTasks[i].idx
		const second = sortedTasks[sortedTasks.length - 1 - i].idx
		result.push([first, second])
	}
  return result;
}

const tasks = [1, 3, 5, 3, 1, 4]
console.log(taskAssignment(3, tasks))
