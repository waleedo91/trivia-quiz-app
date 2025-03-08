// Utils
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Styling
import "./UserInfo.css";

function UserInfo() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors({ ...errors, [e.target.name]: "" });
  };
  console.log(userInfo);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    let validationErrors = {};

    if (!userInfo.name) validationErrors.name = "First Name is required";
    if (!userInfo.difficulty)
      validationErrors.difficulty = "Please Select your difficulty";
    if (!userInfo.category)
      validationErrors.category = "Please Select a category";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    navigate("/questions", { state: userInfo });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="user-container">
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="text"
            placeholder="First Name"
            name="name"
            onChange={handleChange}
            className="name-input"
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          name="difficulty"
          onChange={handleChange}
          className="difficulty-dropdown"
          isInvalid={!!errors.difficulty}
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.difficulty}
        </Form.Control.Feedback>
        <Form.Select
          aria-label="Default select example"
          name="category"
          onChange={handleChange}
          className="category-dropdown"
          isInvalid={!!errors.category}
        >
          <option value="">Select Category</option>
          <option value="15">Video Games</option>
          <option value="14">Television</option>
          <option value="11">Movies</option>
          <option value="9">General Knowledge</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.category}
        </Form.Control.Feedback>
        <Button type="submit" className="user-submit">
          Submit!
        </Button>
      </Form>
    </>
  );
}

export default UserInfo;
