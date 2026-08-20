// DATABASE
const queue = [
    {
        id: 1,
        doctorId: 1,
        name: "Rajesh Subramaniam",
        time: "08:15",
        date: "2026-08-17",
        reason: "Hypertension follow-up",
        status: "done",
        position: 1,
    },
    {
        id: 2,
        doctorId: 1,
        name: "Priya Venkataraman",
        time: "08:30",
        date: "2026-08-17",
        reason: "Annual check-up",
        status: "in-progress",
        position: 2,
    },
    {
        id: 3,
        doctorId: 1,
        name: "Marcus Okonkwo",
        time: "08:45",
        date: "2026-08-17",
        reason: "Persistent cough",
        status: "waiting",
        position: 3,
    },
    {
        id: 4,
        doctorId: 1,
        name: "Lina Bergström",
        time: "09:00",
        date: "2026-08-17",
        reason: "Prescription renewal",
        status: "waiting",
        position: 4,
    },
    {
        id: 5,
        doctorId: 2,
        name: "Hamid Taheri",
        time: "09:00",
        date: "2026-08-17",
        reason: "Chest pain evaluation",
        status: "done",
        position: 1,
    },
    {
        id: 6,
        doctorId: 2,
        name: "Elena Popescu",
        time: "09:15",
        date: "2026-08-17",
        reason: "ECG review",
        status: "in-progress",
        position: 2,
    },
    {
        id: 7,
        doctorId: 2,
        name: "Fatima Al-Rashid",
        time: "09:30",
        date: "2026-08-17",
        reason: "Blood pressure management",
        status: "waiting",
        position: 3,
    },
    {
        id: 8,
        doctorId: 3,
        name: "Yuki Tanaka",
        time: "08:00",
        date: "2026-08-17",
        reason: "Child vaccination",
        status: "done",
        position: 1,
    },
    {
        id: 9,
        doctorId: 3,
        name: "Amara Diallo Jr.",
        time: "08:20",
        date: "2026-08-17",
        reason: "Fever & rash",
        status: "in-progress",
        position: 2,
    },
    {
        id: 10,
        doctorId: 3,
        name: "Kofi Mensah",
        time: "08:40",
        date: "2026-08-17",
        reason: "Growth assessment",
        status: "waiting",
        position: 3,
    },
    {
        id: 11,
        doctorId: 4,
        name: "Ivan Petrov",
        time: "09:00",
        date: "2026-08-18",
        reason: "Knee replacement consult",
        status: "waiting",
        position: 1,
    },
    {
        id: 12,
        doctorId: 4,
        name: "Sara López",
        time: "09:30",
        date: "2026-08-18",
        reason: "Back pain & MRI review",
        status: "waiting",
        position: 2,
    },
    {
        id: 13,
        doctorId: 5,
        name: "David Kim",
        time: "10:00",
        date: "2026-08-17",
        reason: "Migraine management",
        status: "in-progress",
        position: 1,
    },
    {
        id: 14,
        doctorId: 5,
        name: "Nadia Rousseau",
        time: "10:30",
        date: "2026-08-17",
        reason: "EEG result review",
        status: "waiting",
        position: 2,
    },
    {
        id: 15,
        doctorId: 6,
        name: "Aiko Suzuki",
        time: "08:00",
        date: "2026-08-18",
        reason: "Eczema treatment",
        status: "waiting",
        position: 1,
    },
    {
        id: 16,
        doctorId: 6,
        name: "Ben Okafor",
        time: "08:30",
        date: "2026-08-18",
        reason: "Psoriasis follow-up",
        status: "waiting",
        position: 2,
    }
]

