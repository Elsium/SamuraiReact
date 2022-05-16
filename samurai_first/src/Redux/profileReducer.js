const addpost = 'ADD-POST';
const updateposttext = 'UPDATE-POST-TEXT';

let initialState = {
	postsData: [
		{
			id: 1,
			username: "Elsium",
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			text: "<script type=\"text/javascript\">alert(\"Hello\");</script>",
			like: "3"
		},
		{
			id: 2,
			username: "Kivorob",
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			text: "Heeey! man!",
			like: "7"
		},
		{
			id: 3,
			username: "Stepash",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BgREGwGBtdG9th6TjSLJu4PA7FaRkqfI2A&usqp=CAU",
			text: "Привет",
			like: "4"
		},
		{
			id: 4,
			username: "Kivorob",
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			text: "DUDEEEEE...",
			like: "1"
		},
		{
			id: 5,
			username: "Elsium",
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			text: "mmmmmm",
			like: "3"
		}
	],
	newText: ""
}

const profileReduver = (state = initialState, action) => {
	switch (action.type) {
		case addpost: {
			if (state.newText === "") return state;
			let count = state.postsData.length + 1;
			let newPost = {
				id: count,
				username: "Elsium",
				avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
				text: state.newText,
				like: "0"
			}
			let copy = {...state};
			copy.postsData = [...state.postsData];
			copy.postsData.push(newPost);
			copy.newText = "";
			return copy;
		}
		case updateposttext: {
			let copy = {...state};
			copy.newText = action.newText;
			return copy;
		}
		default: {
			return state;
		}
	}
}

export const addPostActionCreator = () => ({type: addpost});
export const updatePostTextActionCreator = (text) =>
	({type: updateposttext, newText: text});

export default profileReduver;