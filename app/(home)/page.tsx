import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col text-center">
      <h1 className="text-2xl font-bold mt-20 mb-20">Welcome to LangBook!</h1>
      <div className="flex flex-wrap items-center justify-center space-x-10">
        <Link href={"/docs/base"}>
          <div>
            <Image
              src={"./gobook/base.svg"}
              alt="Go基础入门"
              width={300}
              height={700}
            />

            <h1>基础入门篇</h1>
          </div>
        </Link>

        <Link href={"/docs/conc"}>
          <div className="">
            <Image
              src={"./gobook/conc.svg"}
              alt="并发编程篇"
              width={300}
              height={700}
            />

            <h1 className="">并发编程篇</h1>
          </div>
        </Link>

        <Link href={"/docs/web"}>
          <div className="">
            <Image
              src={"./gobook/goweb.svg"}
              alt="web"
              width={300}
              height={700}
            />

            <h1 className="">Web 开发</h1>
          </div>
        </Link>

        <Link href={"/docs/action"}>
          <div className="">
            <Image
              src={"./gobook/goaction.svg"}
              alt="action"
              width={300}
              height={700}
            />

            <h1 className="">实战项目篇</h1>
          </div>
        </Link>

        <Link href={"/docs/in"}>
          <div className="">
            <Image
              src={"./gobook/goin.svg"}
              alt="标准库"
              width={300}
              height={700}
            />

            <h1 className="">优雅的标准库</h1>
          </div>
        </Link>

        <Link href={"/docs/out"}>
          <div className="">
            <Image
              src={"./gobook/goout.svg"}
              alt="三方库"
              width={300}
              height={700}
            />

            <h1 className="">丰富的三方库</h1>
          </div>
        </Link>

        <Link href={"/help"}>
          <div className="">
            <Image
              src={"./gobook/sad.svg"}
              alt="sad"
              width={300}
              height={700}
            />

            <h1 className="">抑郁症测试</h1>
          </div>
        </Link>
      </div>
    </main>
  );
}
