import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import './App.css';


import Home from './home';
import Login from './login';
import Register from './register';
import AboutUs from './aboutus';
import Navbar from './navbar';
import Company from './company';
import Stock from './stock';
import Adminstock from './adminStock';
import AddStock from './addstock';
import UpdateStock from './updatestock';
import AddCompany from './addcompany';
import UpdateCompany from './updatecompany';
import User from './user';
import Investor from './investor';
import AddInvestor from './addinvestor';
import UpdateInvestor from './updateinvestor';
import Manager from './manager';
import Buy from './buy';



function App() {
  return (
    <div className="App">
    <Router>

    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route path="/navbar" component={Navbar} /> 
      <Route path="/adminStock" component={Adminstock} />
      <Route path="/Manager" component={Manager}/>
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/company" component={Company} />
      <Route path="/addcompany" component={AddCompany}/>
      <Route path="/updatecompany/:cid" component={UpdateCompany} />
      <Route path="/stock" component={Stock} />
      <Route path="/addstock" component={AddStock} />
      <Route path="/updatestock/:sid" component={UpdateStock}/>
      <Route path="/investor" component={Investor} />
      <Route path="/addinvestor" component={AddInvestor}/>
      <Route path="/updateinvestor/:inid" component={UpdateInvestor}/>
      <Route path="/user" component={User}/>
      <Route path="/buy" component={Buy} />

      
      </Switch>

   </Router>



    </div>
  );
}

export default App;
