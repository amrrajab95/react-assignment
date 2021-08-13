import logo from './logo.svg';
import './App.css';
import Layout from "./components/hoc/Layout/Layout";
import FiltersBuilder from "./containers/FiltersBuilder/FiltersBuilder";
function App() {
  return (
    <Layout>
  <FiltersBuilder/>
    </Layout>
  );
}

export default App;
