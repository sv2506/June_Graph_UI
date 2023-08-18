import { Link } from 'react-router-dom';

interface TryButtonProps {
  to: string;
}

const TryButton: React.FC<TryButtonProps> = ({to}) => {
  return (
    <Link to={to}>
      <button className="try-button">Try it out</button>
    </Link>
  );
}

export default TryButton;
