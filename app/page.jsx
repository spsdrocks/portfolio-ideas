"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

const primaryColor = "#4C585B";
const secondaryColor = "#7E99A3";
const tertiaryColor = "#A5BFCC";
const quateraryColor = "#F4EDD3";

export default function Home() {  

  return (
    <>
      <div className = {styles.siteFrame}>
        {/* <SiteHeader /> */}
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




// Not In Use
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
    titlePage.addEventListener("mouseover", () => {titleCircle.style.backgroundColor = secondaryColor;});
    titlePage.addEventListener("mouseout", () => {titleCircle.style.backgroundColor = primaryColor;});
    aboutPage.addEventListener("mouseover", () => {aboutCircle.style.backgroundColor = secondaryColor;});
    aboutPage.addEventListener("mouseout", () => {aboutCircle.style.backgroundColor = primaryColor;});
    galleryPage.addEventListener("mouseover", () => {galleryCircle.style.backgroundColor = secondaryColor;});
    galleryPage.addEventListener("mouseout", () => {galleryCircle.style.backgroundColor = primaryColor;});

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


/*
Socials:

 - LinkedIn:  https://www.linkedin.com/in/simonduke06/   https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png
 - GitHub:    https://github.com/spsdrocks               https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png
 - Instagram: https://www.instagram.com/s_duke_06/       https://cdn-icons-png.flaticon.com/512/5968/5968776.png

*/


function TitlePage() {
  return (
    <section className = {`${styles.slideWrapper} ${styles.titleSlide}`} id = "TitlePage">
      <div className = {styles.titleContent}>
        <div className = {styles.profileImageGrid}>
          <img src = "https://i.imgur.com/KbqhDin.jpg" alt = "Profile Image" className = {styles.profileImage} />
        </div>
        <div className = {styles.socialLinksGrid}>
          <div className = {styles.socialLinks}>
            <img src = "" alt = "" className = {styles.socialLogo} />
            <p className = {styles.socialText}>LinkedIn</p>
            <img src = "" alt = "" className = {styles.socialLogo} />
            <p className = {styles.socialText}>GitHub</p>
            <img src = "" alt = "" className = {styles.socialLogo} />
            <p className = {styles.socialText}>Instagram</p>
          </div>
        </div>
        <div className = {styles.aboutTextGrid}></div>
      </div>
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