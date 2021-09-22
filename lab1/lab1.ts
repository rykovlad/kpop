enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ]
    return workers;
}

function logFirstAvailable_1(workers: {
    Name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category
}[]): void {
    console.log(`amount workers = ${workers.length}`)
    console.log()
    for (let worker of workers) {
        if (worker.available)
            console.log(`Full name: ${worker.Name + " " + worker.surname}`)

    }
}
console.log(`task1:`)
logFirstAvailable_1(getAllworkers())

//========================================================

function getWorkersNamesByCategory(category: Category, workers: {
    Name: string,
    surname: string,
    available: boolean,
    salary: number
    category: Category
}[]): string[] {
    let list: Array<string> = []
    for (let worker of workers) {
        if (worker.category === category)
            list.push(worker.surname)

    }
    return list
}

console.log(`\ntask2:`)
console.log(getWorkersNamesByCategory(Category.Business_analyst, getAllworkers()))

function logWorkersNames(strs: string[]): void {
    strs.forEach(el => console.log(el))
}

let arr: string [] = ['a', 'a1', 'a11']
logWorkersNames(arr);


//========================================================

function getWorkerByID(id: number, workers: {
    id: number,
    Name: string,
    surname: string,
    available: boolean,
    salary: number
    category: Category
}[]): string {

    let worker = workers.find(w => w.id === id);

    console.log(`${worker.Name} gets ${worker.salary}$`)
    return `${worker.Name} gets ${worker.salary}$`
}

console.log(`\ntask3:`)
getWorkerByID(2, getAllworkers())

//========================================================

function createCustomerID(name: string = "anon", id: number = -1): string {
    return `id=${id} name = ${name}`
}

console.log(`\ntask4:`)
const myID = createCustomerID("ann", 10)
console.log(myID)

let IdGenerator: typeof createCustomerID = (id, name) => { return `id=${id} name = ${name}` }


IdGenerator = createCustomerID
console.log(IdGenerator())
console.log(IdGenerator('ann2', 2))

//========================================================

