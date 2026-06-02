const students = [
  { name: "Abdulrazaq Bolatito Faizah", matric: "256475" },
  { name: "Abdulyekeen Kehinde Amidat", matric: "256476" },
  { name: "Adbuljeleel Ololade Mubarak", matric: "256474" },
  { name: "Adekanmi Mayowa Favour", matric: "256477" },
  { name: "Adelowo Temiloluwa Aderonke", matric: "256478" },
  { name: "Adeniran Oluwatemilehin Rachael", matric: "259232" },
  { name: "Adeshile Taiwo Adeleke", matric: "256479" },
  { name: "Adeyemo Oluwabukunmi", matric: "256482" },
  { name: "Adurhi Mary Fowokemi", matric: "256483" },
  { name: "Afolayan Joshua Fauthful", matric: "256484" },
  { name: "Akinlabi Sodiq Oluwadamilare", matric: "256488" },
  { name: "Akinlade Ayomide Esther", matric: "256489" },
  { name: "Akinluyi Precious Oluwafunke", matric: "256490" },
  { name: "Akinsola Peace Opeyemi", matric: "256491" },
  { name: "Alabi Jude Aranlaoluwa", matric: "256493" },
  { name: "Anazodo Chimdindu Chimamanda", matric: "256494" },
  { name: "Aondona Memshima Deborah", matric: "256496" },
  { name: "Apera Veronica", matric: "256497" },
  { name: "Atooromola Yesirah Adebukola", matric: "256499" },
  { name: "Awoleye Ayanfeoluwa Mary", matric: "256500" },
  { name: "Ayiola Esther Isoluwa", matric: "256501" },
  { name: "Clement Blessing Chinonso", matric: "256503" },
  { name: "Dairo Yushroh Adebisi", matric: "256504" },
  { name: "Diepriye Benedicta Fidelis", matric: "257508" },
  { name: "Esan Ayomikun Daniel", matric: "256505" },
  { name: "Ezegbulam Mitchel Chiemela", matric: "256506" },
  { name: "Fatokun Jesutomiloluwa Lolade", matric: "256507" },
  { name: "Gbadamosi Hammot Eniola", matric: "256509" },
  { name: "Ilebiyi Emmanuel Ayobami", matric: "256511" },
  { name: "Iyanda Olabamiji Feyikunmi", matric: "256513" },
  { name: "Iyiola Barakat Olalere", matric: "256514" },
  { name: "Jemiluyi Toluwanimi Prosper", matric: "256516" },
  { name: "Jenelyn Assim Ita", matric: "256512" },
  { name: "Joseph Toluwanimi Deborah", matric: "256517" },
  { name: "Kabirat Isiwat Iyabo", matric: "256518" },
  { name: "Lawal Fathia Wonuola", matric: "256520" },
  { name: "Makanjola Oreoluwa Regina", matric: "249341" },
  { name: "Micheal Abosede", matric: "256521" },
  { name: "Nwazor Chizaram Peace", matric: "256522" },
  { name: "Obisesan Fatimah", matric: "256524" },
  { name: "Ogbonna Grace", matric: "256525" },
  { name: "Oguntona Rianat Oluwaseyi", matric: "256526" },
  { name: "Ojo Grace Ayobami", matric: "256527" },
  { name: "Ojo Winnie Onize", matric: "256528" },
  { name: "Okeowo Omomayowa", matric: "256529" },
  { name: "Okorie Praise Sopuruchukwu", matric: "256530" },
  { name: "Oladimeji Faridah Adeola", matric: "256532" },
  { name: "Olaitan Samuel Oluwaseun", matric: "256533" },
  { name: "Olalekan Ifeoluwa", matric: "246534" },
  { name: "Olanlokun Victoria Blesing", matric: "256536" },
  { name: "Olawale Faridat Odunayo", matric: "256537" },
  { name: "Omogbolahan Oluwajuwon", matric: "256539" },
  { name: "Omoniyi Enoch Olamilekan", matric: "256540" },
  { name: "Onyeagu Judith Chisom", matric: "256541" },
  { name: "Oyewo David Boluwatife", matric: "256542" },
  { name: "Oyewunmi Esther Oreoluwa", matric: "256543" },
  { name: "Rabiu Oluwadamilare Racheal", matric: "256544" },
  { name: "Raji Hammedah", matric: "256545" },
  { name: "Raphael Paul Akinkunmi", matric: "256546" },
  { name: "Shodipe Akorede Samuel", matric: "256489" },
  { name: "Sowunmi Balikis Omowunmi", matric: "256548" },
  { name: "Tijani Mariam", matric: "256459" },
  { name: "Tijuiku Nabilat Olatundun", matric: "256550" },
  { name: "Wilson Princess Chimuanya", matric: "256551" },
  { name: "Yusuf Habeebah Ayomide", matric: "256552" },
].map((student) => ({
  ...student,
  files: [
    {
      label: "Word Practical 1",
      path: `Practical 1/${student.name}-${student.matric} - Word Practical 1..docx`,
      downloadName: `${student.name} - ${student.matric} - Word Practical 1.docx`,
    },
    {
      label: "Word Practical 2",
      path: `Practical 2/${student.name}-${student.matric} - Word Practical 2.docx`,
      downloadName: `${student.name} - ${student.matric} - Word Practical 2.docx`,
    },
  ],
}));

const form = document.querySelector("#lookup-form");
const matricInput = document.querySelector("#matric");
const result = document.querySelector("#result");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}

function normalizeMatric(value) {
  return value.replace(/\D/g, "");
}

function renderResult(matches, matric) {
  if (!matches.length) {
    result.innerHTML = `
      <p class="warning">
        No file found for matric number ${escapeHtml(matric)}. Please confirm the number and try again.
      </p>
    `;
    return;
  }

  const duplicateNote =
    matches.length > 1
      ? `<p class="warning">This matric number appears more than once. Please pick the correct name.</p>`
      : "";

  result.innerHTML = `
    ${duplicateNote}
    ${matches
      .map((student) => {
        return `
          <article class="student-card">
            <div>
              <p class="student-name">${escapeHtml(student.name)}</p>
              <p class="student-meta">Matric number: ${escapeHtml(student.matric)}</p>
            </div>
            <div class="download-group">
              ${student.files
                .map((file) => {
                  const safePath = file.path.split("/").map(encodeURIComponent).join("/");
                  return `
                    <a class="download-link" href="files/${safePath}" download="${escapeHtml(file.downloadName)}">
                      ${escapeHtml(file.label)}
                    </a>
                  `;
                })
                .join("")}
            </div>
          </article>
        `;
      })
      .join("")}
  `;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const matric = normalizeMatric(matricInput.value);
  const matches = students.filter((student) => student.matric === matric);
  renderResult(matches, matric);
});
