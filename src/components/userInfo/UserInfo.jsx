// Utils
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Styling
import "./UserInfo.css";

function UserInfo() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    navigate("/questions", { state: userInfo });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="text"
            placeholder="First Name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          name="difficulty"
          onChange={handleChange}
        >
          <option>Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          name="category"
          onChange={handleChange}
        >
          <option>Select Category</option>
          <option value="15">Video Games</option>
          <option value="14">Television</option>
          <option value="11">Movies</option>
          <option value="9">General Knowledge</option>
        </Form.Select>
        <Button type="submit">Submit!</Button>
      </Form>
    </>
  );
}

export default UserInfo;
