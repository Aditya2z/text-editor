import React from 'react';

function Button({ contentJson }) {
  const handleClick = () => {
    localStorage.setItem("editorContent", contentJson);
  };

  return (
    <button
      className="btn"
      onClick={handleClick}
    >
      Save
    </button>
  );
};

export default Button;
