import { CommentComponent } from "./CommentComponent";
import styles from "./CommentList.module.css";

interface Props {}

export function CommentList(props: Props) {
  const comments = ["hey", "yo", "bo"];

  return (
    <div>
      {comments.map((x) => (
        <CommentComponent key={x} />
      ))}
    </div>
  );
}
