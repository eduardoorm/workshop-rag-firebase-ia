import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateDestinationData {
  destination_insert: Destination_Key;
}

export interface CreateDestinationVariables {
  ref: string;
  name: string;
  country: string;
  continent: string;
  knownFor: string;
  imageUrl?: string | null;
  tags?: string[] | null;
}

export interface Destination_Key {
  id: UUIDString;
  __typename?: 'Destination_Key';
}

export interface GetDestinationData {
  destinations: ({
    ref: string;
    name: string;
    imageUrl?: string | null;
  })[];
}

export interface GetDestinationVariables {
  ref: string;
}

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

export interface ListDestinationsVariables {
  continent?: string | null;
  limit?: number | null;
}

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

export interface SearchDestinationsVariables {
  query: string;
  limit?: number | null;
}

export interface UpdateDestinationEmbeddingData {
  destination_update?: Destination_Key | null;
}

export interface UpdateDestinationEmbeddingVariables {
  id: UUIDString;
  knownFor: string;
}

interface ListDestinationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListDestinationsVariables): QueryRef<ListDestinationsData, ListDestinationsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListDestinationsVariables): QueryRef<ListDestinationsData, ListDestinationsVariables>;
  operationName: string;
}
export const listDestinationsRef: ListDestinationsRef;

export function listDestinations(vars?: ListDestinationsVariables): QueryPromise<ListDestinationsData, ListDestinationsVariables>;
export function listDestinations(dc: DataConnect, vars?: ListDestinationsVariables): QueryPromise<ListDestinationsData, ListDestinationsVariables>;

interface GetDestinationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDestinationVariables): QueryRef<GetDestinationData, GetDestinationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetDestinationVariables): QueryRef<GetDestinationData, GetDestinationVariables>;
  operationName: string;
}
export const getDestinationRef: GetDestinationRef;

export function getDestination(vars: GetDestinationVariables): QueryPromise<GetDestinationData, GetDestinationVariables>;
export function getDestination(dc: DataConnect, vars: GetDestinationVariables): QueryPromise<GetDestinationData, GetDestinationVariables>;

interface SearchDestinationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SearchDestinationsVariables): QueryRef<SearchDestinationsData, SearchDestinationsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SearchDestinationsVariables): QueryRef<SearchDestinationsData, SearchDestinationsVariables>;
  operationName: string;
}
export const searchDestinationsRef: SearchDestinationsRef;

export function searchDestinations(vars: SearchDestinationsVariables): QueryPromise<SearchDestinationsData, SearchDestinationsVariables>;
export function searchDestinations(dc: DataConnect, vars: SearchDestinationsVariables): QueryPromise<SearchDestinationsData, SearchDestinationsVariables>;

interface CreateDestinationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDestinationVariables): MutationRef<CreateDestinationData, CreateDestinationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDestinationVariables): MutationRef<CreateDestinationData, CreateDestinationVariables>;
  operationName: string;
}
export const createDestinationRef: CreateDestinationRef;

export function createDestination(vars: CreateDestinationVariables): MutationPromise<CreateDestinationData, CreateDestinationVariables>;
export function createDestination(dc: DataConnect, vars: CreateDestinationVariables): MutationPromise<CreateDestinationData, CreateDestinationVariables>;

interface UpdateDestinationEmbeddingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDestinationEmbeddingVariables): MutationRef<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDestinationEmbeddingVariables): MutationRef<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;
  operationName: string;
}
export const updateDestinationEmbeddingRef: UpdateDestinationEmbeddingRef;

export function updateDestinationEmbedding(vars: UpdateDestinationEmbeddingVariables): MutationPromise<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;
export function updateDestinationEmbedding(dc: DataConnect, vars: UpdateDestinationEmbeddingVariables): MutationPromise<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;

