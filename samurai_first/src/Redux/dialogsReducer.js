const sendMSG = 'SEND-MSG';
const updateMSGtext = 'UPDATE-MSG-TEXT';

let initialState = {
	dialogsData: [
		{id: 1, name: "Denis"},
		{id: 2, name: "Stepa"},
		{id: 3, name: "Dima"}
	],
	curmsg: "",
	msgData: [
		{
			id: 1,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "Hi hi!",
			sender: "1"
		},
		{
			id: 2,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "Hey",
			sender: ""
		},
		{
			id: 3,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "What`s up?",
			sender: "1"
		},
		{
			id: 4,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "Fine ^^",
			sender: ""
		},
		{
			id: 5,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "And u?",
			sender: ""
		},
		{
			id: 6,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "Its hard",
			sender: "1"
		},
		{
			id: 6,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "oh",
			sender: ""
		},
		{
			id: 6,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "Its hard",
			sender: "1"
		},
		{
			id: 6,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "oh",
			sender: ""
		},
		{
			id: 6,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "Its hard",
			sender: "1"
		},
		{
			id: 6,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "oh",
			sender: ""
		},
		{
			id: 6,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "Its hard",
			sender: "1"
		},
		{
			id: 6,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "oh",
			sender: ""
		}
	]
}

const dialogsReduver = (state = initialState, action) => {
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

export const sendMSGActionCreator = () => ({type: sendMSG});
export const updateMSGTextActionCreator = (text) =>
	({type: updateMSGtext, newText: text});

export default dialogsReduver;