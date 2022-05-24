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
          background-color: rgb(0, 0, 0);
          height: 50px;
          text-align: justify;
        }
        a {
          text-decoration: none;
          font-size: 20px;

          padding: 30px;

          color: aliceblue;
        }
        .active {
          color: blue;
        }
      `}</style>
    </nav>
  );
}
