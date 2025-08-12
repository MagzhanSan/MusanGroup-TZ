"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface UseUrlParamsReturn {
  getParam: (key: string, defaultValue?: string) => string;
  setParam: (key: string, value: string) => void;
  updateParams: (params: Record<string, string>) => void;
}

export const useUrlParams = (): UseUrlParamsReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParam = useCallback((key: string, defaultValue: string = ""): string => {
    return searchParams.get(key) || defaultValue;
  }, [searchParams]);

  const setParam = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

  const updateParams = useCallback((newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value);
    });
    
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

  return {
    getParam,
    setParam,
    updateParams,
  };
};
