const doctors = [
    {
        id: 1,
        name: "dr. Salwa Az-Zahra, Sp.JP",
        specialty: "Spesialis Jantung dan Pembuluh Darah",
        photo:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&auto=format",
        room: "Room A",
        active: 1,
        wait: 2,
    },
    {
        id: 2,
        name: "dr. Daaniys Nadya Shafwa, Sp.A",
        specialty: "Spesialis Anak",
        photo:
            "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=80&h=80&fit=crop&auto=format",
        room: "Room B",
        active: 1,
        wait: 1,
    },
    {
        id: 3,
        name: "dr. Shania Risky Agustin, Sp.OG",
        specialty: "Spesialis Obsteri & Ginekologi",
        photo:
            "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=80&h=80&fit=crop&auto=format",
        room: "Room C",
        active: 1,
        wait: 1,
    },
    {
        id: 4,
        name: "dr. Reynaldo William Tendean, Sp.Rad",
        specialty: "Spesialis Radiolog",
        photo:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&auto=format",
        room: "Room D",
        active: 0,
        wait: 2,
    },
    {
        id: 5,
        name: "dr. Olga Hadi Purna Wahab Basalamah",
        specialty: "Umum",
        photo:
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&auto=format",
        room: "Room E",
        active: 1,
        wait: 1,
    },
    {
        id: 6,
        name: "dr. A. Muh. Ilhamsyah",
        specialty: "Umum",
        photo: "image/bruno.jpg",
        room: "Room F",
        active: 0,
        wait: 2,
    },
];

const INITIAL_SCHEDULE = [
    {
        id: 1,
        doctorId: 1,
        day: "Monday",
        startTime: "08:00",
        endTime: "12:00",
        slots: 20,
        booked: 14,
    },
    {
        id: 2,
        doctorId: 1,
        day: "Monday",
        startTime: "14:00",
        endTime: "17:00",
        slots: 12,
        booked: 8,
    },
    {
        id: 4,
        doctorId: 2,
        day: "Monday",
        startTime: "09:00",
        endTime: "13:00",
        slots: 16,
        booked: 16,
    },
    {
        id: 5,
        doctorId: 2,
        day: "Tuesday",
        startTime: "08:00",
        endTime: "11:00",
        slots: 12,
        booked: 7,
    },
    {
        id: 7,
        doctorId: 3,
        day: "Monday",
        startTime: "08:00",
        endTime: "11:00",
        slots: 12,
        booked: 9,
    },
    {
        id: 8,
        doctorId: 3,
        day: "Wednesday",
        startTime: "13:00",
        endTime: "16:00",
        slots: 10,
        booked: 6,
    },
    {
        id: 10,
        doctorId: 4,
        day: "Tuesday",
        startTime: "09:00",
        endTime: "13:00",
        slots: 14,
        booked: 14,
    },
    {
        id: 11,
        doctorId: 4,
        day: "Thursday",
        startTime: "08:00",
        endTime: "12:00",
        slots: 14,
        booked: 5,
    },
    {
        id: 13,
        doctorId: 5,
        day: "Monday",
        startTime: "10:00",
        endTime: "13:00",
        slots: 10,
        booked: 8,
    },
    {
        id: 14,
        doctorId: 5,
        day: "Wednesday",
        startTime: "09:00",
        endTime: "12:00",
        slots: 10,
        booked: 10,
    },
    {
        id: 16,
        doctorId: 6,
        day: "Tuesday",
        startTime: "08:00",
        endTime: "12:00",
        slots: 16,
        booked: 11,
    },
    {
        id: 17,
        doctorId: 6,
        day: "Thursday",
        startTime: "09:00",
        endTime: "13:00",
        slots: 16,
        booked: 7,
    },
];

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
    },
];

let scheduleSearch = "";
let scheduleDoctorFilter = "all";

const scheduleContainer = document.getElementById("scheduleContainer");
const scheduleCount = document.getElementById("scheduleCount");
const scheduleSearchInput = document.getElementById("scheduleSearch");
const scheduleDoctorFilterInput = document.getElementById(
    "scheduleDoctorFilter",
);

function getDoctor(doctorId) {
    return doctors.find(function (doctor) {
        return doctor.id === doctorId;
    });
}

