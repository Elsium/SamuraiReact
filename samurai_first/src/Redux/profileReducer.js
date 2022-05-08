const addpost = 'ADD-POST';
const updateposttext = 'UPDATE-POST-TEXT';

const profileReduver = (state, action) => {
	switch (action.type) {
		case addpost: {
			let count = state.postsData.length + 1;
			let newPost = {
				id: count,
				username: "Elsium",
				avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
				text: state.newText,
				like: "0"
			}
			state.postsData.push(newPost);
			state.newText = "";
			break;
		}
		case updateposttext: {
			state.newText = action.newText;
			break;
		}
		default: {
			break;
		}
	}
	
	return state;
}

export const addPostActionCreator = () => ({type: addpost});
export const updatePostTextActionCreator = (text) =>
	({type: updateposttext, newText: text});

export default profileReduver;