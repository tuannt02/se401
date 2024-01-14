interface Component {
  calculateCost(): number;
}

class Employee implements Component {
  constructor(
    public name: string,
    public salaryCoefficient: number,
    public workDays: number
  ) {}

  calculateCost(): number {
    return this.salaryCoefficient * this.workDays * 1.05;
  }
}

class Department implements Component {
  private members: Component[] = [];

  constructor(public name: string) {}

  addMember(member: Component): void {
    this.members.push(member);
  }

  calculateCost(): number {
    let cost = 0;
    for (const member of this.members) {
      cost += member.calculateCost();
    }
    return cost * 1.1;
  }
}

// Tạo các đối tượng nhân viên
const ceo = new Employee("CEO", 2.5, 20);
const cto = new Employee("CTO", 2.0, 18);
const cfo = new Employee("CFO", 2.0, 20);

// Tạo các đối tượng phòng ban
const hrDepartment = new Department("Human Resources");
const financeDepartment = new Department("Finance");
const productionDepartment = new Department("Production");

// Thêm nhân viên vào các phòng ban
hrDepartment.addMember(ceo);
hrDepartment.addMember(new Employee("Director HR", 1.8, 20));
financeDepartment.addMember(cfo);
productionDepartment.addMember(cto);

// Tổng chi phí của công ty
const totalCost =
  hrDepartment.calculateCost() +
  financeDepartment.calculateCost() +
  productionDepartment.calculateCost();
console.log("Tổng chi phí của công ty trong mỗi tháng: ", totalCost);

// Tìm phòng ban có nhiều nhân viên nhất
const departments = [hrDepartment, financeDepartment, productionDepartment];
const maxEmployeesDepartment = departments.reduce((maxDept, currentDept) =>
  currentDept.calculateCost() > maxDept.calculateCost() ? currentDept : maxDept
);
console.log("Phòng ban có nhiều nhân viên nhất:", maxEmployeesDepartment.name);
