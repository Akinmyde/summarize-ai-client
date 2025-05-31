const BottomNav = () => {
  return (
    <div className="bg-white rounded-t-2xl shadow-inner px-8 py-3 flex justify-between items-center">
      <div className="flex flex-col items-center text-blue-600">
        <span className="text-2xl">🏠</span>
        <span className="text-xs font-medium mt-1">Home</span>
      </div>
      <div className="flex flex-col items-center text-gray-400">
        <span className="text-2xl">🔖</span>
        <span className="text-xs font-medium mt-1">Saved</span>
      </div>
      <div className="flex flex-col items-center text-gray-400">
        <span className="text-2xl">👤</span>
        <span className="text-xs font-medium mt-1">Profile</span>
      </div>
    </div>
  );
};

export default BottomNav;
