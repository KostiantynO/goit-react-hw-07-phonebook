import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// It uses IMMER immutabe state
export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) =>
        !payload?.id ||
        typeof payload.name !== 'string' ||
        typeof payload.number !== 'string'
          ? state
          : void state.unshift(payload),

      prepare: newContact => ({ payload: { ...newContact, id: nanoid() } }),
    },

    deleteContact: (state, { payload }) =>
      typeof payload !== 'string'
        ? state
        : state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, { payload }) =>
      typeof payload !== 'string' ? state : payload,
  },
});

export const { setFilter } = filterSlice.actions;
