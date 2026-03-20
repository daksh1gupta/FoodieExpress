import React, { useState, useEffect } from 'react';

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Backend se data fetch karna
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>QuickBite Food Delivery</h1>
      <h2>Menu</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <button onClick={() => alert('Order Placed!')}>Order Now</button>
    </div>
  );
}

export default App;