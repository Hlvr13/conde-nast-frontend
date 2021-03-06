import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loading;
