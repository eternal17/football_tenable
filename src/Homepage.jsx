import './Homepage.css';

const HomePage = () => {
  return (
    <>
      <div className="title">
        <span>FOOTBALL TENABLE</span>
      </div>
      <div className="home-container">
        <div className="box">
          <a style={{ textDecoration: 'none' }} href="/quiz">
            <span className="which-quiz">Random Top 10</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
