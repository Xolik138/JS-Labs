import React, { useState } from 'react';

function App() {
  let masanim = ["giena", "gazel", "gekkon"];
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [color, setColor] = useState('')
  const [image, setImage] = useState('')
  const [img, setImg] = useState('')

  /// Функция получения всех параметров
  function startSearch(event) {
    for (let i = 0; i < masanim.length; i++) {
      if (name === masanim[i] ) {
            if (name.trim()) {
              var imgname = null;
              var imgvalue = null;
              imgname = name;
              imgvalue = value;
              let animanlsJSON = {
                name: imgname, 
                value: imgvalue,
              };
        
              fetch('/findanimal', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(animanlsJSON)
                })
                .then(response => {
                  if(!response.ok) {
                    throw new Error(response.statusText)
                  }
                  return response;
                })
                    .then(response => response.json())
                    .then(result => {
                      console.log(result)
                      if (result.error !== 0)
                      {
                        setValue(result.value)
                        setWidth(result.width)
                        setHeight(result.height)
                        setColor(result.color)
                        setImage('')
                      }
                      else
                      setImage('Какая то ошибка ^_^')
                    });
           }   
      return;  
     }
  }
  setName('Ошибка');
  setValue('Ошибка');
  event.preventDefault()
}

  /// Функция получения картинки
  function sendReq(event) {
    event.preventDefault()
    if (name.trim()) {
      var imgname = null;
      var imgvalue = null;
      var imgwidth = null;
      var imgheight = null;
      var imgcolor = null;
      
      imgname = name;
      imgvalue = value;
      imgwidth = width;
      imgheight = height;
      imgcolor = color;

      let animanlsJSON = {
        name: imgname, 
        value: imgvalue,
        width: imgwidth, 
				height: imgheight,
				color: imgcolor
      };

      fetch('/animal', {
        method: 'POST',
        mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(animanlsJSON)
        })
        .then(response => {
          if(!response.ok) {
            throw new Error(response.statusText)
          }
          return response;
        })
            .then(response => response.json())
            .then(result => {
              console.log(result)
              if (typeof result.error === 'undefined')
              {
                setImage(result.value+'.jpg')
                setImg('../public/'+name+'/'+ result.value + '.jpg')
              }
              else{
              setValue(result.value)
              setWidth(result.width)
              setHeight(result.height)
              setColor(result.color)
              setImage('Картинка не найдена')
            }});
    }
  }

  return (
    <div className="wrapper">
      <label>
          <b>Название животного:</b> <br />
          <input 
            value={name} 
            onChange={event => setName(event.target.value)} 
          /><p/>

          <b>Номер:</b> <br />
          <input 
            value={value} 
            onChange={event => setValue(event.target.value)} 
          /><p/>

          <b>Ширина:</b><br />
          <input 
            value={width} 
            onChange={event => setWidth(event.target.value)} 
          ></input><p/>

          <b>Высота:</b><br />
          <input 
            value={height} 
            onChange={event => setHeight(event.target.value)} 
          ></input><p/>

          <b>Цвет:</b><br />
          <input 
            value={color} 
            onChange={event => setColor(event.target.value)}             
          ></input><p/>  

          <b>Название картинки:</b><br />
          <input 
            value={image} 
            onChange={event => setImage(event.target.value)}             
          ></input><p/>

          <input 
            type="submit" 
            value="Найти на сервере" 
            onClick={startSearch}
          /><p/>

          <input 
            type="submit" 
            value="Отправить запрос" 
            onClick={sendReq}
          /><p/>

        <img
          src={img} 
          onChange={event => setImg(event.target.value)}
        />
      </label>
    </div>
  ); 
}

export default App;
