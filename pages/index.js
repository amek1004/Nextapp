import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="m">Hello world</div>
      <style jsx>{`
        .m {
          font-size: 100px;
          color: skyblue;
          padding: 100px;
          text-shadow: 10px;
          background-color: black;
        }
      `}</style>
    </div>
  );
}
