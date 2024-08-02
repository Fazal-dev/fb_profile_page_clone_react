import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import "./post.css";

const Post = ({ post }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex align-items-start">
          <Image
            src={post.user.avatar}
            roundedCircle
            width="50"
            height="50"
            className="mx-2 "
            style={{ flexShrink: 0 }}
          />
          <div className="ml-3">
            <Card.Title>{post.user.name}</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {post.timestamp}
            </Card.Subtitle>
          </div>
        </div>
        <Card.Img variant="top" src={post.image} className="mb-2" />
        <Card.Text>{post.content}</Card.Text>
        <hr />
        <div className="d-flex flex-wrap justify-content-between">
          <Button
            variant="primary"
            className="d-flex align-items-center btn-post"
          >
            <i className="fas fa-thumbs-up mr-1"></i>
            Like
          </Button>

          <Button
            variant="primary"
            className="d-flex align-items-center btn-post"
          >
            <i className="fas fa-comment mr-1"></i>
            Comment
          </Button>

          <Button
            variant="primary"
            className="d-flex align-items-center btn-post"
          >
            <i className="fas fa-share mr-1"></i>
            Share
          </Button>

          <Button
            variant="primary"
            className="d-flex align-items-center btn-post"
          >
            <i className="fas fa-paper-plane mr-1"></i>
            Send
          </Button>
        </div>
        <hr />
      </Card.Body>
    </Card>
  );
};

export default Post;
