import { useAppContext } from "../../context/AppProvider"

const BudgetContent = () => {

  const {budget, products} = useAppContext();

  const getBudget = () => {
    let total = 0;
    products.forEach(product => {
      total += product.price * product.quantity;
    });
    const finalBudget = budget - total;
    return finalBudget;
  }

  return (
    <div className="alert alert-warning text-center">
      Budget:
        <span className="d-block">{getBudget()}€</span>
    </div>
  )
}

export default function Budget() {
  return (
    <BudgetContent/>
  )
}