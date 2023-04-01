export const TransactionListItemMobile = ({ ...props }) => {
  const { transactionDate, type, categoryName, comment, amount } =
    props.trannsaction;
  return (
    <div>
      <ul className="aasas">
        <li>
          <span>Date</span>
          <span>{transactionDate}</span>
        </li>
        <li>
          <span>Type</span>
          <span>{type}</span>
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
