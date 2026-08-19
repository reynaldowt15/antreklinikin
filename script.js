const doctors = [
    {
        id: 1,
        name: "dr. Salwa Az-Zahra, Sp.JP",
        specialty: "Spesialis Jantung dan Pembuluh Darah",
        photo: "doctorfemale.jpg",
        room: "Room A",
        active: 1,
        wait: 2
    },

    {
        id: 2,
        name: "dr. Daaniys Nadya Shafwa, Sp.A",
        specialty: "Spesialis Anak",
        photo: "doctorfemale.jpg",
        room: "Room B",
        active: 1,
        wait: 1
    },

    {
        id: 3,
        name: "dr. Shania Risky Agustin, Sp.OG",
        specialty: "Spesialis Obsteri & Ginekologi",
        photo: "doctorfemale.jpg",
        room: "Room C",
        active: 1,
        wait: 1
    },

    {
        id: 4,
        name: "dr. Reynaldo William Tendean, Sp.Rad",
        specialty: "Spesialis Radiolog",
        photo: "doctormale.jpg",
        room: "Room D",
        active: 1,
        wait: 2
    },

    {
        id: 5,
        name: "dr. Olga Hadi Purna Wahab Basalamah",
        specialty: "Umum",
        photo: "doctormale.jpg",
        room: "Room E",
        active: 1,
        wait: 1
    },

    {
        id: 6,
        name: "dr. A. Muh. Ilhamsyah",
        specialty: "Umum",
        photo: "doctormale.jpg",
        room: "Room F",
        active: 1,
        wait: 4
    }
]


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

                    ${
                        doctors[i].active > 0
                        ? `${doctors[i].active} active`
                        : ""
                    }

                    ${
                        doctors[i].wait > 0
                        ? `${doctors[i].wait} wait`
                        : ""
                    }

                </li>

            </ul>

        </div>

    `
}