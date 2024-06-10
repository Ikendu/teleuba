export default (who, stream, peerConection) => {
  return {
    type: "ADD_STREAM",
    payload: { who, stream, peerConection },
  };
};
