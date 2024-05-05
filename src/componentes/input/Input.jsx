import PropTypes from "prop-types";

const Input = ({dataInput}) => {
  return (
    <div>
      <p> {dataInput} </p>
    </div>
  )
}

Input.propTypes = {
    dataInput: PropTypes.string.isRequired,
};

export default Input
 