function fmt(date) {
    return new Date(date + "T00:00:00").toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
    });
}

let bookedSchedule = JSON.parse(localStorage.getItem("bookedSchedule") || "{}");

function getCurrentSchedule() {
    const result = [];

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    for (let i = 0; i <= 7; i++) {
        const currentDate = new Date();

        currentDate.setHours(0, 0, 0, 0);
        currentDate.setDate(currentDate.getDate() + i);

        const currentDay = days[currentDate.getDay()];

        const year = currentDate.getFullYear();

        const month = String(currentDate.getMonth() + 1).padStart(2, "0");

        const date = String(currentDate.getDate()).padStart(2, "0");

        const dateString = `${year}-${month}-${date}`;

        for (let j = 0; j < INITIAL_SCHEDULE.length; j++) {
            const schedule = INITIAL_SCHEDULE[j];

            if (schedule.day === currentDay) {
                let booked = 0;

                for (let k = 0; k < queue.length; k++) {
                    const patient = queue[k];

                    if (
                        patient.doctorId === schedule.doctorId &&
                        patient.date === dateString &&
                        patient.time >= schedule.startTime &&
                        patient.time < schedule.endTime
                    ) {
                        booked++;
                    }
                }

                result.push({
                    ...schedule,
                    date: dateString,
                    booked: booked,
                });
            }
        }
    }
    return result;
}

function getFilteredSchedule() {
    const search = scheduleSearch.toLowerCase();
    const currentSchedule = getCurrentSchedule();

    return currentSchedule.filter(function (slot) {
        const doctor = getDoctor(slot.doctorId);
        const doctorMatch =
            scheduleDoctorFilter === "all" ||
            slot.doctorId === Number(scheduleDoctorFilter);

        if (!doctorMatch) {
            return false;
        }

        if (!search) {
            return true;
        }

        return (
            slot.day.toLowerCase().includes(search) ||
            slot.date.includes(search) ||
            slot.startTime.includes(search) ||
            doctor.name.toLowerCase().includes(search) ||
            doctor.specialty.toLowerCase().includes(search)
        );
    });
}

function renderDoctorOptions() {
    let html = `
    <option value="all">
      All Doctors
    </option>
  `;

    for (let i = 0; i < doctors.length; i++) {
        html += `
      <option value="${doctors[i].id}">
        ${doctors[i].name}
      </option>
    `;
    }

    return html;
}

