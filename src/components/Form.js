import React, { useState } from "react";

function MyForm() {
  const initialState = {
    name: "",
    // text: "",
    // check: false,
    // title: "Mr",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const value =
      fieldName === "check" ? event.target.checked : event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!formData.name) {
      nameError = "Name cannot be blank";
    }

    if (!formData.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (formData.password.length < 8) {
      passwordError = "Password Length must be 8 characters or more";
    }
    if (emailError || nameError || passwordError) {
      setFormData({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const Valid = validate();
    console.log(formData);
    if (Valid) {
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="Form"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
          margin: "1%",
          backgroundColor: "yellow",
          padding: "5%",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <div style={{ color: "red", fontSize: "12px" }}>
          {formData.nameError}
        </div>
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div style={{ color: "red", fontSize: "12px" }}>
          {formData.emailError}
        </div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div style={{ color: "red", fontSize: "12px" }}>
          {formData.passwordError}
        </div>

        {/* <textarea
          value={formData.text}
          name="text"
          onChange={handleChange}
          style={{ marginBottom: "1rem" }}
        />
        <label style={{ marginBottom: "1rem" }}>
          <input
            type="checkbox"
            name="check"
            checked={formData.check}
            onChange={handleChange}
          />
          Check me
        </label>
        <div>
          <select onChange={handleChange} value={formData.title} name="title">
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
        </div> */}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default MyForm;
