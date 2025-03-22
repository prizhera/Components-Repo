type Employee = {
    id: number;
    name: string;
    salary: number;
  };
  
  type EmployeeTableProps = {
    title: string;
    employees: Employee[];
  };
  
  export default function EmployeeTable({ title, employees }: EmployeeTableProps) {
    return (
      <div>
        <h2>{title}</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  