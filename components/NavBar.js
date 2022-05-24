import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>

      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: red;
        }
        a {
          text-decoration: none;
          font-size: 30px;
          padding: 20px;
          color: aliceblue;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
