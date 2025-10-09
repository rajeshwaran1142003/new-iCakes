import { Cake } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-xs z-50
                    flex items-center justify-center">
      <div className="text-center">
        <Cake className="h-12 w-12 text-pink-500 mx-auto animate-bounce-soft" />
        <p className="mt-4 text-lg font-medium text-gray-600 animate-pulse">
          Loading sweet delights...
        </p>
      </div>
    </div>
  );
};

export default Loading;