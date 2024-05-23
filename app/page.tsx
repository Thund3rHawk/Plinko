import Game from "@/components/gameCanvas";

export default function Home() {
  return (
    <>
      <div className="container">
          <h1 className="text-center text-5xl">Plinko</h1>
          <Game/>
      </div>
    </>
  );
}
