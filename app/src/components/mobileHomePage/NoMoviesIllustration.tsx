import React from 'react';

const NoMoviesIllustration: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src="/images/no-movies.png"
        alt="No Movies"
        className="w-[150px] h-[150px] mb-4"
      />
      <p className="text-lg font-semibold">{message}</p>
    </div>
  );
};

export default NoMoviesIllustration;
