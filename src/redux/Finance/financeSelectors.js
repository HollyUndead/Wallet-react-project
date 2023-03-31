export const selectTransactions = state => state.finance.transactions;

export const selectTransactionCategories = state =>
  state.finance.transactionCategories;

export const selectTransactionSummary = state =>
  state.finance.transactionSummary;

export const selectCurrency = state => state.finance.currency;

export const selectFinanceIsLoading = state => state.finance.isLoading;

export const selectFinanceError = state => state.finance.error;
