import Link from "next/link"
import DarkModeToggleButton from "./dark-mode-toggle-button"

export default function Header() {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-home'
            >
              <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
              <polyline points='9 22 9 12 15 12 15 22'></polyline>
            </svg>
            <span className='ml-3 text-xl'>장재원의 포트폴리오</span>
          </a>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link href='/' legacyBehavior>
              <a className='mr-5 hover:text-gray-900'>홈</a>
            </Link>

            <Link href='/about' legacyBehavior>
              <a className='mr-5 hover:text-gray-900'>소개</a>
            </Link>

            <Link href='/projects' legacyBehavior>
              <a className='mr-5 hover:text-gray-900'>프로젝트</a>
            </Link>

            <Link href='https://open.kakao.com/o/s9vDMyMf' legacyBehavior>
              <a className='mr-5 hover:text-gray-900'>연락하기</a>
            </Link>
          </nav>
          {/*다크모드 토글 버튼 작업해야함*/}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  )
}
