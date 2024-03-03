import { CommentList } from "@/app/components/comments/CommentList";
import { CustomerPhotos } from "@/app/components/photos/CustomerPhotos";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/images/sweat.avif" width={700} height={700} alt={"sweat"} />
      <CustomerPhotos />
      <CommentList />
    </main>
  );
}
