const Card = (props) => {
  return (
    <div className="shadow-xl border rounded-xl  mx-auto max-w-6xl ">
      {props.children}
    </div>
  );
};
export default Card;
