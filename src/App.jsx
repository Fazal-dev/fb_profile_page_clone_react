import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div>
        <Header />
        <div className="cover-img-wrapper">
          <img width={"full"} height={400} src="./cover.jpg" />
        </div>
        {/* profile section start */}
        <div className="profile-section">
          <h1>profile section</h1>

          <p>page name</p>
          <p>likes</p>
          <p>buttons whatsapp message like</p>
        </div>
        {/* profile section end */}
        <div className="nav-tab">nav tabe here</div>

        <div className="main-body">
          {/* row one start */}
          <div className="row-one">
            <div className="intro">
              <h3>into</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              maxime fugiat quis vitae asperiores, iste suscipit. Inventore quo
              error, nam impedit officia totam consequuntur fugit, laboriosam
              neque corporis, laborum quas.
            </div>
            <div className="featured">
              <h3>featured</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              aut exercitationem laudantium? Consectetur, ipsa quibusdam vitae
              officia laboriosam corrupti pariatur excepturi adipisci possimus
              neque laborum eaque harum non atque in?
            </div>
          </div>
          {/* row one end */}
          {/* row two start */}
          <div className="row-two">
            <div className="photos-section">
              <h3>photos</h3>
            </div>
            <div className="post-section">
              <h3>post</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
