import { CustomerPhoto } from "./CustomerPhoto";
import styles from "./CustomerPhotos.module.css";

interface Props {}

export function CustomerPhotos(props: Props) {
  console.log("CustomerPhotos");
  return (
    <div>
      <CustomerPhoto />
      <CustomerPhoto />
      <CustomerPhoto />
      <CustomerPhoto />
    </div>
  );
}
