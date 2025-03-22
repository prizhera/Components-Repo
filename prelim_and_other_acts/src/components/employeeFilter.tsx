import { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeDisplay";

type Employee = {
  id: number;
  name: string;
  salary: number;
};

export default function EmployeeFilter() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/employees")
      .then(res => res.json())
      .then((data: Employee[]) => setEmployees(data))
      .catch(err => console.error("Error fetching employees:", err));
  }, []);

  const entryLevel = employees.filter(emp => emp.salary < 50000);
  const seniorLevel = employees.filter(emp => emp.salary >= 50000);

  return (
    <div>
      <EmployeeTable title="Entry Level Employees" employees={entryLevel} />
      <EmployeeTable title="Senior Employees" employees={seniorLevel} />
    </div>
  );
}
