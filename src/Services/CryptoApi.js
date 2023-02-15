import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '34ad8835femshc78793180d817f4p129b4fjsn0e2b82ffa833',
}
const CreateRequest = (url) => ({ url,headers:cryptoApiHeaders })

const baseUrl = 'https://coinranking1.p.rapidapi.com';
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => CreateRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (cionId) => CreateRequest(`/coin/${cionId}`)
        })
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
} = cryptoApi;

