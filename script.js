const DOCTORS = [
  {
    id: 1,
    name: "Dr. Ananya Krishnamurthy",
    specialty: "Internal Medicine",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&auto=format",
    room: "Room 101",
  },
  {
    id: 2,
    name: "Dr. Marcus Osei",
    specialty: "Cardiology",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&auto=format",
    room: "Room 204",
  },
  {
    id: 3,
    name: "Dr. Lena Hoffmann",
    specialty: "Pediatrics",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&auto=format",
    room: "Room 312",
  },
  {
    id: 4,
    name: "Dr. Rafael Sousa",
    specialty: "Orthopedics",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&auto=format",
    room: "Room 115",
  },
  {
    id: 5,
    name: "Dr. Yuki Nakamura",
    specialty: "Neurology",
    photo:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=80&h=80&fit=crop&auto=format",
    room: "Room 408",
  },
  {
    id: 6,
    name: "Dr. Amara Diallo",
    specialty: "Dermatology",
    photo:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=80&h=80&fit=crop&auto=format",
    room: "Room 220",
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

let scheduleSearch = "";
let scheduleDoctorFilter = "all";

const scheduleContainer = document.getElementById("scheduleContainer");
const scheduleCount = document.getElementById("scheduleCount");
const scheduleSearchInput = document.getElementById("scheduleSearch");
const scheduleDoctorFilterInput = document.getElementById(
  "scheduleDoctorFilter",
);

function getDoctor(doctorId) {
  return DOCTORS.find(function (doctor) {
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
        result.push({
          ...schedule,
          date: dateString,
          booked: 0,
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

  for (let i = 0; i < DOCTORS.length; i++) {
    html += `
      <option value="${DOCTORS[i].id}">
        ${DOCTORS[i].name}
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
