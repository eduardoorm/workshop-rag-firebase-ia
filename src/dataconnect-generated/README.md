# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `destinations`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListDestinations*](#listdestinations)
  - [*GetDestination*](#getdestination)
  - [*SearchDestinations*](#searchdestinations)
- [**Mutations**](#mutations)
  - [*CreateDestination*](#createdestination)
  - [*UpdateDestinationEmbedding*](#updatedestinationembedding)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `destinations`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `destinations` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListDestinations
You can execute the `ListDestinations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listDestinations(vars?: ListDestinationsVariables): QueryPromise<ListDestinationsData, ListDestinationsVariables>;

interface ListDestinationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListDestinationsVariables): QueryRef<ListDestinationsData, ListDestinationsVariables>;
}
export const listDestinationsRef: ListDestinationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDestinations(dc: DataConnect, vars?: ListDestinationsVariables): QueryPromise<ListDestinationsData, ListDestinationsVariables>;

interface ListDestinationsRef {
  ...
  (dc: DataConnect, vars?: ListDestinationsVariables): QueryRef<ListDestinationsData, ListDestinationsVariables>;
}
export const listDestinationsRef: ListDestinationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDestinationsRef:
```typescript
const name = listDestinationsRef.operationName;
console.log(name);
```

### Variables
The `ListDestinations` query has an optional argument of type `ListDestinationsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListDestinationsVariables {
  continent?: string | null;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListDestinations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDestinationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDestinationsData {
  destinations: ({
    id: UUIDString;
    name: string;
    country: string;
    continent: string;
    knownFor: string;
    imageUrl?: string | null;
    tags?: string[] | null;
  } & Destination_Key)[];
}
```
### Using `ListDestinations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDestinations, ListDestinationsVariables } from '@dataconnect/generated';

// The `ListDestinations` query has an optional argument of type `ListDestinationsVariables`:
const listDestinationsVars: ListDestinationsVariables = {
  continent: ..., // optional
  limit: ..., // optional
};

// Call the `listDestinations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDestinations(listDestinationsVars);
// Variables can be defined inline as well.
const { data } = await listDestinations({ continent: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListDestinationsVariables` argument.
const { data } = await listDestinations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDestinations(dataConnect, listDestinationsVars);

console.log(data.destinations);

// Or, you can use the `Promise` API.
listDestinations(listDestinationsVars).then((response) => {
  const data = response.data;
  console.log(data.destinations);
});
```

### Using `ListDestinations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDestinationsRef, ListDestinationsVariables } from '@dataconnect/generated';

// The `ListDestinations` query has an optional argument of type `ListDestinationsVariables`:
const listDestinationsVars: ListDestinationsVariables = {
  continent: ..., // optional
  limit: ..., // optional
};

// Call the `listDestinationsRef()` function to get a reference to the query.
const ref = listDestinationsRef(listDestinationsVars);
// Variables can be defined inline as well.
const ref = listDestinationsRef({ continent: ..., limit: ..., });
// Since all variables are optional for this query, you can omit the `ListDestinationsVariables` argument.
const ref = listDestinationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDestinationsRef(dataConnect, listDestinationsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.destinations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.destinations);
});
```

## GetDestination
You can execute the `GetDestination` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDestination(vars: GetDestinationVariables): QueryPromise<GetDestinationData, GetDestinationVariables>;

interface GetDestinationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDestinationVariables): QueryRef<GetDestinationData, GetDestinationVariables>;
}
export const getDestinationRef: GetDestinationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDestination(dc: DataConnect, vars: GetDestinationVariables): QueryPromise<GetDestinationData, GetDestinationVariables>;

interface GetDestinationRef {
  ...
  (dc: DataConnect, vars: GetDestinationVariables): QueryRef<GetDestinationData, GetDestinationVariables>;
}
export const getDestinationRef: GetDestinationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDestinationRef:
```typescript
const name = getDestinationRef.operationName;
console.log(name);
```

### Variables
The `GetDestination` query requires an argument of type `GetDestinationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetDestinationVariables {
  ref: string;
}
```
### Return Type
Recall that executing the `GetDestination` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDestinationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDestinationData {
  destinations: ({
    ref: string;
    name: string;
    imageUrl?: string | null;
  })[];
}
```
### Using `GetDestination`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDestination, GetDestinationVariables } from '@dataconnect/generated';

// The `GetDestination` query requires an argument of type `GetDestinationVariables`:
const getDestinationVars: GetDestinationVariables = {
  ref: ..., 
};

// Call the `getDestination()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDestination(getDestinationVars);
// Variables can be defined inline as well.
const { data } = await getDestination({ ref: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDestination(dataConnect, getDestinationVars);

console.log(data.destinations);

// Or, you can use the `Promise` API.
getDestination(getDestinationVars).then((response) => {
  const data = response.data;
  console.log(data.destinations);
});
```

### Using `GetDestination`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDestinationRef, GetDestinationVariables } from '@dataconnect/generated';

// The `GetDestination` query requires an argument of type `GetDestinationVariables`:
const getDestinationVars: GetDestinationVariables = {
  ref: ..., 
};

// Call the `getDestinationRef()` function to get a reference to the query.
const ref = getDestinationRef(getDestinationVars);
// Variables can be defined inline as well.
const ref = getDestinationRef({ ref: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDestinationRef(dataConnect, getDestinationVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.destinations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.destinations);
});
```

## SearchDestinations
You can execute the `SearchDestinations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
searchDestinations(vars: SearchDestinationsVariables): QueryPromise<SearchDestinationsData, SearchDestinationsVariables>;

interface SearchDestinationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SearchDestinationsVariables): QueryRef<SearchDestinationsData, SearchDestinationsVariables>;
}
export const searchDestinationsRef: SearchDestinationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
searchDestinations(dc: DataConnect, vars: SearchDestinationsVariables): QueryPromise<SearchDestinationsData, SearchDestinationsVariables>;

interface SearchDestinationsRef {
  ...
  (dc: DataConnect, vars: SearchDestinationsVariables): QueryRef<SearchDestinationsData, SearchDestinationsVariables>;
}
export const searchDestinationsRef: SearchDestinationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the searchDestinationsRef:
```typescript
const name = searchDestinationsRef.operationName;
console.log(name);
```

### Variables
The `SearchDestinations` query requires an argument of type `SearchDestinationsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SearchDestinationsVariables {
  query: string;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `SearchDestinations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SearchDestinationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SearchDestinationsData {
  destinations_embedding_similarity: ({
    name: string;
    country: string;
    continent: string;
    knownFor: string;
    imageUrl?: string | null;
    tags?: string[] | null;
  })[];
}
```
### Using `SearchDestinations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, searchDestinations, SearchDestinationsVariables } from '@dataconnect/generated';

// The `SearchDestinations` query requires an argument of type `SearchDestinationsVariables`:
const searchDestinationsVars: SearchDestinationsVariables = {
  query: ..., 
  limit: ..., // optional
};

// Call the `searchDestinations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await searchDestinations(searchDestinationsVars);
// Variables can be defined inline as well.
const { data } = await searchDestinations({ query: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await searchDestinations(dataConnect, searchDestinationsVars);

console.log(data.destinations_embedding_similarity);

// Or, you can use the `Promise` API.
searchDestinations(searchDestinationsVars).then((response) => {
  const data = response.data;
  console.log(data.destinations_embedding_similarity);
});
```

### Using `SearchDestinations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, searchDestinationsRef, SearchDestinationsVariables } from '@dataconnect/generated';

// The `SearchDestinations` query requires an argument of type `SearchDestinationsVariables`:
const searchDestinationsVars: SearchDestinationsVariables = {
  query: ..., 
  limit: ..., // optional
};

// Call the `searchDestinationsRef()` function to get a reference to the query.
const ref = searchDestinationsRef(searchDestinationsVars);
// Variables can be defined inline as well.
const ref = searchDestinationsRef({ query: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = searchDestinationsRef(dataConnect, searchDestinationsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.destinations_embedding_similarity);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.destinations_embedding_similarity);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `destinations` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateDestination
You can execute the `CreateDestination` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDestination(vars: CreateDestinationVariables): MutationPromise<CreateDestinationData, CreateDestinationVariables>;

interface CreateDestinationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDestinationVariables): MutationRef<CreateDestinationData, CreateDestinationVariables>;
}
export const createDestinationRef: CreateDestinationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDestination(dc: DataConnect, vars: CreateDestinationVariables): MutationPromise<CreateDestinationData, CreateDestinationVariables>;

interface CreateDestinationRef {
  ...
  (dc: DataConnect, vars: CreateDestinationVariables): MutationRef<CreateDestinationData, CreateDestinationVariables>;
}
export const createDestinationRef: CreateDestinationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDestinationRef:
```typescript
const name = createDestinationRef.operationName;
console.log(name);
```

### Variables
The `CreateDestination` mutation requires an argument of type `CreateDestinationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDestinationVariables {
  ref: string;
  name: string;
  country: string;
  continent: string;
  knownFor: string;
  imageUrl?: string | null;
  tags?: string[] | null;
}
```
### Return Type
Recall that executing the `CreateDestination` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDestinationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDestinationData {
  destination_insert: Destination_Key;
}
```
### Using `CreateDestination`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDestination, CreateDestinationVariables } from '@dataconnect/generated';

// The `CreateDestination` mutation requires an argument of type `CreateDestinationVariables`:
const createDestinationVars: CreateDestinationVariables = {
  ref: ..., 
  name: ..., 
  country: ..., 
  continent: ..., 
  knownFor: ..., 
  imageUrl: ..., // optional
  tags: ..., // optional
};

// Call the `createDestination()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDestination(createDestinationVars);
// Variables can be defined inline as well.
const { data } = await createDestination({ ref: ..., name: ..., country: ..., continent: ..., knownFor: ..., imageUrl: ..., tags: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDestination(dataConnect, createDestinationVars);

console.log(data.destination_insert);

// Or, you can use the `Promise` API.
createDestination(createDestinationVars).then((response) => {
  const data = response.data;
  console.log(data.destination_insert);
});
```

### Using `CreateDestination`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDestinationRef, CreateDestinationVariables } from '@dataconnect/generated';

// The `CreateDestination` mutation requires an argument of type `CreateDestinationVariables`:
const createDestinationVars: CreateDestinationVariables = {
  ref: ..., 
  name: ..., 
  country: ..., 
  continent: ..., 
  knownFor: ..., 
  imageUrl: ..., // optional
  tags: ..., // optional
};

// Call the `createDestinationRef()` function to get a reference to the mutation.
const ref = createDestinationRef(createDestinationVars);
// Variables can be defined inline as well.
const ref = createDestinationRef({ ref: ..., name: ..., country: ..., continent: ..., knownFor: ..., imageUrl: ..., tags: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDestinationRef(dataConnect, createDestinationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.destination_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.destination_insert);
});
```

## UpdateDestinationEmbedding
You can execute the `UpdateDestinationEmbedding` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDestinationEmbedding(vars: UpdateDestinationEmbeddingVariables): MutationPromise<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;

interface UpdateDestinationEmbeddingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDestinationEmbeddingVariables): MutationRef<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;
}
export const updateDestinationEmbeddingRef: UpdateDestinationEmbeddingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDestinationEmbedding(dc: DataConnect, vars: UpdateDestinationEmbeddingVariables): MutationPromise<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;

interface UpdateDestinationEmbeddingRef {
  ...
  (dc: DataConnect, vars: UpdateDestinationEmbeddingVariables): MutationRef<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;
}
export const updateDestinationEmbeddingRef: UpdateDestinationEmbeddingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDestinationEmbeddingRef:
```typescript
const name = updateDestinationEmbeddingRef.operationName;
console.log(name);
```

### Variables
The `UpdateDestinationEmbedding` mutation requires an argument of type `UpdateDestinationEmbeddingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDestinationEmbeddingVariables {
  id: UUIDString;
  knownFor: string;
}
```
### Return Type
Recall that executing the `UpdateDestinationEmbedding` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDestinationEmbeddingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDestinationEmbeddingData {
  destination_update?: Destination_Key | null;
}
```
### Using `UpdateDestinationEmbedding`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDestinationEmbedding, UpdateDestinationEmbeddingVariables } from '@dataconnect/generated';

// The `UpdateDestinationEmbedding` mutation requires an argument of type `UpdateDestinationEmbeddingVariables`:
const updateDestinationEmbeddingVars: UpdateDestinationEmbeddingVariables = {
  id: ..., 
  knownFor: ..., 
};

// Call the `updateDestinationEmbedding()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDestinationEmbedding(updateDestinationEmbeddingVars);
// Variables can be defined inline as well.
const { data } = await updateDestinationEmbedding({ id: ..., knownFor: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDestinationEmbedding(dataConnect, updateDestinationEmbeddingVars);

console.log(data.destination_update);

// Or, you can use the `Promise` API.
updateDestinationEmbedding(updateDestinationEmbeddingVars).then((response) => {
  const data = response.data;
  console.log(data.destination_update);
});
```

### Using `UpdateDestinationEmbedding`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDestinationEmbeddingRef, UpdateDestinationEmbeddingVariables } from '@dataconnect/generated';

// The `UpdateDestinationEmbedding` mutation requires an argument of type `UpdateDestinationEmbeddingVariables`:
const updateDestinationEmbeddingVars: UpdateDestinationEmbeddingVariables = {
  id: ..., 
  knownFor: ..., 
};

// Call the `updateDestinationEmbeddingRef()` function to get a reference to the mutation.
const ref = updateDestinationEmbeddingRef(updateDestinationEmbeddingVars);
// Variables can be defined inline as well.
const ref = updateDestinationEmbeddingRef({ id: ..., knownFor: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDestinationEmbeddingRef(dataConnect, updateDestinationEmbeddingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.destination_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.destination_update);
});
```