function renderSchedule() {
    const schedules = getFilteredSchedule();
    scheduleCount.textContent = `${schedules.length} sessions this week`;
    if (schedules.length === 0) {
        scheduleContainer.innerHTML = `
      <div class="empty">
        No sessions found
      </div>
    `;

        return;
    }

    let html = "";
    for (let i = 0; i < schedules.length; i++) {
        const slot = schedules[i];
        const doctor = getDoctor(slot.doctorId);
        const full = slot.booked >= slot.slots;
        const openSlots = slot.slots - slot.booked;
        const percentage = Math.round((slot.booked / slot.slots) * 100);
        html += `
      <div class="schedule-item">
        <div class="schedule-main">
          <img
            src="${doctor.photo}"
            alt="${doctor.name}"
            class="schedule-photo"
          >
          <div class="schedule-info">
            <div class="schedule-title-row">
              <p class="schedule-doctor">
                ${doctor.name}
              </p>
              <span class="schedule-open ${full ? "full" : "available"}">
                ${full ? "Full" : `${openSlots} open`}
              </span>
            </div>
            <div class="schedule-meta">
              <span class="schedule-day">
                ${slot.day} ${fmt(slot.date)}
              </span>
              <span class="dot">·</span>
              <span class="schedule-time">
                ${slot.startTime}–${slot.endTime}
              </span>
              <span class="dot">·</span>
              <span class="schedule-room">
                ${doctor.room}
              </span>
            </div>
            <div class="availability">
              <div class="availability-track">
                <div
                  class="availability-bar ${full ? "full" : "available"}"
                  style="width: ${percentage}%"
                ></div>
              </div>
              <span
                class="availability-text ${full ? "full" : "available"}"
              >
                ${full ? "Full" : `${openSlots} left`}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    scheduleContainer.innerHTML = html;
}

scheduleSearchInput.addEventListener("input", function (event) {
    scheduleSearch = event.target.value;
    renderSchedule();
});

scheduleDoctorFilterInput.addEventListener("change", function (event) {
    scheduleDoctorFilter = event.target.value;
    renderSchedule();
});

scheduleDoctorFilterInput.innerHTML = renderDoctorOptions();

renderSchedule();

// ANIMASI GSAP

function playAnimation(shape) {
    let tl = gsap.timeline();
    tl.from(shape, {
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1,0.3)",
    })
        .to(
            shape,
            {
                rotation: "random([-360, 360])",
            },
            "<",
        )
        .to(
            shape,
            {
                y: "120vh",
                ease: "back.in(.4)",
                duration: 1,
            },
            0,
        );
}

let gap = 70;
let flair = gsap.utils.toArray(".flair");
let index = 0;
let wrapper = gsap.utils.wrap(0, flair.length);

gsap.defaults({
    duration: 1,
});

let mousePos = {
    x: 0,
    y: 0,
};

let lastMousePos = {
    x: 0,
    y: 0,
};

let cachedMousePos = {
    x: 0,
    y: 0,
};

window.addEventListener("mousemove", function (event) {
    mousePos = {
        x: event.clientX,
        y: event.clientY,
    };
});
gsap.ticker.add(ImageTrail);

function ImageTrail() {
    let travelDistance = Math.hypot(
        lastMousePos.x - mousePos.x,
        lastMousePos.y - mousePos.y,
    );

    cachedMousePos.x = gsap.utils.interpolate(
        cachedMousePos.x || mousePos.x,
        mousePos.x,
        0.1,
    );

    cachedMousePos.y = gsap.utils.interpolate(
        cachedMousePos.y || mousePos.y,
        mousePos.y,
        0.1,
    );

    if (travelDistance > gap) {
        animateImage();
        lastMousePos = mousePos;
    }
}

function animateImage() {
    let wrappedIndex = wrapper(index);
    let img = flair[wrappedIndex];
    gsap.killTweensOf(img);
    gsap.set(img, {
        clearProps: "all",
    });

    gsap.set(img, {
        opacity: 1,
        left: mousePos.x,
        top: mousePos.y,
        xPercent: -50,
        yPercent: -50,
    });

    playAnimation(img);

    index++;
}
// DATABASE

// LIST DOCTOR //

// SHANIA
// FUNCTION HEADER
function headerQueue(queue) {
    let totalDone = 0;
    let totalWaiting = 0;
    let totalInProgress = 0;

    for (let i = 0; i < queue.length; i++) {
        let status = queue[i].status;

        if (status === "done") {
            totalDone++;
        } else if (status === "waiting") {
            totalWaiting++;
        } else if (status === "in-progress") {
            totalInProgress++;
        }
    }

    return [totalWaiting, totalInProgress, totalDone];
}

function headerTime() {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const today = new Date();
    const dayName = days[today.getDay()];

    const tanggal = today.getDate();

    const bulanLengkap = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const bulan = bulanLengkap[today.getMonth()];
    const tahun = today.getFullYear();

    return {
        hari: dayName,
        date: `${tanggal} ${bulan} ${tahun}`,
    };
}

// DOM HEADER
// Header Jumlah Antrian
function header() {
    let headerWaiting = document.querySelector(".headerWaiting");
    let headerInProgress = document.querySelector(".headerInProgress");
    let headerDone = document.querySelector(".headerDone");

    headerWaiting.textContent = headerQueue(queue)[0];
    headerInProgress.textContent = headerQueue(queue)[1];
    headerDone.textContent = headerQueue(queue)[2];

    // Header Date
    let headerDay = document.querySelector(".headerDay");
    let headerDate = document.querySelector(".headerDate");

    headerDay.textContent = headerTime().hari;
    headerDate.textContent = headerTime().date;
}
// END SHANIA

// ILHAM
// DOM DOCTORS ON DUTY

function doctorDuty() {
    const doctorList = document.getElementById("doctor-list");
    let str = ``

    for (let i = 0; i < doctors.length; i++) {
        str +=
            `<div class="card doctor-card d-flex align-items-center">
            <img
                src="${doctors[i].photo}"
                class="card-img-top doctor-photo border rounded-circle"
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
                <li class="list-group-item item-room">
                    ${doctors[i].room}
                </li>
                <li class="list-group-item item-status">
                <span class="doctor-active">${doctors[i].active > 0 ? `${doctors[i].active} active` : "0 active"}</span>
                <span class="doctor-wait">${doctors[i].wait > 0 ? `${doctors[i].wait} wait` : "0 wait"}</span>
                </li>
            </ul>
        </div>`
    }
    doctorList.innerHTML = str
}

doctorDuty()
// END ILHAM

//REYNALDO//
// Get color for status color in html
function getStatusColor(status) {
    switch (status) {
        case `done`:
            return {
                color: `#8E8E93`,
                backgroundColor: `#F2F2F2`,
            };
            break;
        case `in-progress`:
            return {
                color: `#1C5C50`,
                backgroundColor: `#E3FAF4`,
            };
            break;
        case `waiting`:
            return {
                color: `#664D03`,
                backgroundColor: `#FFF3CD`,
            };
            break;
    }
}

