class Member {
    constructor(name, lastName, skill, picture) {
      this.name = name;
      this.lastName = lastName;
      this.skill = skill;
      this.picture = picture;
    }
  }

let members = [
  new Member('Mario', "Santos", "Logistica y planificación", "MarioSantos"),
  new Member('Pablo', "Lamponne", "Técnica y movilidad", "PabloLamponne"),
  new Member('Emilio', "Ravenna", "Caracterización", "EmilioRavenna"),
  new Member('Gabriel', "Medina", "Investigación", "GabrielMedina")
];

const membersRow = document.getElementById('aboutUsRow');

members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-sm-12 mb-4';
    card.innerHTML = `
    <div class="card d-grid align-items-center">
        <img src="../assets/aboutUs/${member.picture}.jpg" class="card-img-top" alt="${member.picture}">
        <div class="card-body">
            <h5 class="card-title">${member.name} ${member.lastName}</h5>
            <span class="badge bg-dark text-light">${member.skill}</span>
        </div>
    </div>
    `;
    membersRow.appendChild(card);
});
