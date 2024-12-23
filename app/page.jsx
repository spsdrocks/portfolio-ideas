"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {

  let overflowStatus = "visible";
  let scrollPositionInitial = 0;

  useEffect(() => {

    document.addEventListener("scroll", () => {
      
      if (overflowStatus == "visible") {

        let scrollPositionCurrent = window.scrollY;
        let scrollStatus = (scrollPositionCurrent > scrollPositionInitial) ? "down" : "up";  

        overflowStatus = "hidden";
          
        if (scrollStatus == "down") {

          //window.scrollTo({ top: (scrollPosition + window.innerHeight), behavior: "smooth"});

        }

        scrollPositionInitial = scrollPositionCurrent;

        overflowStatus = "visible";

      }

    });
  
  }, []);

  return (
    <>

      <div className = {styles.siteFrame}>
        <SiteOverlay />

        <div className = {styles.slideFrame} style = {{overflow: `${overflowStatus}`}}>
          <TitlePage />
          <AboutPage />
          <GalleryPage />
        </div>
      </div>
    </>
  );
}





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