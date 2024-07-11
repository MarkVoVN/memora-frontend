import getQueryClient from "@/hooks/getQueryClient";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="">
      <HydrationBoundary state={dehydratedState}>
        <h1>This is Landing Page for Memora</h1>
      </HydrationBoundary>
    </main>
  );
}
