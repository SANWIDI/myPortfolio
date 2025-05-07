import { useState } from "react";

function Review(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  //... handlechange= This function is typically used in a form handling scenario.
  //  When a user changes the value of an input field, handleChange updates the corresponding
  // field in the formData state and clears any error message for that field in the errors state.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  //function is typically used to handle form submissions. It prevents the default form submission behavior,
  //  checks if the form data is valid,
  //  logs the form data to the console, shows an alert to the user, and then resets the form fields.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted:", formData);
      alert("Your message is sent. Thank you!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // function is used to validate form data. It checks if the name and feedback fields
  //  are not empty and adds corresponding error messages to the newErrors object.
  //  You might want to add email validation to ensure the email is in a valid format.
  const validate = () => {
    const newErrors = {};
    // name not empty
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // email is valid email
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    )
      newErrors.email = "Invalid email format";

    // message not empty
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <h2>Do you like my profile? Hire me!</h2>
      {/* action="https://formsubmit.co/your@email.com" method="POST" */}

      <form
        // onSubmit={handleSubmit}
        action="https://formsubmit.co/b4cf10a7d109b046d3db115039c9633c"
        method="POST"
        className="form"
      >
        <label className="lblname">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className=""
          />
          {errors.name && <p className="">{errors.name}</p>}
        </label>
        <label className="lblemail">
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=""
          />
          {errors.email && <p className="">{errors.email}</p>}
        </label>
        <label className="lblmessage">
          message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=""
          />
          {errors.review && <p className="">{errors.review}</p>}
        </label>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Review;
