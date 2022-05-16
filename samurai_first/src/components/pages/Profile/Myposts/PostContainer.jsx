import {addPostActionCreator, updatePostTextActionCreator} from "../../../../Redux/profileReducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newText: state.profilePage.newText,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updatePostText: (text) => {
			dispatch(updatePostTextActionCreator(text))
		},
		sendPost: (event) => {
			event.preventDefault();
			dispatch(addPostActionCreator());
		}
	}
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
export default PostContainer;