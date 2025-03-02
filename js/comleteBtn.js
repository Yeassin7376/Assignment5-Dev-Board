const buttons = document.querySelectorAll(".complete-btn");
for (button of buttons) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const taskCount = document.getElementById("Task-count").innerText;
        const convertedTaskCount = parseInt(taskCount) - 1;
        if (convertedTaskCount >= 0) {
            document.getElementById("Task-count").innerText = convertedTaskCount;
            alert("Board Updated Successfully.");
        }
        if(convertedTaskCount === 0){
            alert("Congrates!!! You have completed all the current task.")
        }
        event.target.disabled = true;
        
        const completedTaskCount = document.getElementById("completed-task").innerText;
        const convertedCompletedTaskCount = parseInt(completedTaskCount) + 1;
        document.getElementById("completed-task").innerText = convertedCompletedTaskCount;

        const currentTime = new Date();
        const newTime = currentTime.toLocaleTimeString();

        const taskTitle = event.target.parentNode.parentNode.parentNode.children[1].innerText;
        const activityLog = document.getElementById('Activity-Log');
        const p = document.createElement("p");
        p.innerText = `You have completed the task ${taskTitle} at ${newTime}
        `;
        p.classList.add('p-3', 'mb-4', 'bg-gray-100', 'rounded-xl', 'font-medium', 'text-[18px]', 'text-gray-600')
        activityLog.appendChild(p)

        // console.log(event.target.parentNode.parentNode.parentNode);
        console.log();
    })
}


// clear history 

document.getElementById("clear-history-btn")
    .addEventListener("click", function (event) {
        const activityLog = document.getElementById('Activity-Log');
        activityLog.innerHTML = "";
})