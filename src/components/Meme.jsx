import "./Meme.css";

export const Meme = ({
  imgURL = "",
  altText = "",
  handleSubmit,
  topText,
  bottomText,
  handleTopText,
  handleBottomText,
}) => {
  return (
    <section className="meme">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input__fields">
          <label htmlFor="topText" className="sr-only">
            Enter text to be shown at the top
          </label>
          <input
            id="topText"
            type="text"
            className="input"
            placeholder="Top text"
            value={topText}
            onChange={handleTopText}
          />
          <label htmlFor="topBottom" className="sr-only">
            Enter text to be shown at the bottom
          </label>
          <input
            id="topBottom"
            type="text"
            className="input"
            placeholder="Bottom text"
            value={bottomText}
            onChange={handleBottomText}
          />
        </div>
        <button className="btn">Get a new meme image 🖼️</button>
      </form>
      <div className="meme-img">
        <img src={imgURL} alt={altText} />
        <h2 className="meme-text top">{topText}</h2>
        <h2 className="meme-text bottom">{bottomText}</h2>
      </div>
    </section>
  );
};
