import { useState } from "react";
import Alert from "./Components/Alerts/Danger";
import ListGroup from "./Components/Lists/ListGroup";
import Button from "./Components/Button/Button";
import "./app.css";
import NavBar from "./Components/ShoppingCart/NavBar/NavBar";
import AllItems from "./Components/ShoppingCart/Cart/AllItems";
import DynamicText from "./Components/CollapseText/DynamicText";
import Form from "./Components/Forms/Form";
import ReactForm from "./Components/Forms/ReactForm";
import Loading from "./Components/Effects/Loading";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // const items = ["a", "b", "c"];
  const [items, setItems] = useState(["a", "b", "c"]);
  let onSelectItem = (item: string) => {
    console.log(item);
  };

  let printJson = (item: object) => {
    console.log("lorem", item);
  };

  return (
    <>
      <Loading />

      {/* <Form /> */}

      {isVisible && <ReactForm jsonItem={printJson} />}

      {isVisible && (
        <div>
          <ListGroup
            items={items}
            header={"lorem header"}
            onSelectItem={onSelectItem}
          />
        </div>
      )}

      {isVisible && (
        <div>
          <Alert name="a">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            ipsam.
          </Alert>
        </div>
      )}

      {isVisible && <Button />}

      {isVisible && <NavBar itemCount={items.length} />}

      {isVisible && (
        <AllItems
          items={items}
          clearItem={() => {
            setItems([]);
          }}
        ></AllItems>
      )}

      {isVisible && (
        <DynamicText maxChar={50}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsa
          corporis libero. Nesciunt ea velit voluptatibus dolorem necessitatibus
          architecto dolores exercitationem excepturi sed perferendis nobis
          libero impedit ex, qui voluptate ipsum quas molestiae dolor, amet
          debitis cum. Fugit dolor quis nisi earum nam, minima maiores, laborum
          iusto veritatis voluptas quibusdam beatae quidem consequuntur. Fugiat
          sint, voluptatum id ut maiores magnam, omnis facilis impedit ipsam
          aliquam ab iste qui amet laborum itaque voluptate dolores mollitia
          suscipit reiciendis molestias vitae. Magni voluptatum, porro provident
          necessitatibus quidem facere sapiente assumenda veniam fugiat, culpa
          nesciunt ex in. Debitis obcaecati atque, aspernatur porro ullam
          necessitatibus.&nbsp;&nbsp;
        </DynamicText>
      )}
    </>
  );
}

export default App;
