const ShimmerCard: React.FC = () => {
    return (
      <div className="border rounded-lg p-4 shadow bg-gray-200 animate-shimmer relative overflow-hidden">
        <div className="w-full h-48 bg-gray-300 rounded"></div>
        <div className="h-6 bg-gray-300 rounded mt-4"></div>
        <div className="h-4 bg-gray-300 rounded mt-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer"></div>
      </div>
    );
  };
  
  export default ShimmerCard;
  