export const selectTransactions = state => state.finance.transactions;

export const selectTransactionCategories = state =>
  state.finance.transactionCategories;

export const selectTransactionSummary = state =>
  state.finance.transactionSummary;

// export const selectCurrency = state => state.finance.currency;

export const selectFinanceIsLoading = state => state.finance.isLoading;

export const selectFinanceError = state => state.finance.error;

export const selectTotalBalance = state => state.finance.totalBalance;

export const selectIsModalOpen = state => state.finance.modal.isModalOpen;

export const selectModalType = state => state.finance.modal.modalType;

export const selectEditModalTransactionId = state =>
  state.finance.modal.editModalTransactionId;
