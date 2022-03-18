// https://rubyonrails.org/

function RubyOnRailPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav__options">
          <ul>
            <div>left</div>
            <div>right</div>
          </ul>
        </div>
      </nav>
      <div className="layout">
        <div className="heading">
          <div className="container">
            <div className="heading__body"></div>
          </div>
        </div>
        <div className="video">
          <div className="container">
            <div className="video__embed"></div>
          </div>
        </div>
        <div className="text">
          <div className="container">
            <div className="text__body"></div>
          </div>
        </div>
        <div className="trusted">
          <div className="container">
            <div className="trusted__blocks"></div>
          </div>
        </div>
        <div className="example">
          <div className="container">
            <div className="example__body"></div>
          </div>
        </div>
        <div className="cards">
          <div className="container">
            <div className="cards__container">
              <div className="card">
                <a href="https://rubyonrails.org/">
                  <div className="card__body">
                    <div className="card__label">label</div>
                    <div className="card__headine">headline</div>
                    <div className="card__content">content</div>
                  </div>
                </a>
              </div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </>
  );
}

export default RubyOnRailPage;
