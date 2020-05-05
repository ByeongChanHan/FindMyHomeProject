import React from 'react';
import './stylesheets/mainDesign.css';
import Entirepage from './components/Entirepage'
import Login from './components/login';
import CreateAccount from './components/CreateAccount'
import Noticeboard from './components/Noticeboard'
import Askquestion from './components/askquestion'
import Agentregister from './components/agentregister'
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';

class App extends React.Component {
    render(){
      return(
        <Router>
        <Switch>
        <Route exact path = "/" component={Entirepage}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/create" component={CreateAccount}/>
        <Route exact path = "/ask" component={Askquestion}/>
        <Route exact path = "/board" component={Noticeboard}/>
        <Route exact path = "/agentregister" component={Agentregister}/>
        </Switch>
        </Router>
      )
    }
}
// route 모듈은 지정한 경로로 이동하면 해당 컴포넌트를 보여주는 역할을 함
export default App;