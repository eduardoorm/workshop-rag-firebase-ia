const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'destinations',
  service: 'gdg-callao-8ed2f-service',
  location: 'us-east1'
};
exports.connectorConfig = connectorConfig;

const listDestinationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListDestinations', inputVars);
}
listDestinationsRef.operationName = 'ListDestinations';
exports.listDestinationsRef = listDestinationsRef;

exports.listDestinations = function listDestinations(dcOrVars, vars) {
  return executeQuery(listDestinationsRef(dcOrVars, vars));
};

const getDestinationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDestination', inputVars);
}
getDestinationRef.operationName = 'GetDestination';
exports.getDestinationRef = getDestinationRef;

exports.getDestination = function getDestination(dcOrVars, vars) {
  return executeQuery(getDestinationRef(dcOrVars, vars));
};

const searchDestinationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchDestinations', inputVars);
}
searchDestinationsRef.operationName = 'SearchDestinations';
exports.searchDestinationsRef = searchDestinationsRef;

exports.searchDestinations = function searchDestinations(dcOrVars, vars) {
  return executeQuery(searchDestinationsRef(dcOrVars, vars));
};

const createDestinationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDestination', inputVars);
}
createDestinationRef.operationName = 'CreateDestination';
exports.createDestinationRef = createDestinationRef;

exports.createDestination = function createDestination(dcOrVars, vars) {
  return executeMutation(createDestinationRef(dcOrVars, vars));
};

const updateDestinationEmbeddingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDestinationEmbedding', inputVars);
}
updateDestinationEmbeddingRef.operationName = 'UpdateDestinationEmbedding';
exports.updateDestinationEmbeddingRef = updateDestinationEmbeddingRef;

exports.updateDestinationEmbedding = function updateDestinationEmbedding(dcOrVars, vars) {
  return executeMutation(updateDestinationEmbeddingRef(dcOrVars, vars));
};
