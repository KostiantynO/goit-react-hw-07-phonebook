import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://624d72a2d71863d7a817f64f.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    fetchContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contact'],
    }),

    updateContact: builder.mutation({
      query: updatedContact => ({
        url: `/contacts/${updatedContact.id}`,
        method: 'PUT',
        body: updatedContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({ url: `/contacts/${contactId}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useFetchContactsQuery,
  useFetchContactByIdQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlice.actions;
