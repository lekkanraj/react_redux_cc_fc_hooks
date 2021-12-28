import logo from './logo.svg';
import './App.css';

import UserComponent from './Components/UserComponent';
import UserDetailComponent from './Components/UserDetailComponent';

function App() {
  return (
    <div className="App"  style={{width:100+'%'}}>
      <div  style={{width:50+'%',float:'left'}} ><UserComponent/></div>
      <div  style={{width:50+'%',float:'right'}} ><UserDetailComponent /></div>
    </div>
  );
}

export default App;
