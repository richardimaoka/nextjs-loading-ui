import { CommentList } from "@/app/components/comments/CommentList";
import { CustomerPhotos } from "@/app/components/photos/CustomerPhotos";
import Image from "next/image";

function sleep(msec: number) {
  console.log("sleeping");
  return new Promise((resolve) => setTimeout(resolve, msec));
}

export default async function Page() {
  await sleep(3000);

  return (
    <main>
      <Image src="/images/sweat.avif" width={700} height={700} alt={"sweat"} />
      <CustomerPhotos />
      <CommentList />
    </main>
  );
}
