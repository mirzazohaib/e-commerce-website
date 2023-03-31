import { useMutation } from '@tanstack/react-query'

import apiClient from '../api/apiClient'
import { UserInfo } from '../types/UserInfo'

export const useSigninMutation = () =>
  useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) =>
      (
        await apiClient.post<UserInfo>(`api/users.json`, {
          email,
          password
        })
      ).data
  })

export const useSignupMutation = () =>
  useMutation({
    mutationFn: async ({
      name,
      email,
      password
    }: {
      name: string
      email: string
      password: string
    }) =>
      (
        await apiClient.post<UserInfo>(`api/users.json`, {
          name,
          email,
          password
        })
      ).data
  })
