import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "Name",
    text: "",
    check: false,
    title: "Mr",
  });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const value =
      fieldName === "check" ? event.target.checked : event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ marginBottom: "1rem" }}
        />
        <textarea
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
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default MyForm;
