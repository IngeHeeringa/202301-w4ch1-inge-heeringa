import "./Button.css";

interface ButtonProps {
  handleSelectAll: () => void;
}

const Button = ({ handleSelectAll }: ButtonProps): JSX.Element => {
  return (
    <button onClick={handleSelectAll} className="button button--select">
      Select all
    </button>
  );
};

export default Button;
