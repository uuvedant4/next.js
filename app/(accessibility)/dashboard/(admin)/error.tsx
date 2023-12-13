"use client";

interface ErrorInterface {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorInterface> = ({ error, reset }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button>Try again</button>
    </div>
  );
};

export default Error;
