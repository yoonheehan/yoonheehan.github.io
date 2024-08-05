import PropTypes from "prop-types";

function Button(props) {
  const handleClick = () => console.log("OUCH!");

  const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  const handleClick4 = (e) => {
    // console.log(e);
    e.target.textContent = "OUCH!";
  };

  return <button onDoubleClick={(e) => handleClick4(e)}>Click me</button>;
}

Button.propTypes = {};

export default Button;
