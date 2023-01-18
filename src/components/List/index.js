import { useAppContext } from "../../context/AppProvider";
import { 
  getList,
} from "./controller";

const ListContent = () => {

  const { products } = useAppContext();

  return (
    <>
      <h3>Products list</h3>
      {getList(products)}
    </>
  );
}

export default function List() {
  return (
    <ListContent />
  );
}