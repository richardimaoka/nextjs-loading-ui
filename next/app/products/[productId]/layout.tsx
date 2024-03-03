import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log("product layout");
  return (
    <section>
      <div>inside layout</div>
      {children}
    </section>
  );
}
