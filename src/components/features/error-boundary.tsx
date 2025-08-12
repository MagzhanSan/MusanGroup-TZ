"use client";

import { Component, ReactNode } from "react";
import { Text } from "./text";
import { ERROR_MESSAGES } from "@/lib/constants";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="container">
          <div className="flex gap-2.5">
            <div className="flex h-[274px] flex-2/3 flex-col bg-white">
              <div className="px-10 pt-5">
                <div className="flex items-end">
                  <Text type="heading">{ERROR_MESSAGES.DATA_LOAD_ERROR}</Text>
                </div>
                <Text type="page-description">{ERROR_MESSAGES.TRY_LATER}</Text>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
