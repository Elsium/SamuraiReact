const sendMSG = 'SEND-MSG';
const updateMSGtext = 'UPDATE-MSG-TEXT';

const dialogsReduver = (state, action) => {
	switch (action.type) {
		case sendMSG: {
			let count = state.length + 1;
			let newMSG = {
				id: count,
				avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
				msg: state.curmsg,
				sender: ""
			}
			state.msgData.push(newMSG);
			state.curmsg = "";
			break;
		}
		case updateMSGtext: {
			state.curmsg = action.newText;
			break;
		}
		default: {
			break;
		}
	}
	
	return state;
}
export default dialogsReduver;