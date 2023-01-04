import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";
import WebsiteVisitors from "./components/WebsiteVisitors";

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Sidebar />
        <div className='container1'>
          <div className='container2'>
            <Reviews />
            <AverageRating />
            <SentimentAnalysis />
          </div>
          <WebsiteVisitors />
        </div>
      </div>

    </div>
  );
}

export default App;
