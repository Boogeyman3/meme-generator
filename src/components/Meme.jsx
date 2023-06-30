// import { useState, useEffect } from 'react';
// import './style.css';

// function Meme() {
//   const [memes, setMemes] = useState({
//     topText: "",
//     bottomText: "",
//   });

//   const [data, setData] = useState([]);
//   const [memeImage, setMemeImage] = useState('');

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://api.imgflip.com/get_memes');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       // Handle the error, if any
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setMemes((prevMemes) => ({
//       ...prevMemes,
//       [name]: value,
//     }));
//   }

//   function getMemeImage() {
//     const randomNum = Math.floor(Math.random() * data?.data?.memes.length);
//     setMemeImage(data?.data?.memes[randomNum]?.url);
//   }

//   return (
//     <main>
//       <div className='form'>
//         <input
//           placeholder='top-text'
//           type='text'
//           name='topText'
//           value={memes.topText}
//           onChange={handleChange}
//           className='form--input'
//         />
//         <input
//           placeholder='bottom-text'
//           type='text'
//           name='bottomText'
//           value={memes.bottomText}
//           onChange={handleChange}
//           className='form--input'
//         />
        
//         <button className='form--button' onClick={getMemeImage}>
//           Get a new Image
//         </button>
//       </div>
//       <div className='meme'>
//         <img className='meme-image' alt='Meme' src={memeImage} />
//         <h2 className='meme-text top'>{memes.topText}</h2>
//         <h2 className='meme-text bottom'>{memes.bottomText}</h2>
//       </div>
//     </main>
//   );
// }

// export default Meme;
import { useState, useEffect } from 'react';
import './style.css';

function Meme() {
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
  });

  const [data, setData] = useState([]);
  const [memeImage, setMemeImage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      // Handle the error, if any
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMemes((prevMemes) => ({
      ...prevMemes,
      [name]: value,
    }));
  }

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * data?.data?.memes.length);
    setMemeImage(data?.data?.memes[randomNum]?.url);
  }

  return (
    <main>
      <div className='form'>
        <input
          placeholder='top-text'
          type='text'
          name='topText'
          value={memes.topText}
          onChange={handleChange}
          className='form--input'
        />
        <input
          placeholder='bottom-text'
          type='text'
          name='bottomText'
          value={memes.bottomText}
          onChange={handleChange}
          className='form--input'
        />
        
        <button className='form--button' onClick={getMemeImage}>
          Get a new Image
        </button>
      </div>
      <div className='meme'>
        <img className='meme-image' alt='Meme' src={memeImage} />
        <h2 className='meme-text top'>{memes.topText}</h2>
        <h2 className='meme-text bottom'>{memes.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
