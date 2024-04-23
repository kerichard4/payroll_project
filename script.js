let calculate=document.getElementById("calc");
form.addEventListener("submit", function (e) {

    // Prevent the webpage from refreshing
    e.preventDefault();

    // Check if inputs have values
    let basic = document.getElementById("basic").value;
    let benefits = document.getElementById("benefits").value;

    let gross_salary  =Number(basic) + Number(benefits)

    document.getElementById("gross_salary").innerHTML = gross_salary
    console.log("Gross Salary",gross_salary)

    // NHIF
function calc_NHIF( gross_salary ){
    // let nhif_contribution =0

    if (gross_salary<=5999){
        nhif_contribution=150
    }
    else if(gross_salary>6000 && gross_salary<=7999){
        nhif_contribution=300
    }
    else if(gross_salary>8000 && gross_salary<=11999){
        nhif_contribution=400
    }
    else if(gross_salary>12000 && gross_salary<=14999){
        nhif_contribution=500
    }
    else if(gross_salary>15000 && gross_salary<=19999){
        nhif_contribution=600
    }
    else if(gross_salary>20000 && gross_salary<=24999){
        nhif_contribution=750
    }
    else if(gross_salary>25000 && gross_salary<=29999){
        nhif_contribution=850
    }
    else if(gross_salary>30000 && gross_salary<=34999){
        nhif_contribution=900
    }
    else if(gross_salary>35000 && gross_salary<=39999){
        nhif_contribution=950
    }
    else if(gross_salary>40000 && gross_salary<=44999){
        nhif_contribution=1000
    }
    else if(gross_salary>45000 && gross_salary<=49999){
        nhif_contribution=1100
    }
    else if(gross_salary>50000 && gross_salary<=59999){
        nhif_contribution=1200
    }
    else if(gross_salary>60000 && gross_salary<=69999){
        nhif_contribution=1300
    }
    else if(gross_salary>70000 && gross_salary<=79999){
        nhif_contribution=1400
    }
    else if(gross_salary>80000 && gross_salary<=89999){
        nhif_contribution=1500
    }
    else if(gross_salary>90000 && gross_salary<=100000){
        nhif_contribution=1600
    }
    else{
        nhif_contribution=1700
    }
    return nhif_contribution
}
let NHIF=calc_NHIF(gross_salary)
console.log("NHIF",NHIF)

document.getElementById("nhif").innerHTML = NHIF

// TASK 16: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the program above, then use  the gross salary to find the NSSF. 
// To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MAXIMUM 
// OF 18,000 Gross Salary CAN BE USED IN NSSF.

function calc_nssf(gross_salary) {
    // let nssf_contribution = 0

    if (x = 0 && x <= 18000) {
        nssf_contribution = gross_salary * 0.06
    } else {
        nssf_contribution = 18000 * 0.06
    }
    return nssf_contribution
}
let NSSF = calc_nssf(gross_salary)
console.log("NSSF", NSSF)

document.getElementById("nssf").innerHTML = NSSF

// Task 17: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015

function calc_nhdf(gross_salary, rate = 0.015) {
    let nhdf_contribution = gross_salary * rate
    return nhdf_contribution
}

let NHDF = calc_nhdf(gross_salary)
console.log("NHDF", NHDF)

document.getElementById("nhdf").innerHTML = NHDF

// Task 18: Using Python or PHP or Java or Ruby or JavaScript
// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF) 

function calc_taxable_income(a, b, c) {
    let taxable_income = a - (b + c)
    return taxable_income
}
let taxable_income = calc_taxable_income(gross_salary, NSSF, NHDF)
console.log("Taxable income", taxable_income)

document.getElementById("taxable_income").innerHTML = taxable_income

// TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and find the person's PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK
// Write a normal program but use functions if you feel comfortable.

function calc_payee(taxable_income) {
    let payee = 0
    let relief = 2400

    if (taxable_income>= 0 && taxable_income <= 24000) {
        payee = 0
    }
    else if (taxable_income > 24000 && taxable_income <= 32333) {
        payee = (24000 * 0.01) + ((taxable_income-24000) * 0.25) - relief
    }
    else if (taxable_income > 32333 && taxable_income <= 500000) {
        payee = (24000 * 0.01) + (8333 * 0.25) + ((taxable_income-32333) * 0.3) - relief
    }
    else if (taxable_income > 500000 && taxable_income <= 800000) {
        payee = (24000 * 0.01) + (8333 * 0.25) + (467667 * 0.3) + ((taxable_income-500000)* 0.325) - relief
    }
    else  {
        payee = (24000 * 0.01) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((taxable_income - 800000) * 0.35) - relief
    }
    return payee
}

let PAYEE = calc_payee(taxable_income)
console.log("Payee", PAYEE)

document.getElementById("payee").innerHTML = PAYEE

// Task 20: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

function calc_netsalary(a,b,c,d,){
    let netsalary=a-(b+c+d)
    return netsalary
}
let Net_Pay=calc_netsalary(gross_salary,NSSF,NHDF,PAYEE)
console.log("Net Pay",Net_Pay)

document.getElementById("Net Pay").innerHTML = Net_Pay

}


);

