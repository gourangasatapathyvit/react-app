import Alert from "./Components/Alerts/Danger";
import ListGroup from "./Components/Lists/ListGroup";
import "./app.css";

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
