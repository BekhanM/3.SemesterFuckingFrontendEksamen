import { useState } from 'react'

// ParentComponent: Passing props to ChildComponent
function ParentComponent() {
  return <ChildComponent name="Bekhan" age={23} />;
}

// ChildComponent: Receiving props from ParentComponent
function ChildComponent(props) {
  return (
    <div>
      <h2>Parent & Child Example</h2>
      <h3>Hej! Jeg hedder {props.name}</h3>
      <p>Jeg er {props.age} år.</p>
    </div>
  );
}

// DefaultProps Example: Setting default values for props
function Greeting({ name, age }) {
  return (
    <div>
      <h2>DefaultProps Example</h2>
      <h3>Hello, {name}!</h3>
      <p>You are {age} years old</p>
    </div>
  );
}

Greeting.defaultProps = {
  name: 'Guest',
  age: 30,
};

// Passing Functions as Props
function ParentWithButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <ChildWithButton onClick={handleClick} />;
}

function ChildWithButton({ onClick }) {
  return (
    <div>
      <h2>Passing Functions as Props</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

// Passing Arrays as Props
function FruitList({ fruits }) {
  return (
    <div>
      <h2>Passing Arrays as Props</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Passing Objects as Props
function Profile({ user }) {
  return (
    <div>
      <h2>Passing Objects as Props</h2>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

// App Component: Using all the examples
function App() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  const user = { name: 'Alice', email: 'alice@example.com' };

  return (
    <div>
      {/* Parent & Child Example */}
      <ParentComponent />

      {/* DefaultProps Example */}
      <Greeting name="logged in user perhaps" />

      {/* Passing Functions as Props */}
      <ParentWithButton />

      {/* Passing Arrays as Props */}
      <FruitList fruits={fruits} />

      {/* Passing Objects as Props */}
      <Profile user={user} />

    </div>
  );
}

export default App;
