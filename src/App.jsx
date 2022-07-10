import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Meme } from "./components/Meme";

const App = () => {
  const [meme, setMeme] = useState({
    imgURL: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
    name: "One dose not simply walk into Mordor",
  });

  const [allMemes, setAllMemes] = useState([]);

  const handleTopText = (event) => {
    setMeme((state) => {
      return {
        ...state,
        topText: event.target.value,
      };
    });
  };

  const handleBottomText = (event) => {
    setMeme((state) => {
      return {
        ...state,
        bottomText: event.target.value,
      };
    });
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const rand = Math.round(Math.random() * 100 - 1);

    setMeme((state) => {
      return {
        ...state,
        imgURL: allMemes[rand].url,
        name: allMemes[rand].name,
      };
    });
  };

  return (
    <main>
      <Header />
      <Meme
        topText={meme.topText}
        bottomText={meme.bottomText}
        handleTopText={handleTopText}
        handleBottomText={handleBottomText}
        imgURL={meme.imgURL}
        altText={meme.name}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default App;
