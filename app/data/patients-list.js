const patients = {
  // Default patient, if none specified
  1234567890: {
    firstName: "William",
    lastName: "Shakespeare",
    address: "1 Town Street",
    county: "Warwickshire",
    postcode: "AB1 2CD",
    gender: "Male",
    dob: "30-Jan-2018",
  },
  // Default alternative patient
  "0987654321": {
    firstName: "Amelia",
    lastName: "Miller",
    address: "1 Town Street",
    county: "West Yorkshire",
    postcode: "LS8 2CD",
    gender: "Female",
    dob: "16-Dec-2003",
  },
  9550972968: {
    firstName: "Elisha",
    lastName: "Sapsed",
    address: "55 Troy Place",
    county: "Sutton",
    postcode: "X563TG",
    gender: "Female",
    dob: "06-Sep-1968",
  },
  5974163354: {
    firstName: "Jordanna",
    lastName: "Collop",
    address: "285 Chinook Trail",
    county: "Bradford",
    postcode: "E83JZ",
    gender: "Female",
    dob: "27-Feb-2006",
  },
  4126104984: {
    firstName: "Justina",
    lastName: "Collop",
    address: "285 Chinook Trail",
    county: "Bradford",
    postcode: "E83JZ",
    gender: "Female",
    dob: "27-Feb-2006",
  },
  9015678065: {
    firstName: "Ranna",
    lastName: "Enochsson",
    address: "6 Steensland Circle",
    county: "Burnside",
    postcode: "EB717QM",
    gender: "Female",
    dob: "10-Mar-1967",
  },
  9397085291: {
    firstName: "Quincy",
    lastName: "Cramphorn",
    address: "519 Raven Way",
    county: "West End",
    postcode: "DN36 7TU",
    gender: "Male",
    dob: "22-Sep-1963",
  },
  9762318315: {
    firstName: "Angelle",
    lastName: "Peeke-Vout",
    address: "4473 Fair Oaks Alley",
    county: "Preston",
    postcode: "F348ZS",
    gender: "Female",
    dob: "16-Dec-1998",
  },
  9453238023: {
    firstName: "Giacobo",
    lastName: "Erni",
    address: "05584 Luster Point",
    county: "Sheffield",
    postcode: "S52NF",
    gender: "Male",
    dob: "01-Sep-2004",
  },
  9397084291: {
    firstName: "Raquel",
    lastName: "Twinbrow",
    address: "9451 Burning Wood Lane",
    county: "Whitwell",
    postcode: "N94AL",
    gender: "Female",
    dob: "04-Apr-2008",
  },
  "0768832756": {
    firstName: "Georgia",
    lastName: "Lamba",
    address: "4560 Portage Trail",
    county: "Linton",
    postcode: "PM151DJ",
    gender: "Female",
    dob: "20-Apr-1994",
  },
  5655050595: {
    firstName: "Jacynth",
    lastName: "Petett",
    address: "71016 Kings Plaza",
    county: "Belfast",
    postcode: "M061CP",
    gender: "Female",
    dob: "07-Oct-1956",
  },
  7472972134: {
    firstName: "Gamaliel",
    lastName: "Potkins",
    address: "14 Utah Drive",
    county: "Whitchurch",
    postcode: "UE60LF",
    gender: "Male",
    dob: "02-Oct-1944",
  },
  2063825688: {
    firstName: "Lizzie",
    lastName: "Arnecke",
    address: "1 Bayside Circle",
    county: "Linton",
    postcode: "AY05XG",
    gender: "Female",
    dob: "02-Jun-2013",
  },
  1316950344: {
    firstName: "Dorella",
    lastName: "Smith",
    address: "80 Holmberg Lane",
    county: "Upton",
    postcode: "BS130LQ",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  8344690382: {
    firstName: "Hali",
    lastName: "Smith",
    address: "2169 Ludington Terrace",
    county: "Upton",
    postcode: "BR54HN",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  5275198353: {
    firstName: "Neddy",
    lastName: "Smith",
    address: "38301 Vidon Trail",
    county: "Langley",
    postcode: "FY81UB",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  2977560009: {
    firstName: "Leland",
    lastName: "Smith",
    address: "31599 Dunning Street",
    county: "London",
    postcode: "MK183EW",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  "0344362957": {
    firstName: "Tome",
    lastName: "Smith",
    address: "693 Spenser Pass",
    county: "Hatton",
    postcode: "RG193PQ",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  8825402473: {
    firstName: "Avie",
    lastName: "Smith",
    address: "9768 Gerald Terrace",
    county: "London",
    postcode: "BD226DF",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  "0135644305": {
    firstName: "Osbert",
    lastName: "Smith",
    address: "55 Stang Trail",
    county: "Normanton",
    postcode: "SK87DJ",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  5217192623: {
    firstName: "Timoteo",
    lastName: "Smith",
    address: "13416 Bashford Drive",
    county: "Marston",
    postcode: "BA25AB",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  6705809256: {
    firstName: "Katharine",
    lastName: "Smith",
    address: "9621 Kedzie Center",
    county: "London",
    postcode: "PA308HU",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  7479065205: {
    firstName: "Carroll",
    lastName: "Smith",
    address: "94894 Hagan Avenue",
    county: "London",
    postcode: "OX110PG",
    gender: "Female",
    dob: "26-Apr-1998",
  },
  5298187064: {
    firstName: "Katie",
    lastName: "Smith",
    address: "25 Guild Street",
    county: "London",
    postcode: "EC1V7QZ",
    gender: "Female",
    dob: "21-Mar-1953",
  },
  9887780707: {
    firstName: "Louise",
    lastName: "Smith",
    address: "65 Main Road",
    county: "London",
    postcode: "RH54JJ",
    gender: "Female",
    dob: "02-Aug-1989",
  },
  2441861271: {
    firstName: "Lauren",
    lastName: "Smith",
    address: "57 Crown Street",
    county: "London",
    postcode: "W1D4LD",
    gender: "Female",
    dob: "20-Oct-1987",
  },
  1991798466: {
    firstName: "Joe",
    lastName: "Pearson",
    address: "98 Manor Close",
    county: "Bristol",
    postcode: "BS1 3ZR",
    gender: "Male",
    dob: "20-Oct-1987",
  },
};

function parseDate(formattedDate) {
  const months = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };
  const parts = formattedDate.split("-");
  return new Date(parts[2], months[parts[1].toLowerCase()], parts[0]);
}

function formatPatientList(patients) {
  // Figure out their age based on their date of birth.
  for (const nhsNumber in patients) {
    const patient = patients[nhsNumber];
    const parsedDob = parseDate(patient.dob);
    const currentDate = new Date();
    const diff = currentDate - parsedDob;
    const age = Math.floor(diff / 31536000000);

    // Add the age to the data set.
    patient.age = age;

    // Add the nhsNumber key as a property for convinence.
    patient.nhsNumber = nhsNumber;
  }
  return patients;
}

module.exports = formatPatientList(patients);
