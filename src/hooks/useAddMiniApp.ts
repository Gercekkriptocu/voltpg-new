import { useCallback } from 'react';

export function useAddMiniApp() {
  const addMiniApp = useCallback(async () => {
    // Browser-only execution
    if (typeof window === 'undefined') {
      console.log('useAddMiniApp: Not in browser context');
      return;
    }

    try {
      const { sdk } = await import('@farcaster/miniapp-sdk');
      await sdk.actions.addMiniApp();
      console.log('Mini app added successfully');
    } catch (error) {
      console.log('Could not add mini app:', error);
    }
  }, []);

  return { addMiniApp };
}
