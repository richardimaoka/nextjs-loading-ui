import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log("nested layout");
  return (
    <section>
      <div>inside nested layout</div>
      {children}
    </section>
  );
}
