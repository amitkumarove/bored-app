import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createStore} from "redux";

import Activity from './components/Activity';
import ActivityList from './components/ActivityList';

function App() {
  return (
    <div className="Wrapper">
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Activity />} />
        <Route path="/activitylist" element={<ActivityList />} />
        <Route path="*" element={<Activity />} />
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

