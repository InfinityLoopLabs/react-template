import { createAxiosBaseQuery } from '@infinityloop.labs/common'
import { createApi } from '@reduxjs/toolkit/query/react'
import { sample_instance } from '../../axios'

const baseQuery = createAxiosBaseQuery(sample_instance)

export const sample = createApi({
  baseQuery,
  reducerPath: 'sample-hooks',
  endpoints: () => ({}),
})

export const api = sample
