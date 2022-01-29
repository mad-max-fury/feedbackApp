
import './App.css';
import { colors } from './colors';
import CreaateFeed from './containers/createfeed';
import Home from './pages/home';
import RoadMapInnerPage from './pages/roadmapinnerpage';
import SignIn from './pages/signin';
import SignUp from './pages/signup';



function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      <RoadMapInnerPage />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <CreaateFeed /> */}
    </div>
  );
}

export default App;
