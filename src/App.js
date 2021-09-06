import './App.css';
//Cấu hình routing
import { Router, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate';
//Thư viện giúp chuyển hướng trang ở các file không phải là component
import { createBrowserHistory } from 'history'
// import BaiTapTongHop from './components/BaiTapTongHop/BaiTapTongHop';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>

      <Switch>

        <HomeTemplate path="/home" component={Home} />

        {/* <HomeTemplate exact path="/baitaptonghop" component={BaiTapTongHop} /> */}


        <HomeTemplate exact path="/" component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
