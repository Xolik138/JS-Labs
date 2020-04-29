import React from 'react';
import checkan from './checkan.js';

function App() {
  return (
    <form >
      <p><b>Название животного:</b><br />
      <input name='namean' type='text'/></p>

      <p><b>Номер:</b><br />
      <input name='valan' type='text'/></p>

      <p><b>Высота изоб.:</b><br />
      <input name='han' type='text'/></p>

      <p><b>Ширина изоб.:</b><br />
      <input name='wan' type='text'/></p>

      <p><b>Цвет изоб.:</b><br />
      <input name='can' type='text'/></p>

      <button classname = 'knopka' onClick={checkan}>Отпавить</button>
    </form>
  );
}

export default App;
