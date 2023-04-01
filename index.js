//api call
const url = "http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521";

const iguruApiCall = async () => {
  try {
    const response = await fetch(url);
    const studentData = await response.json();
    studentDetails(studentData);
  } catch (error) {
    console.log(error);
  }
};
iguruApiCall();


//received data destructuring

function studentDetails(data){
    const {ProgressList}=data.Response
    const {lstStudentInfo,ExamMasters,lstInternal}=ProgressList
    // console.log(lstInternal)

    // As the data is not available from the api request,
    // i am considering the EXPECTED OUTPUT data as api response data 
    //And dynamically adding the data to html  
}

const studentInfo=  {   schoolName:"MAHARAJA INTERNATIONAL SCHOOL",
                        schoolAddress:"Near Abhilasha colony, Dewa Road, Affilated to CBSE, Affiliation No:103131157, Ph:9926090005",
                        webSite:"Visit Us at:www.maharajinternationalschoolujjain.com",
                        schoolLogo:"../public/icons/schoollog.png",
                        years:"2022-2023",
                        AdmissionNumber:"670",
                        studentId:"181521",
                        studentName:"BHUVAN SANDEEP KORDE",
                        className:"class_I",
                        attendence:"131",
                        fatherName:"RAVI KUMAR KORDE",
                        motherName:"DEVI KORDE",
                        status:"PASS",
                        percent:"63.00%",
                        grade:"B2",
                        DOB:"06-jan-2016",
                        subjectMarks:[{sub:"TELUGU",term1Internal:15,term1:45,term1Total:60,term2Internal:15,term2:58,term2Total:73,T1T2:133,grade:"B2"},{sub:"MATHS",term1Internal:17,term1:42,term1Total:59,term2Internal:17,term2:53,term2Total:129,T1T2:129,grade:"B2"},{sub:"MUSIC",term1Internal:16,term1:33,term1Total:49,term2Internal:16,term2:68,term2Total:38,T1T2:117,grade:"C1"}],
                        total:{sub:"Total",term1Internal:48,term1:163,term1Total:211,term2Internal:48,term2:163,term2Total:211,T1T2:379,grade:"B2"}
                 }

const schoolName=document.getElementById("schoolName");
schoolName.textContent=studentInfo.schoolName;
                    
const schoolAddress=document.getElementById("schoolAddress");
schoolAddress.textContent=studentInfo.schoolAddress;
                    
const schoolWebsite=document.getElementById("website");
schoolWebsite.textContent=studentInfo.webSite;
                    
const year=document.getElementById("year");
year.textContent=studentInfo.years;
                    
const admissionNo=document.getElementById("admissionNo");
admissionNo.textContent=studentInfo.AdmissionNumber;
                    
const className=document.getElementById("className");
className.textContent=studentInfo.className;
                    
const studentId=document.getElementById("studentId");
studentId.textContent=studentInfo.studentId;
                    
const studentName=document.getElementById("studentName")
studentName.textContent=studentInfo.studentName

const fatherName=document.getElementById("fatherName")
fatherName.textContent=studentInfo.fatherName

const motherName=document.getElementById("motherName")
motherName.textContent=studentInfo.motherName

const DOB=document.getElementById("dob")
DOB.textContent=studentInfo.DOB

const attendence=document.getElementById("attendance")
attendence.textContent=studentInfo.attendence

const schoolLogo=document.getElementById("schoolLogo")
schoolLogo.src=studentInfo.schoolLogo

const passOrFail=document.getElementById("resultPF")
passOrFail.textContent=studentInfo.status
const percent=document.getElementById("percentage")
percent.textContent=studentInfo.percent
const gradeFinal=document.getElementById("Grade")
gradeFinal.textContent=studentInfo.grade