// Get a queue list from database (object)
function getQueue(daftarAntrian) {
    let str = ``;

    for (const element of daftarAntrian) {
        const date = new Date(element.date + "T00:00:00");
        const shortDate = date.toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
        });

        const resGetStatusColor = getStatusColor(element.status);

        let visible = ``;
        if (element.status === `done`) {
            visible = `none`;
        }

        str += `<tr>
                <td class="number-list-queue" style="color: grey;">${element.id}</td>
                <td class="table-info-queue" style="white-space: pre-line;">${element.name}\n${element.reason}</td>
                <td class="table-info-queue" style="white-space: pre-line;">${doctors[element.doctorId - 1].name}\n${doctors[element.doctorId - 1].room} </td>
                <td class="table-info-queue" style="white-space: pre-line;">${element.time}\n${shortDate}</td>
                <td class="align-middle table-info-queue"><div class="rounded p-1" style="width: fit-content; color: ${resGetStatusColor.color}; background-color: ${resGetStatusColor.backgroundColor};">${element.status}</div></td>
                <td class="align-middle table-info-queue"><button data-bs-toggle="modal" data-bs-target="#editModal" id="queue${element.id}" 
                    type="button" class="btn primaryButton-custom-select table-info-queue" data-id="${element.id}" data-status="${element.status}" 
                    data-date="${element.date}" data-time="${element.time}" data-name="${element.name}" data-doctor="${doctors[element.doctorId - 1].name}" style="display: ${visible}">
                    <i class="bi bi-pencil-square"></i>Edit</button>
                </td>
            </tr>`;
    } //
    document.getElementById("isiTable").innerHTML = str;
}

//Get patient count to show at heading
function getPatientCount(daftarAntrian) {
    document.getElementById("headingBanyakPasien").innerText =
        `${daftarAntrian.length} Patient shown`;
}

// Sort number
function sortTableNum() {
    let table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
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
        for (i = 1; i < rows.length - 1; i++) {
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
    let table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
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
        for (i = 1; i < rows.length - 1; i++) {
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
    let str = `<li><button class="dropdown-item" type="button" onclick="filterByDocName('all')">All Doctor</button></li>`;

    for (const element of doctorList) {
        let name = element[`name`];
        str += `<li><button class="dropdown-item" type="button" onclick="filterByDocName('${name}')">${name}</button></li>`;
    }
    document.getElementById("dropDownDocList").innerHTML = str;
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
        document.getElementById(`buttonDropDown`).innerText = `All Doctors`;
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
        document.getElementById(`buttonDropDown`).innerText = name;
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

            document.getElementById(`opt1`).selected = false
            document.getElementById(`opt2`).selected = false
            document.getElementById(`opt3`).selected = false

            document.getElementById(`opt1`).style.display = ``
            document.getElementById(`opt2`).style.display = ``
            document.getElementById(`opt3`).style.display = ``

            document.getElementById('modal-date').disabled = false;
            document.getElementById('modal-time').disabled = false;

            document.getElementById('modal-id').value = id
            document.getElementById('modal-name').placeholder = name
            document.getElementById('modal-doctor').placeholder = doctor
            document.getElementById('modal-date').value = date;
            document.getElementById('modal-date').min = nowDate;
            document.getElementById('modal-time').value = time;
            document.getElementById('modal-status').value = status

            if (status === `in-progress`) {
                document.getElementById('modal-date').disabled = true;
                document.getElementById('modal-time').disabled = true;

                document.getElementById(`opt1`).style.display = `none`
                document.getElementById(`opt2`).style.display = `none`

                document.getElementById(`opt2`).selected = true
            }
            if (status === `waiting`) {
                document.getElementById(`opt1`).selected = true
                document.getElementById(`opt3`).style.display = `none`
            }
        });
    });
}

