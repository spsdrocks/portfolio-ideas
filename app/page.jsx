import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div class = "slide-frame">
        <TitlePage />
      </div>
    </>
  );
}




function TitlePage() {
  return (
    <section class = "slide-wrapper, title-slide">
      <h1>Test Text 1 - Title Page</h1>
    </section>
  );
}