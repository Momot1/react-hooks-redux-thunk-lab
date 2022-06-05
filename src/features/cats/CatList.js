// write your CatList component here

function CatList({ catPics }) {
  console.log(catPics);

  const catImages = catPics.map((cat) => (
    <img alt="cat" src={cat.url} key={cat.id} />
  ));

  return <>{catImages}</>;
}

export default CatList;
