import { useState } from "react";

function SignIn() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptterms] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
   
    setFirstname("");
    setLastname("");
    setPhone("");
    setEmail("");
    setPassword("");
    setAcceptterms("");
  }



  function handleFirstname(e) {
    setFirstname(e.target.value);
    console.log(e);
  }
  function handleLastname(e) {
    setLastname(e.target.value);
    console.log(e);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
    console.log(e);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(e);
  }
  function handleAcceptterms(e) {
    setAcceptterms(e.target.value);
    console.log(e);
  }

  return (
    <div className="register-container">
      <form className="register-form">
        <div className="register-form-h2">
          <h2> Register </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <label>FIRSTNAME*</label>
          <input
            type="text"
            placeholder="FIRSTNAME"
            value={firstname}
            onChange={handleFirstname}
            required
          ></input>

          <label>LASTNAME*</label>
          <input
            type="text"
            placeholder="LASTNAME"
            value={lastname}
            onChange={handleLastname}
            required
          ></input>

          <label>PHONE*</label>
          <input
            type="tel"
            placeholder="+91"
            value={phone}
            onChange={handlePhone}
            required
          ></input>

          <label>EMAIL*</label>
          <input
            type="text"
            placeholder="EMAIL"
            value={email}
            onChange={handleEmail}
            required
          ></input>

          <label>PASSWORD*</label>
          <input
            type="text"
            placeholder="PASSWORD"
            value={password}
            onChange={handlePassword}
            required
          ></input>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value={acceptTerms}
              onChange={handleAcceptterms}
              required
            ></input>
            <label>
              I have read the terms and conditions,privacy policy and review
              guidelines and agree to them.
            </label>
          </div>
          <br></br>
          <button>CONTINUE</button>
        </form>
      </form>
    </div>
  );
}

export default SignIn;
