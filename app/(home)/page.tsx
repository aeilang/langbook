import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col text-center">
      <h1 className="text-2xl font-bold mt-20 mb-20">Welcome to LangBook!</h1>
      <div className="flex items-center justify-center space-x-10">
        <Link href={"/docs/golang"}>
          <div>
            <div className="">
              <img
                src="images/go.webp"
                alt="go book"
                height={800}
                width={150}
              />
            </div>

            <h1>Go基础入门</h1>
          </div>
        </Link>

        <Link href={"/docs/office"}>
          <div className="">
            <div className="">
              <img
                src="images/go.webp"
                alt="go book"
                height={800}
                width={150}
              />
            </div>

            <h1 className="">并发编程</h1>
          </div>
        </Link>

        <Link href={"/help"}>
          <div className="">
            <div className="">
              <img
                src="images/go.webp"
                alt="go book"
                height={800}
                width={150}
              />
            </div>

            <h1 className="">抑郁症测试</h1>
          </div>
        </Link>
      </div>
    </main>
  );
}
