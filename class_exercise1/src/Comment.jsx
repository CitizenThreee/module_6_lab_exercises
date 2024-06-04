import UserInfo from "./UserInfo";
import Date from "./Date";

function Comment(props) {
    return (
        <div className="Comment componentBox">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <Date date={props.date} />
        </div>
    );
}

export default Comment;