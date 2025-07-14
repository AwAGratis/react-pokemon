import './Card.css';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="custom-card">
      {children}
    </div>
  );
};

export default Card;