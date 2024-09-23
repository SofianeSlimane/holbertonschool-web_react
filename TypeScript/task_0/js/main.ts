interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}


const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "United States"
}
const student2: Student = {
    firstName: "Jane",
    lastName: "Foster",
    age: 50,
    location: "United Kingdom"
}
const studentsLists: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
let header: HTMLTableSectionElement = table.createTHead();
let headerRow: HTMLTableRowElement = header.insertRow();
for (const key in student1){
    if (key !== "age"){
        const th: HTMLTableCellElement = document.createElement("th");
        th.innerText = key;
        headerRow.appendChild(th);
    }
}
table.appendChild(header);

for (const student of studentsLists){
    const row = table.insertRow();
    const studArr: any[] = Object.values(student);
    delete studArr[2];
    for (const val of studArr){
        if(val){
        const cell: HTMLTableCellElement = row.insertCell();
        cell.innerText = val;
        }
    }
    table.appendChild(row);

    
       
}

document.body.appendChild(table)
