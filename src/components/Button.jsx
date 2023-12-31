function Button(props) {
  let classNames =
    "rounded-full border border-orange-600  px-3 font-bold text-sm hover:bg-orange-800";

  // Needs to be fixed
  if (props) {
    classNames += "bg-orange-300";
  } else {
    classNames += "bg-orange-600";
  }

  return <button {...props} className={classNames + props.className} />;
}

export default Button;
