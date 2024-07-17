export default function Footer() {
  const styles = {
    footer: "p-5 mt-auto flex gap-5 shadow-my rounded items-center justify-center",
  }
  return (
  <footer className={styles.footer}>
    <div>v.0.0.1</div>
    <div>Some Nav</div>
    <div>© RaykeSS</div>
  </footer>
  );
}
