import "./styles.css";

function Article() {
  return (
    <article className="SiameseCat">
      <h2 className="Rufus">Hi, I am a Siamese cat and my Name is Rufus</h2>
      <label htmlFor="catBreed">Breed:</label>
      <input id="catBreed" type="text" />
      <a href="https://en.wikipedia.org/wiki/Siamese_cat">
        Learn more about Siames cats
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
