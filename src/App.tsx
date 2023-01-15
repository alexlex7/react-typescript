import './App.css';
import DescribingProps from './examples/DescribingProps';
import GenericComponents from './examples/GenericComponents';
import TypesForFormAndEvents from './examples/TypesForFormAndEvents';
import TypesForUseState from './examples/TypesForUseState';

function App() {
  return (
    <div className="App">
      <DescribingProps headerText={'add types for props'} />
      <TypesForUseState />
      <TypesForFormAndEvents />
      <GenericComponents />
    </div>
  );
}

export default App;
