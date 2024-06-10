import peerConfiguration from "./stunServer";

const createPeerConnection = () => {
  return new Promise(async (resolve, reject) => {
    const peerConection = await new RTCPeerConnection(peerConfiguration);
    // RTCPeerConnection is the connection to the peer
    // we may need more than one this time
    // we pass it the confi object (our stun server)
    // it will get us ice candidates
    const remoteStream = new MediaStream();

    peerConection.addEventListener("signalingstatechange", (e) => {
      console.log("Signaling state change");
      console.log(e);
    });

    peerConection.addEventListener("icecandidate", (e) => {
      console.log("found ICE Candidate");
      if (e.candidate) {
        console.log(e);
        // emit to socket server
      }
    });

    resolve({ peerConection, remoteStream });
  });
};

export default createPeerConnection;
