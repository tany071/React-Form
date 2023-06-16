import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    name: "",
    age: "",
    password: "",
  });

  // const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef);
    // const data=new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "Username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required:true
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required:true
    },
    {
      id: 3,
      name: "Name",
      type: "text",
      placeholder: "Name",
      label: "Name",
      required:true

    },
    {
      id: 4,
      name: "Date of Birth",
      type: "date",
      placeholder: "Date of Birth",
      label: "Date of Birth",
      required:true

    },
    {
      id: 5,
      name: "password",
      type: "text",
      placeholder: "password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "password",
      required:true

    }
  ];
  console.log(values);

  return (
    <div className="app">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
