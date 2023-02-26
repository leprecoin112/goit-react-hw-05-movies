const { default: TrendMovies } = require('modules/TrendMovies/TrendMovies');

function HomePage() {
  return (
    <main>
      <section>
        <TrendMovies />
      </section>
    </main>
  );
}

export default HomePage;