const createSubjectRow=(subjectData)=>{
    const{sub,term1Internal,term1,term1Total,term2Internal,term2,term2Total,T1T2,grade}=subjectData

    const subjectsContainer=document.getElementById("subjectsRow")

    const subjectrow=document.createElement("div")
    subjectrow.classList.add("row", "subject-marks-row", "table-border1","text-center", )
    subjectsContainer.appendChild(subjectrow)

    const subjectContainer=document.createElement("div")
    subjectContainer.classList.add("col-2", "p-0", "m-auto", "text-bold")
    subjectrow.appendChild(subjectContainer)

    const subjectName=document.createElement("p");
    subjectName.textContent=sub
    subjectContainer.appendChild(subjectName)

    const col4_1=document.createElement("div")
    col4_1.classList.add("col-4", "bl", "br", "p-0")
    subjectrow.appendChild(col4_1)

    const fluidContainer1=document.createElement("div")
    fluidContainer1.classList.add("container-fluid")
    col4_1.appendChild(fluidContainer1)

    const row1=document.createElement("div")
    row1.classList.add("row")
    fluidContainer1.appendChild(row1)

    const marks1=document.createElement("div")
    marks1.classList.add("col-5", "p-0", "br")
    row1.appendChild(marks1)

    const term1Internal1=document.createElement("p")
    term1Internal1.textContent=term1Internal
    marks1.appendChild(term1Internal1)

    const marks12=document.createElement("div")
    marks12.classList.add("col-3", "p-0", "br")
    row1.appendChild(marks12)

    const term1mains1=document.createElement("p")
    term1mains1.textContent=term1
    marks12.appendChild(term1mains1)

    const marksObtained1=document.createElement("div")
    marksObtained1.classList.add("col-4", "p-0")
    row1.appendChild(marksObtained1)

    const t1Total=document.createElement("p")
    t1Total.textContent=term1Total
    marksObtained1.appendChild(t1Total)

    const col4_2=document.createElement("div")
    col4_2.classList.add("col-4","br", "p-0")
    subjectrow.appendChild(col4_2)

    const fluidContainer2=document.createElement("div")
    fluidContainer2.classList.add("container-fluid")
    col4_2.appendChild(fluidContainer2)

    const row2=document.createElement("div")
    row2.classList.add("row")
    fluidContainer2.appendChild(row2)

    const marks2=document.createElement("div")
    marks2.classList.add("col-5", "p-0", "br")
    row2.appendChild(marks2)

    const term1Internal2=document.createElement("p")
    term1Internal2.textContent=term2Internal
    marks2.appendChild(term1Internal2)

    const marks22=document.createElement("div")
    marks22.classList.add("col-3", "p-0", "br")
    row2.appendChild(marks22)

    const term2mains1=document.createElement("p")
    term2mains1.textContent=term2
    marks22.appendChild(term2mains1)

    const marksObtained2=document.createElement("div")
    marksObtained2.classList.add("col-4", "p-0")
    row2.appendChild(marksObtained2)

    const t2Total=document.createElement("p")
    t2Total.textContent=term2Total
    marksObtained2.appendChild(t2Total)

    const finalResultContainer=document.createElement("div")
    finalResultContainer.classList.add("col-2","p-0")
    subjectrow.appendChild(finalResultContainer)

    const finalFluidContainer=document.createElement("div")
    finalFluidContainer.classList.add("container-fluid", "container-height-adjust")
    finalResultContainer.appendChild(finalFluidContainer)

    const finalRowContainer=document.createElement("div")
    finalRowContainer.classList.add("row")
    finalFluidContainer.appendChild(finalRowContainer)

    const subjectGrandTotalContainer=document.createElement("div")
    subjectGrandTotalContainer.classList.add("col-6", "p-0", "br")
    finalRowContainer.appendChild(subjectGrandTotalContainer)

    const subjectGrandTotal=document.createElement("p")
    subjectGrandTotal.textContent=T1T2
    subjectGrandTotalContainer.appendChild(subjectGrandTotal)

    const subjectGradeContainer=document.createElement("div")
    subjectGradeContainer.classList.add("col-6", "p-0", )
    finalRowContainer.appendChild(subjectGradeContainer)

    const subjectGrade=document.createElement("p")
    subjectGrade.textContent=grade
    subjectGradeContainer.appendChild(subjectGrade)
} 

studentInfo.subjectMarks.forEach(each=>createSubjectRow(each))
createSubjectRow(studentInfo.total)

