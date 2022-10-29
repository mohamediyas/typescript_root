class Department {
    constructor(name){}
    addHolidays(holidays) {
        if (Array.isArray(holidays)) for (const holiday of holidays)this.holidays.push(holiday);
    }
}
class ItDepartment extends Department {
    holidays = [];
    constructor(){
        super("It department");
    }
    getRating() {
        throw new Error("Method not implemented.");
    }
}
class AdminDepartment extends Department {
    holidays = [];
    constructor(){
        super("Adin department");
    }
    getRating() {
        throw new Error("Method not implemented.");
    }
}
const itDepartment = new ItDepartment();

//# sourceMappingURL=index.377278e2.js.map
