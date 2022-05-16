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
			if (state.curmsg === "") return state;
			let count = state.msgData.length + 1;
			let newMSG = {
				id: count,
				avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
				msg: state.curmsg,
				sender: ""
			}
			let copy = {...state};
			copy.msgData = [...state.msgData];
			copy.msgData.push(newMSG);
			copy.curmsg = "";
			return copy;
		}
		case updateMSGtext: {
			let copy = {...state};
			copy.curmsg = action.newText;
			return copy;
		}
		default: {
			return state;
		}
	}
}

export const sendMSGActionCreator = () => ({type: sendMSG});
export const updateMSGTextActionCreator = (text) =>
	({type: updateMSGtext, newText: text});

export default dialogsReduver;