"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {

  return (
    <>
      <div className = {styles.siteFrame}>
        <SiteHeader />
        <SiteSidebar />

        <div className = {styles.slideFrame} id = "SlideFrame">
          <TitlePage />
          <AboutPage />
          <GalleryPage />
        </div>
      </div>
    </>
  );
}





function SiteHeader() {

  return (
    <div className = {styles.siteHeader}>
      <h1></h1>
    </div>
  );
}





function SiteSidebar() {
  useEffect(() => {
    // Slide frame element ID
    const slideFrame = document.getElementById("SlideFrame");

    // Circle click handler
    const handleCircleClick = (targetId) => {
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    // Circle element IDs
    const titleCircle = document.getElementById("TitleCircle");
    const aboutCircle = document.getElementById("AboutCircle");
    const galleryCircle = document.getElementById("GalleryCircle");

    // Page element IDs
    const titlePage = document.getElementById("TitlePage");
    const aboutPage = document.getElementById("AboutPage");
    const galleryPage = document.getElementById("GalleryPage");

    // Circle click event listeners
    titleCircle.addEventListener("click", () => handleCircleClick("TitlePage"));
    aboutCircle.addEventListener("click", () => handleCircleClick("AboutPage"));
    galleryCircle.addEventListener("click", () => handleCircleClick("GalleryPage"));

    // Page hover event listener
    // Changing the color of the circles when on those pages is not finished

    return () => {
      // Remove circle click event listeners
      titleCircle.removeEventListener("click", () => handleCircleClick("TitlePage"));
      aboutCircle.removeEventListener("click", () => handleCircleClick("AboutPage"));
      galleryCircle.removeEventListener("click", () => handleCircleClick("GalleryPage"));
    };
  }, []);

  return (
    <div className={styles.siteSidebar}>
      <span className={styles.pageLines}></span>
      <div>
        <span id="TitleCircle" className={styles.pageCircles}></span>
        <span id="AboutCircle" className={styles.pageCircles}></span>
        <span id="GalleryCircle" className={styles.pageCircles}></span>
      </div>
      <span className={styles.pageLines}></span>
    </div>
  );
}





function TitlePage() {
  return (
    <section className = {`${styles.slideWrapper} ${styles.titleSlide}`} id = "TitlePage">
      <h1>Test Text 1 - Title Page</h1>
    </section>
  );
}





function AboutPage() {
  return (
    <section className = {`${styles.slideWrapper} ${styles.aboutSlide}`} id = "AboutPage">
      <h1>Test Text 2 - About Page</h1>
    </section>
  );
}





function GalleryPage() {
  return (
    <section className = {`${styles.slideWrapper} ${styles.gallerySlide}`} id = "GalleryPage">
      <h1>Test Text 3 - Gallery Page</h1>
    </section>
  );
}