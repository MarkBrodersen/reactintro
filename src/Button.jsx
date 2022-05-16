const Button = () => {
  const Death = () => {
    console.log("Hai");
    window.requestAnimationFrame(Death);
  };
  const handleClick = () => {
    alert("You did this to yourself");
    window.requestAnimationFrame(Death);
  };

  return (
    <button
      onClick={() => {
        handleClick("Mike");
      }}
    >
      Don't click me
    </button>
  );
};

export default Button;
