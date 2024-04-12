
const List = () => {
 
  const data = localStorage.getItem("fav");
  parsed = JSON.parse(data);
  

  return <div>{console.log(parsed)}</div>;
};
export default List;