//FUNCTION TO EDIT ARR QUEUE
function editFunction() {
    const id = document.getElementById('modal-id').value
    const date = document.getElementById('modal-date').value
    const time = document.getElementById('modal-time').value
    const status = document.getElementById('modal-status').value

    if (status === `waiting`) {
        queue[id - 1].time = time
        queue[id - 1].date = date
    } else if (status === `done`) {
        queue[id - 1].status = status
        doctors[queue[id - 1].doctorId - 1].active -= 1
    } else if (status === `in-progress`) {
        queue[id - 1].status = status
        doctors[queue[id - 1].doctorId - 1].active += 1
        doctors[queue[id - 1].doctorId - 1].wait -= 1
    }
    document.getElementById(`buttonDropDown`).innerText = `All Doctors`

    getQueue(queue)
    header()
    doctorDuty()
    listener()
}

getQueue(queue)
getPatientCount(queue)
getDoctorList(doctors)
listener()
header()
//END REYNALDO//

// DAANIYS //
// BOOK A CONSULTATION 
// 1. Function khusus untuk menambah data booking ke dalam queue
function addBookingToQueue(namaPasien, doctorId, tanggal, waktu, alasan) {

    //   Hitung idTerbesar untuk id baru
    let idTerbesar = 0;
    for (let i = 0; i < queue.length; i++) {
        if (queue[i].id > idTerbesar) idTerbesar = queue[i].id;
    }
    const idBaru = idTerbesar + 1;

    // Hitung posisi antrean baru untuk dokter yang sama
    let posisiBaru = 0;
    for (let i = 0; i < queue.length; i++) {
        if (queue[i].doctorId === doctorId) posisiBaru++;
    }
    posisiBaru = posisiBaru + 1;

    // Susun objek data sesuai struktur array queue kamu
    const bookingBaru = {
        id: idBaru,
        doctorId: doctorId,
        name: namaPasien,
        time: waktu,
        date: tanggal,
        reason: alasan,
        status: "waiting",
        position: posisiBaru
    };
    // Pindahkan data baru ke array queue global
    queue.push(bookingBaru);

    // Tambah wait di object doctor +1
    doctors[doctorId - 1].wait += 1

    // Render ulang UI Queue List agar pasien baru langsung muncul di tabel
    getQueue(queue);
    getPatientCount(queue);
    renderSchedule()
    header()
    doctorDuty()
    listener();
}

// 2. Event Listener Form Book a Consultation
const form = document.querySelector("#bookAConsultation form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = form.querySelectorAll(".form-control, .form-select");
    let semuaValid = true;

    // ... (loop validasi kamu yang sudah ada, biarkan seperti itu) ...

    if (semuaValid) {
        // urutan fields sesuai HTML: 0=Full Name, 1=Phone, 2=Select Doctor, 3=Date, 4=Time, 5=Reason
        const namaPasien = fields[0].value.trim();
        const doctorSelect = fields[2]; // elemen <select> Select Doctor
        const tanggal = fields[3].value;
        const waktu = fields[4].value;
        const alasan = fields[5].value.trim();

        // doctorId = urutan pilihan di dropdown
        const doctorId = doctorSelect.selectedIndex;

        // PANGGIL FUNCTION DI ATAS SINI
        addBookingToQueue(namaPasien, doctorId, tanggal, waktu, alasan);

        alert("Booking confirmed!");
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
});
// END DAANIYS
