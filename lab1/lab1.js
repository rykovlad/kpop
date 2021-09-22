var Category;
(function (Category) {
    Category[Category["Business_analyst"] = 0] = "Business_analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_master"] = 4] = "Scrum_master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA }
    ];
    return workers;
}
function logFirstAvailable_1(workers) {
    console.log("amount workers = " + workers.length);
    console.log();
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available)
            console.log("Full name: " + (worker.Name + " " + worker.surname));
    }
}
console.log("task1:");
logFirstAvailable_1(getAllworkers());
//========================================================
function getWorkersNamesByCategory(category, workers) {
    var list = [];
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.category === category)
            list.push(worker.surname);
    }
    return list;
}
console.log("\ntask2:");
console.log(getWorkersNamesByCategory(Category.Business_analyst, getAllworkers()));
function logWorkersNames(strs) {
    strs.forEach(function (el) { return console.log(el); });
}
var arr = ['a', 'a1', 'a11'];
logWorkersNames(arr);
//========================================================
function getWorkerByID(id, workers) {
    var worker = workers.find(function (w) { return w.id === id; });
    console.log(worker.Name + " gets " + worker.salary + "$");
    return worker.Name + " gets " + worker.salary + "$";
}
console.log("\ntask3:");
getWorkerByID(2, getAllworkers());
//========================================================
function createCustomerID(name, id) {
    if (name === void 0) { name = "anon"; }
    if (id === void 0) { id = -1; }
    return "id=" + id + " name = " + name;
}
console.log("\ntask4:");
var myID = createCustomerID("ann", 10);
console.log(myID);
var IdGenerator = function (id, name) { return "id=" + id + " name = " + name; };
IdGenerator = createCustomerID;
console.log(IdGenerator());
console.log(IdGenerator('ann2', 2));
//========================================================
