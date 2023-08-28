class Member {
    constructor(name, lastName, skill, picture) {
      this.name = name;
      this.lastName = lastName;
      this.skill = skill;
      this.picture = picture;
    }
  }

let members = [
  new Member('Joaquin', "Severini", "Apasionado por la tecnología, video juegos, música y películas.", "JoaquinSeverini"),
  new Member('Anabella', "Margagliotti", "Disfruto las actividades al aire libre y hacer deporte. Soy estudiante de Recursos Humanos.", "AnabellaMargagliotti"),
  new Member('Lucas', "Ibanez", " Me encanta la actividad fisica y los videojuegos. Siempre busco aprender algo nuevo. ", "LucasIbanez"),
  new Member('Ivan', "Leguizamon", " 38 años, estudie ingeniería en computación en la facultad de ciencias exactas, la programacion es algo que me apasiona.", "IvanLeguizamon")
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
            <span>${member.skill}</span>
        </div>
    </div>
    `;
    membersRow.appendChild(card);
});
