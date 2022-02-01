
import './App.css';
import { Home, SignUp, SignIn } from './pages/index'
import { BrowserRouter as Router, Routes, Route, Navigate, resolvePath } from 'react-router-dom'
import RoadMapInnerPage from './pages/roadmapinnerpage';
import CreateFeed from './containers/createfeed';
import FeedBackDetails from './pages/feedbackdetails';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/roadmap' element={<RoadMapInnerPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/CreateFeed' element={<CreateFeed />} />
          <Route path='/feedbackdetails' element={<FeedBackDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
