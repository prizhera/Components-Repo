import axios from "axios";
import { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState<any[]>([]);
  
  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/data");
    setData(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  const deleteData = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/data/${id}`);
    fetchData();
  };

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.firstName} {item.lastName}</td>
              <td><button onClick={() => deleteData(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;