const doctors = [
    {
        id: 1,
        name: "dr. Salwa Az-Zahra, Sp.JP",
        specialty: "Spesialis Jantung dan Pembuluh Darah",
        photo: "image/doctorfemale.jpg",
        room: "Room A",
        active: 1,
        wait: 2
    },
    {
        id: 2,
        name: "dr. Daaniys Nadya Shafwa, Sp.A",
        specialty: "Spesialis Anak",
        photo: "image/doctorfemale.jpg",
        room: "Room B",
        active: 1,
        wait: 1
    },
    {
        id: 3,
        name: "dr. Shania Risky Agustin, Sp.OG",
        specialty: "Spesialis Obsteri & Ginekologi",
        photo: "image/doctorfemale.jpg",
        room: "Room C",
        active: 1,
        wait: 1
    },
    {
        id: 4,
        name: "dr. Reynaldo William Tendean, Sp.Rad",
        specialty: "Spesialis Radiolog",
        photo: "image/doctormale.jpg",
        room: "Room D",
        active: 1,
        wait: 2
    },
    {
        id: 5,
        name: "dr. Olga Hadi Purna Wahab Basalamah",
        specialty: "Umum",
        photo: "image/doctormale.jpg",
        room: "Room E",
        active: 1,
        wait: 1
    },
    {
        id: 6,
        name: "dr. A. Muh. Ilhamsyah",
        specialty: "Umum",
        photo: "image/doctormale.jpg",
        room: "Room F",
        active: 1,
        wait: 4
    }
]

// FUNCTION HEADER
function headerQueue(queue) {
    let totalDone = 0;
    let totalWaiting = 0;
    let totalInProgress = 0;

    for (let i = 0; i < queue.length; i++) {

        let status = queue[i].status;

        if (status === "done") {
            totalDone++
        } else if (status === "waiting") {
            totalWaiting++
        } else if (status === 'in-progress') {
            totalInProgress++
        }
    }

    return [totalWaiting, totalInProgress, totalDone];
}

function headerTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayName = days[today.getDay()];

    const tanggal = today.getDate();

    const bulanLengkap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const bulan = bulanLengkap[today.getMonth()];
    const tahun = today.getFullYear();

    return {
        hari: dayName,
        date: `${tanggal} ${bulan} ${tahun}`
    }
}

// DOM HEADER
// Header Jumlah Antrian
let headerWaiting = document.querySelector('.headerWaiting');
let headerInProgress = document.querySelector('.headerInProgress');
let headerDone = document.querySelector('.headerDone');

headerWaiting.textContent = headerQueue(queue)[0];
headerInProgress.textContent = headerQueue(queue)[1];
headerDone.textContent = headerQueue(queue)[2];

// Header Date
let headerDay = document.querySelector('.headerDay');
let headerDate = document.querySelector('.headerDate');

headerDay.textContent = headerTime().hari;
headerDate.textContent = headerTime().date;

// DOM DOCTORS ON DUTY
const doctorList = document.getElementById("doctor-list")

for (let i = 0; i < doctors.length; i++) {

    doctorList.innerHTML += `
        <div class="card doctor-card">
            <img
                src="${doctors[i].photo}"
                class="card-img-top doctor-photo"
                alt="${doctors[i].name}"
            >
            <div class="card-body">
                <h5 class="card-title">
                    ${doctors[i].name}
                </h5>
                <p class="card-text">
                    ${doctors[i].specialty}
                </p>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    ${doctors[i].room}
                </li>
                <li class="list-group-item">
                    ${doctors[i].active > 0
            ? `${doctors[i].active} active`
            : ""
        }
                    ${doctors[i].wait > 0
            ? `${doctors[i].wait} wait`
            : ""
        }
                </li>
            </ul>
        </div>

    `
}


//REYNALDO//

// Get color for status color in html
function getStatusColor(status) {
    switch (status) {
        case `done`:
            return {
                color: `#8E8E93`,
                backgroundColor: `#F2F2F2`,
            }
            break
        case `in-progress`:
            return {
                color: `#1C5C50`,
                backgroundColor: `#E3FAF4`
            }
            break
        case `waiting`:
            return {
                color: `#664D03`,
                backgroundColor: `#FFF3CD`
            }
            break
    }
}

