import './App.css';
import {Card} from './components/card'

function App() {
  return (
    <div className="App">
        <Card mode={"card--dark"} img={"thailand.jpeg"} name={"Thailand"} placeType={"South East Asia"} cardStyle={"card--left"} linkPlace={"https://en.wikipedia.org/wiki/Thailand"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></Card>
        <Card mode={"card--dark"} img={"hawaii.jpeg"} name={"Hawaii"} placeType={"United States"} cardStyle={"card--right"} linkPlace={"https://en.wikipedia.org/wiki/Hawaii"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></Card>
        <Card mode={"card--light"} img={"paris.jpeg"} name={"Paris"} placeType={"France"} cardStyle={"card--left"} linkPlace={"https://en.wikipedia.org/wiki/Paris"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></Card>
        <Card mode={"card--light"} img={"venice.jpeg"} name={"Venice"} placeType={"Italy"} cardStyle={"card--right"} linkPlace={"https://en.wikipedia.org/wiki/Venice"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></Card>
    </div>
  );
}

export default App;
