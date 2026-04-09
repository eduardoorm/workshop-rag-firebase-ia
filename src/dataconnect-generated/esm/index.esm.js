import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'destinations',
  service: 'gdg-callao-8ed2f-service',
  location: 'us-east1'
};

export const listDestinationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListDestinations', inputVars);
}
listDestinationsRef.operationName = 'ListDestinations';

export function listDestinations(dcOrVars, vars) {
  return executeQuery(listDestinationsRef(dcOrVars, vars));
}

export const getDestinationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDestination', inputVars);
}
getDestinationRef.operationName = 'GetDestination';

export function getDestination(dcOrVars, vars) {
  return executeQuery(getDestinationRef(dcOrVars, vars));
}

export const searchDestinationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchDestinations', inputVars);
}
searchDestinationsRef.operationName = 'SearchDestinations';

export function searchDestinations(dcOrVars, vars) {
  return executeQuery(searchDestinationsRef(dcOrVars, vars));
}

export const createDestinationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDestination', inputVars);
}
createDestinationRef.operationName = 'CreateDestination';

export function createDestination(dcOrVars, vars) {
  return executeMutation(createDestinationRef(dcOrVars, vars));
}

export const updateDestinationEmbeddingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDestinationEmbedding', inputVars);
}
updateDestinationEmbeddingRef.operationName = 'UpdateDestinationEmbedding';

export function updateDestinationEmbedding(dcOrVars, vars) {
  return executeMutation(updateDestinationEmbeddingRef(dcOrVars, vars));
}

