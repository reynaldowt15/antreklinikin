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