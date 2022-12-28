import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
  // note here this is prop spreading as the itemData props in our ExpenseItem component
  // are the same as the ones we want to inject here (from the dummy data, we will also get id)
  // the same line above could have been written by:
  // return <ExpenseItem description={..description} amount={...amount} date={...date}/>
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
