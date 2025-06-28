import { storage } from "@/storage/storage";
import { Redirect, useRootNavigationState } from "expo-router";
import { useEffect, useState } from "react";
import "../global.css";
export default function Page() {
  const rootNavigationState = useRootNavigationState();
  const [seen, setSeen] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnBoardingStatus = async () => {
      const checkStatus = await storage.isComplete();
      setSeen(checkStatus);
    };

    checkOnBoardingStatus();
  }, []);

  if (!rootNavigationState?.key || seen === null) return null;

  return <Redirect href={seen ? "/(auth)" : "/(onboarding)"} />;
}
