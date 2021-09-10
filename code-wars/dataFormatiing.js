
serialize([{
    patientId: "PI-31415",
    visitDate: "2018-06-09",
    paid: true,
    treatmentCodes: [41524, 9810, 33179]
  },
  {
    patientId: "RQ-15509",
    visitDate: "2018-05-31",
    paid: false,
    treatmentCodes: [2251]
  },
  {
    patientId: "XF-52663",
    visitDate: "2018-06-17",
    paid: true,
    treatmentCodes: []
  }])

function serialize(patients = []) {
    let result = [];
    patients.sort((a,b) => {
        return a.patientId.localeCompare(b.patientId);
    }).forEach((patient) =>{
        result.push(`>${patient.patientId}|${patient.visitDate}|${patient.paid ? 'Y' : 'N'}|${(patient.treatmentCodes || []).join(',')}`)
    })
    console.log(result.join('\n'));
}

deSerialize(`>PI-31415|2018-06-09|Y|41524,9810,33179
>RQ-15509|2018-05-31|N|2251
>XF-52663|2018-06-17|Y|`);

function deSerialize(patients = []) {
    console.log(patients.split('\n'));
    const result = [];
    patients.split('\n').forEach((patient) =>{
        const split = patient.split('|')
        result.push({
            patientId: split[0].substr(1),
            visitDate: split[1],
            paid: split[2] === 'Y' ,
            treatmentCodes: split[3] === '' ? [] : split[3].split(',').map(Number)
        })
    })
    console.log(result);
}