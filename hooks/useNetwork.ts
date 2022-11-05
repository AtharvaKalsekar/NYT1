import { getNetworkStateAsync, NetworkState } from 'expo-network';
import { useEffect, useState } from 'react';

const isInternetAvailable = async () => {
  try {
    const state: NetworkState = await getNetworkStateAsync();
    return state.isConnected && state.isInternetReachable;
  } catch (error) {
    return false;
  }
};

export enum NetworkCheckStatus {
  PENDING,
  DONE,
}

type InternetStatus = {
  isAvailable: boolean;
  statusCheck: NetworkCheckStatus;
};

export const useNetwork = (): InternetStatus => {
  const [isNetworkAvailable, setIsNetworkAvailable] = useState<boolean>(false);
  const [networCheckStatus, setNetworkCheckStatus] =
    useState<NetworkCheckStatus>(NetworkCheckStatus.PENDING);

  useEffect(() => {
    const isInternetAvailable = async () => {
      try {
        const state: NetworkState = await getNetworkStateAsync();
        setIsNetworkAvailable(
          !!(state.isConnected && state.isInternetReachable)
        );
      } catch (error) {
        setIsNetworkAvailable(false);
      }
      setNetworkCheckStatus(NetworkCheckStatus.DONE);
    };
    isInternetAvailable();
  }, []);

  return {
    isAvailable: isNetworkAvailable,
    statusCheck: networCheckStatus,
  };
};
