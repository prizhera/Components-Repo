import { useState } from "react";
import axios from "axios";

const CrudForm = ({ refresh }: { refresh: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    groupName: "",
    role: "",
    expectedSalary: "",
    expectedDateOfDefense: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/data", formData);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map(key => (
        <input key={key} name={key} placeholder={key} onChange={handleChange} required />
      ))}
      <button type="submit">Add Data</button>
    </form>
  );
};
export default CrudForm;
