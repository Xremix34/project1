import './styles.css';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick} disabled={disabled}>{text}</button>
    </div>
  );
}