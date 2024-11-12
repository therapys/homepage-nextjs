export default function Home() {
  return (
    <div>
      <main className="block isolate">
        <h2>hi i&apos;m karl</h2>

        <h3>i write code, take photos, sometimes pentest.</h3>

        <p className="block mr-2">
          i&apos;ve made a start-up,{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="https://strikt.tech/"
          >
            strikt.tech
          </a>
          .
        </p>

        <p>
          i make and run{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="https://minecraft.net/"
            target="_blank"
          >
            block game
          </a>{" "}
          servers. some of them are listed under{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="/projects/"
          >
            projects
          </a>
          .
        </p>

        <p>
          you can check out my doings from{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="/gallery/"
          >
            gallery
          </a>{" "}
          and{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="https://github.com/therapys"
          >
            github
          </a>
          .
        </p>

        <p>
          every once in a while I happen to do something that I want to share
          with people in detail. that&apos;s what{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="/blog/"
          >
            blog
          </a>{" "}
          is for.
        </p>

        {/* <p>
          this site is heavily inspired by{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="https://bearblog.dev/"
          >
            bearblog
          </a>
          . i heavily recommend you check it out.
        </p> */}
      </main>
    </div>
  );
}
