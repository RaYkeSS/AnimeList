import FooterNav from "./FooterNav";
import logo from "./img/logo.png";

export default function Footer() {
  const styles = {
    footer:
      "py-2 px-5 mt-auto shadow-my rounded flex gap-5 items-center justify-between",
    logoWrapper: "flex items-center",
    logo: "max-w-16",
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span>© RaykeSS</span>
      </div>
      <FooterNav />
      <div>v.0.1.1</div>
    </footer>
  );
}
