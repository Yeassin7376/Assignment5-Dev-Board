document.getElementById('theme-btn')
    .addEventListener('click', function (event) {

        event.preventDefault();
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'slate'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const body = document.getElementById('body');
        for (color of colors) {
            body.classList.remove("bg-" + color + "-100")
        }
        body.classList.add("bg-" + randomColor + '-100');
        console.log(body.classList);


    })


// current date 

let today = new Date();
let optionsWeekday = { weekday: 'short'};
let optionsDate = {month: 'short', day: 'numeric', year: 'numeric' };

document.getElementById('weekday').innerText = today.toLocaleDateString('en-US', optionsWeekday )+",";
document.getElementById("current-date").textContent = today.toLocaleDateString('en-US', optionsDate);

// document.getElementById("current-date").innerText = formattedDate;