import TopNav from "./topnav";
import styles from "./footer.module.css"


const Footer = () => {
    return (
        <main className={styles.footer}>
            <div>
                <p>Baker House · 362 Memorial Dr, Cambridge MA 02139 </p>
            <TopNav />
                <p>For website concerns, please contact Baker Webmaster at:</p>
                <p>baker-webmaster@mit.edu</p>
                <p>Pictures Taken By: Maija Holma/Alvar Aalto Foundation</p>
            </div>
        </main>
    );
}

export default Footer;