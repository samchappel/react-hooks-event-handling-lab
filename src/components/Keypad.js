import React, { useState } from 'react';

function Keypad() {
const [inputValue, setInputValue] = useState('');

const handleChange = (event) => {
setInputValue(event.target.value);
console.log('Entering password...');
};

return (
<div>
<input type="password" value={inputValue} onChange={handleChange} />
</div>
);
}

export default Keypad;