interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    price: number;  // Change from string to number
  }
  
  const Card: React.FC<CardProps> = ({ imageUrl, title, description, price }) => {
    return (
      <div className="border rounded-lg shadow-lg p-4">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-lg font-semibold mt-2">PKR {price.toFixed(2)}</p> {/* Format price as a number */}
        </div>
      </div>
    );
  };
  
  export default Card;
  