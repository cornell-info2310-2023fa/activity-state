import ParagraphEdit from './components/ParagraphEdit';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <ParagraphEdit editMode>
        Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators. Source: https://react.dev/learn/conditional-rendering
      </ParagraphEdit>
    </div>
  );
}
