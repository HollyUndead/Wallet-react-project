export const TransactionListItemMobile = ({ transaction, categories }) => {
  const { transactionDate, type, categoryId, comment, amount } = transaction;

  const typeStr = type === 'INCOME' ? '+' : '-';
  const categoryName =
    categories.length &&
    categories.find(category => category.id === categoryId).name;

  return (
    <div>
      <ul className="aasas">
        <li>
          <span>Date</span>
          <span>{transactionDate}</span>
        </li>
        <li>
          <span>Type</span>
          <span>{typeStr}</span>
        </li>
        <li>
          <span>Category</span>
          <span>{categoryName}</span>
        </li>
        <li>
          <span> Comment</span>
          <span>{comment}</span>
        </li>
        <li>
          <span>Sum</span>
          <span>{amount}</span>
        </li>
      </ul>
    </div>
  );
};
