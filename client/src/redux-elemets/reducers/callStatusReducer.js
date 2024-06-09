// initial state
const initState = {
  current: "idle", //negotiating, prgress, complete
  video: false, // initially video is NOT on
  audio: false, // initially audio is NOT on
  videoDevices: "default",
  audioDevices: "default",
  shareScreen: false,
  haveMedia: false, // is there a localStream, has mediaStream been run
};

// export default callback function
export default (state = initState, action) => {
  if (action.type === "UPDATE_CALL_STATUS") {
    const copyState = { ...state };
    copyState[action.payload.prop] = action.payload.value;
    return copyState;
  } else if (action.type === "LOGOUT_OPTION" || action.type === "NEW_VERSION") {
    return "idle";
  } else {
    return state;
  }
};
