import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  fetchTransactionCategories,
  addTransaction,
  deleteTransaction,
  editTransaction,
  fetchTransactionSummary,
  // fetchCurrency,
  fetchCurrentUser,
} from '../operations';

const financeInitialState = {
  transactions: [],
  transactionCategories: [],
  transactionSummary: {},
  currency: [],
  totalBalance: null,
  isLoading: false,
  error: null,
  modal: {
    isModalOpen: true,
    modalType: '',
    editModalTransactionId: '',
  },
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const financeSlice = createSlice({
  name: 'finance',
  initialState: financeInitialState,
  reducers: {
    // Так как бекенд не возвращает id удаляемой транзакции, надо вручную ещё удалять
    deleteTransactionOffline(state, action) {
      const amount = state.transactions.find(
        transaction => transaction.id === action.payload
      ).amount;
      state.totalBalance = state.totalBalance - amount;

      const index = state.transactions.findIndex(
        transaction => transaction.id === action.payload
      );
      state.transactions.splice(index, 1);
    },
    toggleModal(state) {
      state.modal.isModalOpen = !state.modal.isModalOpen;
    },
    setModalType(state, action) {
      state.modal.modalType = action.payload;
    },
    setEditModalTransactionId(state, action) {
      state.modal.editModalTransactionId = action.payload;
    },
  },
  extraReducers: {
    [fetchTransactions.pending]: handlePending,
    [fetchTransactions.rejected]: handleRejected,
    [deleteTransaction.pending]: handlePending,
    [deleteTransaction.rejected]: handleRejected,
    [addTransaction.pending]: handlePending,
    [addTransaction.rejected]: handleRejected,
    [editTransaction.pending]: handlePending,
    [editTransaction.rejected]: handleRejected,
    [fetchTransactionCategories.pending]: handlePending,
    [fetchTransactionCategories.rejected]: handleRejected,
    [fetchTransactionSummary.pending]: handlePending,
    [fetchTransactionSummary.rejected]: handleRejected,
    // [fetchCurrency.pending]: handlePending,
    // [fetchCurrency.rejected]: handleRejected,
    [fetchCurrentUser.pending]: handlePending,
    [fetchCurrentUser.rejected]: handleRejected,
    [fetchTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.transactions = action.payload;
    },
    [deleteTransaction.fulfilled](state) {
      state.isLoading = false;
      state.error = null;
    },
    [addTransaction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.totalBalance = action.payload.balanceAfter;
      state.transactions.push(action.payload);
    },
    [editTransaction.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.transactions.findIndex(
        transaction => transaction.id === action.payload.id
      );
      state.totalBalance =
        state.totalBalance - state.transactions[index].amount;
      state.transactions[index].comment = action.payload.comment;
      state.transactions[index].amount = action.payload.amount;
      state.totalBalance =
        state.totalBalance + state.transactions[index].amount;
    },
    [fetchTransactionCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.transactionCategories = action.payload;
    },
    [fetchTransactionSummary.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.transactionSummary = action.payload;
    },
    // [fetchCurrency.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.currency = action.payload;
    // },
    [fetchCurrentUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.totalBalance = Number(action.payload.balance).toFixed(2);
    },
  },
});

export const {
  deleteTransactionOffline,
  toggleModal,
  setModalType,
  setEditModalTransactionId,
} = financeSlice.actions;

export const financeReducer = financeSlice.reducer;
