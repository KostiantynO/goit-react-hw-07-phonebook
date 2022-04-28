import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://624d72a2d71863d7a817f64f.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),

    createContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),

    updateContact: builder.mutation({
      query: body => ({
        url: `/contacts/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, arg) =>
        console.log({ result, error, arg }) || [
          { type: 'Contacts', id: arg.id },
        ],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({ url: `/contacts/${contactId}`, method: 'DELETE' }),
      invalidatesTags: (result, error, arg) =>
        console.log({ result, error, arg }) || [
          { type: 'Contacts', id: arg.id },
        ],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useFetchContactsQuery,

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
