import { useState } from 'react';

function App() {
  // State to store form input and messages
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  // Handle button click
  const handleClick = () => {
    setMessage('Button clicked!');
  };

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    setMessage(`Form submitted with input: "${inputValue}"`);
  };

  return (
    <>
      <div>
        <div className="card">
          {/* Button with onClick */}
          <button onClick={handleClick}>
            Click Me
          </button>
          <p>{message}</p>

          {/* Form with onChange and onSubmit */}
          <form onSubmit={handleSubmit}>
            <label>
              Input:
              <input
                type="text"
                value={inputValue}
                onChange={handleChange} // Track changes to input
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
