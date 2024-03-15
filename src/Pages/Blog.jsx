import React from 'react';
// import './styles.css'; // Import stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Blog() {
  return (
    <div className="container">
      <h1 className="mt-5">My Blog</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">First Post</h5>
              <p className="card-text">This is the content of my first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Second Post</h5>
              <p className="card-text">This is the content of my second post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;