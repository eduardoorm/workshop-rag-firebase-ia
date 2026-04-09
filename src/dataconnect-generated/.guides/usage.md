# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useListDestinations, useGetDestination, useSearchDestinations, useCreateDestination, useUpdateDestinationEmbedding } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useListDestinations(listDestinationsVars);

const { data, isPending, isSuccess, isError, error } = useGetDestination(getDestinationVars);

const { data, isPending, isSuccess, isError, error } = useSearchDestinations(searchDestinationsVars);

const { data, isPending, isSuccess, isError, error } = useCreateDestination(createDestinationVars);

const { data, isPending, isSuccess, isError, error } = useUpdateDestinationEmbedding(updateDestinationEmbeddingVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { listDestinations, getDestination, searchDestinations, createDestination, updateDestinationEmbedding } from '@dataconnect/generated';


// Operation ListDestinations:  For variables, look at type ListDestinationsVars in ../index.d.ts
const { data } = await ListDestinations(dataConnect, listDestinationsVars);

// Operation GetDestination:  For variables, look at type GetDestinationVars in ../index.d.ts
const { data } = await GetDestination(dataConnect, getDestinationVars);

// Operation SearchDestinations:  For variables, look at type SearchDestinationsVars in ../index.d.ts
const { data } = await SearchDestinations(dataConnect, searchDestinationsVars);

// Operation CreateDestination:  For variables, look at type CreateDestinationVars in ../index.d.ts
const { data } = await CreateDestination(dataConnect, createDestinationVars);

// Operation UpdateDestinationEmbedding:  For variables, look at type UpdateDestinationEmbeddingVars in ../index.d.ts
const { data } = await UpdateDestinationEmbedding(dataConnect, updateDestinationEmbeddingVars);


```