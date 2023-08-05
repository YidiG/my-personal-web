import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import HighlightOfQualification from "@/components/HighlightOfQualifications";
import RateSkills from "@/components/RateSkills";
import ScrollToTop from "@/components/ScrollToTop";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Myself</title>
        <meta name="description" content="Learn more about CodeBucks, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Curiosity Drives Discovery !"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-9 md:order-2 
            md:col-span-9">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="my-4 font-medium">
                Hello World, This is <strong>Yidi Geng</strong>
              </p>
              <p className="indent-8 font-medium ">
                I've had an insatiable curiosity and a fondness for challenges since a young age. 🌟 My formative years were filled with extreme sports like skiing, skating, swimming, and tennis, and I've always enjoyed trying something new. 🏂🏒🏊‍♀️🎾 Additionally, I've been fortunate to travel extensively, experiencing a rich array of cultures and customs, which has made me adaptable and open-minded. 🌎🌍🌏
              </p>
              <p className="indent-8 my-4 font-medium">
               Originally on a path in finance, I found myself drawn more towards the dynamic world of technology, particularly captivated by the potential of leveraging big data. 📈💻 I was enthralled by the idea of using data to propel growth in finance and other fields. To turn this aspiration into reality, I took the initiative to self-learn various computer languages and honed my programming skills. 💪💻 As a Data Analyst at Western Securities, I recognized the significance of efficient algorithms and the logic governing complex systems. 🔍⚙️
              </p>
              <p className="indent-8 font-medium">
                Beyond my technical skills, my personality plays a pivotal role in my journey. I thrive in the face of challenges and fearlessly tackle complex problems. 💪🧠 I firmly believe in continuous learning and view computer science as an ever-evolving puzzle that I eagerly wish to solve. 🧩 My ultimate goal is not only to explore computer science but also to apply abstract computer science principles to real-world business operations. By synthesizing these two domains, I aspire to make a broader and more significant impact on society. 🚀🌟 I'm excited to delve deeper into computer science, explore advanced topics like machine learning, artificial intelligence, and data analytics, and use these tools to tackle real-world challenges. 🤖📊🔍
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
          <RateSkills />
          <HighlightOfQualification />
          <Experience />
          <Education />
          <Skills />
          <ScrollToTop />
        </Layout>
      </main>
    </>
  );
}
