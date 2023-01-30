interface InfoProps {
  number: number;
}

const Info = ({ number }: InfoProps): JSX.Element => {
  return <p className="info">{number} gentlemen pointing at you</p>;
};

export default Info;
