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
            <div class='text-center text-3xl'>
              <h2>본인 간단 자기소개</h2>
            </div>
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
                    <p class='text-base'>Github : dodo4421@naver.com</p>
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

          <div class='container px-5 py-24 mx-auto flex flex-col'>
            <div class='text-center text-3xl'>
              <h2>팀원 및 주제 소개</h2>
            </div>
            <div class='lg:w-4/6 mx-auto'>
              <div class='flex flex-col sm:flex-row mt-10'>
                <div class='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                  <div class='flex flex-col items-center text-center justify-center'>
                    <h2 class='font-medium title-font mt-4 text-gray-900 text-lg'>
                      김명규
                    </h2>
                    <div class='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                    <p class='text-base'>중부대학교 고양캠퍼스</p>
                    <p class='text-base'>정보보호학과 20학번</p>

                    <p class='text-base'>
                      Github : https://github.com/rlaaudrb1104
                    </p>
                    <h2 class='font-medium title-font mt-4 text-gray-900 text-lg'>
                      여승철
                    </h2>
                    <div class='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                    <p class='text-base'>중부대학교 고양캠퍼스</p>
                    <p class='text-base'>정보보호학과 19학번</p>

                    <p class='text-base'>Github : https://github.com/yeo99</p>
                    <h2 class='font-medium title-font mt-4 text-gray-900 text-lg'>
                      전유병
                    </h2>
                    <div class='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
                    <p class='text-base'>중부대학교 고양캠퍼스</p>
                    <p class='text-base'>정보보호학과 20학번</p>

                    <p class='text-base'>
                      Github : https://github.com/jeonyubyeong
                    </p>
                  </div>
                </div>

                <div class='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                  <h3 class='text-center leading-relaxed text-lg mb-4'>
                    AMA 서비스 & 게시판
                  </h3>
                  <div class='my-11'>
                    <p class='mb-4'>1. 구현 필요 기능 목록 사용자 로그인</p>
                    <p class='mb-4'>
                      2. 로그인한 사용자가 링크에 제목달아서 배포 ex https://~~~
                    </p>

                    <p class='mb-4'>
                      3. 마이페이지에서 자기가 뿌린 제목, 링크 확인 가능
                    </p>
                    <p class='mb-4'>
                      4. 링크로 접속한 사람은 익명으로 댓글 작성 그 댓글에
                      호스트 or 익명이 답글 가능
                    </p>
                    <p class='mb-4'>
                      5. 댓글 달 사람들 본인이 댓글 달 때 이름, 비번 설정 해서
                      댓글 달기
                    </p>
                    <p class='mb-4'>
                      6. 댓글 수정, 삭제 기능 구현, 비번은 댓글마다 할당
                    </p>
                    <p class='mb-4'> 7. 배포한 링크에 사용자가 글 작성 가능</p>
                  </div>
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
