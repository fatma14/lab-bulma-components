import React from 'react';
import ReactDOM from 'react-dom'; 
import 'bulma/css/bulma.css';

const Navbar = () => {
    return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
)}

const FormField = props => {
    return(
    <div>
<div className="field">
  <label className="label">{props.label}</label>
  <div className="control">
    <input className="input" type="text" placeholder={props.placeholder} />
  </div>
</div>

</div>
)
};

const CoolButton = props => {
    const btnClass = `button ${props.className} ${props.isSmall && 'is-small'} ${props.isDanger && 'is-danger'} ${props.isSuccess && 'is-success'} ${props.isInfo && 'is-info'}`
    return (
      <div>
    <button className = {btnClass} >{props.children}</button>
   
      </div>  
    )
    };

const Container = props => {
        return (
        <div className="container">
            <Navbar/>
<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<FormField label="Password" type="text" placeholder="******" />
<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton>
<CoolButton isSmall isInfo className="is-rounded my-class">Submit</CoolButton>
<Message isInfo title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
        </div>
        )
    }
    
const Message = props => {
    return (
        <div>
          <article className="message">
  <div className="message-header">
    <p>{props.title}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    {props.children}
  </div>
</article>
        </div>
    )
    }

    
const App = props => {
return (
 <div>
<Container/>
 </div>

)
}



  export default App;
