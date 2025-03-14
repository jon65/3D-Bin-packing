import { UseMutationOptions, DefaultOptions } from '@tanstack/react-query';

export const queryConfig = {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
}

