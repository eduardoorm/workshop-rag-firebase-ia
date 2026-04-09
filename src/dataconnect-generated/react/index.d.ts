import { ListDestinationsData, ListDestinationsVariables, GetDestinationData, GetDestinationVariables, SearchDestinationsData, SearchDestinationsVariables, CreateDestinationData, CreateDestinationVariables, UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useListDestinations(vars?: ListDestinationsVariables, options?: useDataConnectQueryOptions<ListDestinationsData>): UseDataConnectQueryResult<ListDestinationsData, ListDestinationsVariables>;
export function useListDestinations(dc: DataConnect, vars?: ListDestinationsVariables, options?: useDataConnectQueryOptions<ListDestinationsData>): UseDataConnectQueryResult<ListDestinationsData, ListDestinationsVariables>;

export function useGetDestination(vars: GetDestinationVariables, options?: useDataConnectQueryOptions<GetDestinationData>): UseDataConnectQueryResult<GetDestinationData, GetDestinationVariables>;
export function useGetDestination(dc: DataConnect, vars: GetDestinationVariables, options?: useDataConnectQueryOptions<GetDestinationData>): UseDataConnectQueryResult<GetDestinationData, GetDestinationVariables>;

export function useSearchDestinations(vars: SearchDestinationsVariables, options?: useDataConnectQueryOptions<SearchDestinationsData>): UseDataConnectQueryResult<SearchDestinationsData, SearchDestinationsVariables>;
export function useSearchDestinations(dc: DataConnect, vars: SearchDestinationsVariables, options?: useDataConnectQueryOptions<SearchDestinationsData>): UseDataConnectQueryResult<SearchDestinationsData, SearchDestinationsVariables>;

export function useCreateDestination(options?: useDataConnectMutationOptions<CreateDestinationData, FirebaseError, CreateDestinationVariables>): UseDataConnectMutationResult<CreateDestinationData, CreateDestinationVariables>;
export function useCreateDestination(dc: DataConnect, options?: useDataConnectMutationOptions<CreateDestinationData, FirebaseError, CreateDestinationVariables>): UseDataConnectMutationResult<CreateDestinationData, CreateDestinationVariables>;

export function useUpdateDestinationEmbedding(options?: useDataConnectMutationOptions<UpdateDestinationEmbeddingData, FirebaseError, UpdateDestinationEmbeddingVariables>): UseDataConnectMutationResult<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;
export function useUpdateDestinationEmbedding(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDestinationEmbeddingData, FirebaseError, UpdateDestinationEmbeddingVariables>): UseDataConnectMutationResult<UpdateDestinationEmbeddingData, UpdateDestinationEmbeddingVariables>;
