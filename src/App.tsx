import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["a", "b", "c"];
  let onSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          header={"lorem header"}
          onSelectItem={onSelectItem}
        />
      </div>

      <div>
        <Alert name="a">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
          ipsam.
        </Alert>
      </div>
    </>
  );
}

export default App;
