const Button = () => {
  const Death = () => {
    console.log("Hai");
    window.requestAnimationFrame(Death);
  };
  const handleClick = () => {
    alert("You did this to your self");
    window.requestAnimationFrame(Death);
  };

  return (
    <button
      onClick={() => {
        handleClick("Mike");
      }}
    >
      Click me
    </button>
  );
};

export default Button;
