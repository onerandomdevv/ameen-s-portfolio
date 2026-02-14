"use client";

import React, { Component, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="text-center space-y-6 max-w-md">
            <div className="flex justify-center">
              <AlertTriangle className="w-16 h-16 text-accent-lime" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                Something Went Wrong
              </h2>
              <p className="text-sm text-text-secondary">
                We encountered an error while loading this content. Please try
                again.
              </p>
            </div>
            <Button
              onClick={() => this.setState({ hasError: false })}
              className="bg-accent-lime text-black hover:bg-accent-lime/90 font-black uppercase tracking-widest"
            >
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
