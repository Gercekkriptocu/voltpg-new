import { useEffect, useState } from 'react';

interface QuickAuthResult {
  isAuthenticated: boolean;
  fid?: number;
  username?: string;
}

export function useQuickAuth(isInFarcaster: boolean): QuickAuthResult {
  const [authResult, setAuthResult] = useState<QuickAuthResult>({
    isAuthenticated: false,
  });

  useEffect(() => {
    // Browser-only execution
    if (typeof window === 'undefined' || !isInFarcaster) {
      return;
    }

    const initQuickAuth = async () => {
      try {
        const { useQuickAuth: quickAuth } = await import('@farcaster/quick-auth');
        // Add your Quick Auth logic here if needed
        console.log('Quick Auth available');
      } catch (error) {
        console.log('Quick Auth not available');
      }
    };

    initQuickAuth();
  }, [isInFarcaster]);

  return authResult;
}
