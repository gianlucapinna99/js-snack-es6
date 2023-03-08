const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
  ];
  
  //1.Stampa il nome degli studenti in maiuscolo
  let uppercaseNames = students.map(student => {
    return {
      id: student.id,
      name: student.name.toUpperCase(),
      grades: student.grades
    };
  });
  console.log(uppercaseNames);
  
  //2.Ragazzi con più di 70
  let highGrades = students.filter(student => student.grades > 70);
  console.log(highGrades);
  
  //3.Ragazzi con più di 70 e ID di 120
  let highGradesAndId = students.filter(student => student.grades > 70 && student.id > 120);
  console.log(highGradesAndId);
  