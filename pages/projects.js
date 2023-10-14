import Layout from "../components/layout"
import Head from "next/head"
import { TOKEN, DATABASE_ID } from "../config"
import ProjectItem from "../components/projects/project-item"
import Link from "next/link"

export default function Projects({ projects }) {
  console.log(projects)

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen px-3 mb-10'>
        <Head>
          <title>장재원 프로젝트</title>
          <meta name='description' content='오늘도 빡코딩!' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <section class='text-gray-600 body-font'>
          <div class='container px-5 py-24 mx-auto'>
            <div class='flex flex-wrap w-full mb-20'>
              <div class='lg:w-1/2 w-full mb-6 lg:mb-0'>
                <h1 class='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                  포트폴리오
                </h1>
                <div class='h-1 w-20 bg-indigo-500 rounded'></div>
              </div>
            </div>
            <div class='flex flex-wrap -m-4'>
              <div class='xl:w-1/4 md:w-1/2 p-4'>
                <div class='bg-gray-100 p-6 rounded-lg'>
                  <Link
                    href='https://webdemo-jjw.netlify.app/'
                    class='text-lg  text-indigo-500 font-medium title-font mb-1'
                  >
                    1.
                  </Link>
                  <h3 class='tracking-widest text-gray-900 text-xs font-medium title-font mb-4'>
                    만든 날짜 : 23-03-14
                  </h3>
                  <p class='leading-relaxed text-base'>
                    기초적인 HTML,CSS,JS를 활용한 사이트입니다.
                  </p>
                </div>
              </div>
              <div class='xl:w-1/4 md:w-1/2 p-4'>
                <div class='bg-gray-100 p-6 rounded-lg'>
                  <Link
                    href='https://jjw-work-project.netlify.app/'
                    class='text-lg  text-indigo-500 font-medium title-font mb-1'
                  >
                    2.
                  </Link>
                  <h3 class='tracking-widest text-gray-900 text-xs font-medium title-font mb-4'>
                    만든 날짜 : 23-03-25
                  </h3>
                  <p class='leading-relaxed text-base'>
                    기존 사이트보다 좀 더 심화된 사이트입니다.
                  </p>
                </div>
              </div>
              <div class='xl:w-1/4 md:w-1/2 p-4'>
                <div class='bg-gray-100 p-6 rounded-lg'>
                  <Link
                    href='https://elabora.netlify.app/'
                    class='text-lg  text-indigo-500 font-medium title-font mb-1'
                  >
                    3.
                  </Link>
                  <h3 class='tracking-widest text-gray-900 text-xs font-medium title-font mb-4'>
                    만든 날짜 : 23-04-28
                  </h3>
                  <p class='leading-relaxed text-base'>
                    처음 만들어본 개인 포트폴리오 사이트입니다.
                  </p>
                </div>
              </div>
              <div class='xl:w-1/4 md:w-1/2 p-4'>
                <div class='bg-gray-100 p-6 rounded-lg'>
                  <Link
                    href='https://nextjs13-psi-eight.vercel.app/'
                    class='text-lg  text-indigo-500 font-medium title-font mb-1'
                  >
                    4.
                  </Link>
                  <h3 class='tracking-widest text-gray-900 text-xs font-medium title-font mb-4'>
                    만든 날짜 : 23-05-17
                  </h3>
                  <p class='leading-relaxed text-base'>
                    Next.js를 익히기 배우기 위해 만들었던 기초적인 사이트입니다.
                  </p>
                </div>
              </div>
              <div class='xl:w-1/4 md:w-1/2 p-4'>
                <div class='bg-gray-100 p-6 rounded-lg'>
                  <Link
                    href='https://nextjs13testing.vercel.app/'
                    class='text-lg  text-indigo-500 font-medium title-font mb-1'
                  >
                    5.
                  </Link>
                  <h3 class='tracking-widest text-gray-900 text-xs font-medium title-font mb-4'>
                    만든 날짜 : 23-06-25
                  </h3>
                  <p class='leading-relaxed text-base'>
                    Next.js를 활용하여 좀 더 심화과정이 들어간 사이트입니다.
                  </p>
                </div>
              </div>
              <div class='xl:w-1/4 md:w-1/2 p-4'>
                <div class='bg-gray-100 p-6 rounded-lg'>
                  <Link
                    href='https://teamanimalsaverhunt.netlify.app/'
                    class='text-lg  text-indigo-500 font-medium title-font mb-1'
                  >
                    6.
                  </Link>
                  <h3 class='tracking-widest text-gray-900 text-xs font-medium title-font mb-4'>
                    만든 날짜 : 23-07-14
                  </h3>
                  <p class='leading-relaxed text-base'>
                    동물 보호 캠페인 팀프로젝트 중 밀렵 파트를 맡은 부분의
                    사이트입니다.
                  </p>
                </div>
              </div>
              <div class='xl:w-1/4 md:w-1/2 p-4'>
                <div class='bg-gray-100 p-6 rounded-lg'>
                  <Link
                    href='https://cleark-k2kb.vercel.app/'
                    class='text-lg  text-indigo-500 font-medium title-font mb-1'
                  >
                    7.
                  </Link>
                  <h3 class='tracking-widest text-gray-900 text-xs font-medium title-font mb-4'>
                    만든 날짜 : 23-09-16
                  </h3>
                  <p class='leading-relaxed text-base'>
                    Clerk을 활용한 로그인, 회원가입 기능을 구현한 사이트입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

/*
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
  }

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  )

  const projects = await res.json()

  const projectsIds = projects.results.map((aProject) =>(
      
  ))


  
  console.log(`projectsIds : ${projectsIds}`)

  return {
    props: {},
  }
}
*/
