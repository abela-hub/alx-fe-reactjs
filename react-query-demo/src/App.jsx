import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent.jsx";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the app with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
