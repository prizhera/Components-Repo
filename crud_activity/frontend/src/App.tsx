import CrudForm from "./components/form";
import DataTable from "./components/datatable";

const App = () => (
  <div>
    <h1>CRUD App</h1>
    <CrudForm refresh={() => window.location.reload()} />
    <DataTable />
  </div>
);
export default App;
