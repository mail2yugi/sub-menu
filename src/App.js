import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {MenuList} from './MenuList';
import DropdownMenu from './subMenu/SubMenu';


function App() {

  const hello = (menuItem) => {
    alert(menuItem.title);
  };

  useEffect(() => {
    if(document.querySelector("#multimenu")) {
      return(
        ReactDOM.render(<DropdownMenu config={MenuList} clickHandler={hello}/>, document.querySelector("#multimenu"))
      );
    }
  }, [])

  return (
    // ReactDOM.render(<DropdownMenu config={MenuList}/>, document.querySelector("#root"))

    <div>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <div id="multimenu"></div>

    </div>
  );
}

export default App;
