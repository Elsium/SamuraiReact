import {sendMSGActionCreator, updateMSGTextActionCreator} from "../../../Redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
	return {
		dialogsData: state.dialogsPage.dialogsData,
		msgData: state.dialogsPage.msgData,
		curmsg: state.dialogsPage.curmsg,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMSG: (event) => {
			event.preventDefault();
			dispatch(sendMSGActionCreator());
		},
		updateMSGText: (text) => {
			dispatch(updateMSGTextActionCreator(text));
		},
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;