// Get a queue list from database (object)
function getQueue(daftarAntrian) {
    let str = ``

    for (const element of daftarAntrian) {
        const date = new Date(element.date + "T00:00:00");
        const shortDate = date.toLocaleString('en-GB', { day: 'numeric', month: 'short' });

        const resGetStatusColor = getStatusColor(element.status)

        str +=
            `<tr>
                <td style="color: grey;">${element.id}</td>
                <td style="white-space: pre-line;">${element.name}\n${element.reason}</td>
                <td style="white-space: pre-line;">${doctors[element.doctorId - 1].name}\n${doctors[element.doctorId - 1].room} </td>
                <td style="white-space: pre-line;">${element.time}\n${shortDate}</td>
                <td class="align-middle"><div class="rounded p-1" style="width: fit-content; color: ${resGetStatusColor.color}; background-color: ${resGetStatusColor.backgroundColor};">${element.status}</div></td>
                <td class="align-middle"><button data-bs-toggle="modal" data-bs-target="#editModal" id="queue${element.id}" 
                    type="button" class="btn primaryButton-custom-select" data-id="${element.id}" data-status="${element.status}" 
                    data-date="${element.date}" data-time="${element.time}" data-name="${element.name}" data-doctor="${doctors[element.doctorId - 1].name}">
                    <i class="bi bi-pencil-square"></i>Edit</button>
                </td>
            </tr>`
    }//
    document.getElementById("isiTable").innerHTML = str
}

//Get patient count to show at heading
function getPatientCount(daftarAntrian) {
    document.getElementById("headingBanyakPasien").innerText = `${daftarAntrian.length} Patient shown`
}

// Sort number
function sortTableNum() {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("queueTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// Sort non-number
function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("queueTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// Get doctor list to show at dropdown button
function getDoctorList(doctorList) {
    let str = `<li><button class="dropdown-item" type="button" onclick="filterByDocName('all')">All Doctor</button></li>`

    for (const element of doctorList) {
        let name = element[`name`]
        str += `<li><button class="dropdown-item" type="button" onclick="filterByDocName('${name}')">${name}</button></li>`
    }
    document.getElementById("dropDownDocList").innerHTML = str
}

//FILTER DOCTOR NAME ON DROPDOWN
function filterByDocName(name) {
    // Declare variables
    let table = document.getElementById(`isiTable`);
    let tr = table.getElementsByTagName(`tr`);


    if (name === `all`) {
        for (let i = 0; i < tr.length; i++) {
            tr[i].style.display = "";
        }
        document.getElementById(`buttonDropDown`).innerText = `All Doctors`
    } else {
        // Loop through all table rows, and hide those who don't match the search query
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[2].innerHTML;
            let search = td.split(`\n`)[0];
            if (search) {
                if (search === name) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
        document.getElementById(`buttonDropDown`).innerText = name
    }
}

//LISTENER FOR EDIT BUTTON
function listener() {
    // Attach event listeners to all trigger buttons
    document.querySelectorAll('.primaryButton-custom-select').forEach(button => {
        button.addEventListener('click', () => {
            const nowDate = new Date().toLocaleDateString('en-CA')

            const id = button.dataset.id;
            const name = button.dataset.name
            const doctor = button.dataset.doctor
            const date = button.dataset.date;
            const status = button.dataset.status;
            const time = button.dataset.time;

            document.getElementById('modal-id').value = id
            document.getElementById('modal-name').placeholder = name
            document.getElementById('modal-doctor').placeholder = doctor
            document.getElementById('modal-date').value = date;
            document.getElementById('modal-date').min = nowDate;
            document.getElementById('modal-time').value = time;
            document.getElementById('modal-status').value = status;
        });
    });
}

//FUNCTION TO EDIT ARR QUEUE
function editFunction() {
    const id = document.getElementById('modal-id').value
    const date = document.getElementById('modal-date').value
    const time = document.getElementById('modal-time').value
    const status = document.getElementById('modal-status').value

    queue[id - 1].time = time
    queue[id - 1].date = date
    queue[id - 1].status = status

    getQueue(queue)
    listener()
}

getQueue(queue)
getPatientCount(queue)
getDoctorList(doctors)
listener()

//END REYNALDO//