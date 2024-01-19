function Button(props) {
  const { contentJson } = props;
  return (
    <button
      className="btn"
      onClick={() => {
        localStorage.setItem("editorContent", contentJson);
      }}
    >
      Save
    </button>
  );
}

export default Button;
