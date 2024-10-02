import styles from "./page.module.css";

export default function Home() {

  return (
    <>
      <div className = {styles.slideFrame}>
        <SiteOverlay />
        <TitlePage />
        <AboutPage />
        <GalleryPage />
      </div>
    </>
  );
}


// Consider moving the ABSOLUTE divs into the home function and move the slides using a list


function SiteOverlay() {

  return (
    <div className = {`${styles.slideWrapper} ${styles.siteOverlay}`}>
      <h1>Overlay Text</h1>
    </div>
  );
}





function TitlePage() {
  return (
    <section className = {`${styles.slideWrapper} ${styles.titleSlide}`}>
      <h1>Test Text 1 - Title Page</h1>
    </section>
  );
}





function AboutPage() {
  return (
    <section className = {`${styles.slideWrapper} ${styles.aboutSlide}`}>
      <h1>Test Text 2 - About Page</h1>
    </section>
  );
}





function GalleryPage() {
  return (
    <section className = {`${styles.slideWrapper} ${styles.gallerySlide}`}>
      <h1>Test Text 3 - Gallery Page</h1>
    </section>
  );
}