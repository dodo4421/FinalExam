import Animation from "@/components/home/animation"
import Layout from "../components/layout"
import Head from "next/head"
import Image from "next/image"

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
          <div class='container px-5 py-24 mx-auto flex flex-col'>
            <div class='lg:w-4/6 mx-auto'>
              <div class='flex flex-col sm:flex-row mt-10'>
                <div class='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                  <div class='flex flex-col items-center text-center justify-center'>
                    <h2 class='font-medium title-font mt-4 text-gray-900 text-lg'>
                      장재원
                    </h2>
                    <div class='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                    <p class='text-base'>중부대학교 고양캠퍼스</p>
                    <p class='text-base'>정보보호학과 20학번</p>
                    <p class='text-base'>2001년생</p>
                    <p class='text-base'>Email : dodo4421@naver.com</p>
                  </div>
                </div>
                <div class='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                  <p class='leading-relaxed text-lg mb-4'>
                    안녕하세요.저는 중부대학교 고양캠퍼스 정보보호학과 20학번
                    장재원입니다. 이번 시간에는 전공과목 중
                    웹서버보안프로그래밍의 중간과제로 개인 포트폴리오 웹사이트
                    제작 실습을 진행중입니다. Next.js 기반으로 만드는
                    웹사이트인데 어렵지만 열심히 배워가며 해보려고합니다.
                    파이팅!
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
