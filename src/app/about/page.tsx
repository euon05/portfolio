'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-start bg-blue-100 text-gray-800 px-6 py-12 space-y-6">
      <motion.h2
        className="text-4xl font-bold mb-4 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👋 안녕하세요 오은채 입니다!
      </motion.h2>

      <motion.div
        className="flex flex-col space-y-4 w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">MBTI</h3>
          <p>INTJ</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">취미</h3>
          <p>게임 방송 보기</p>
          <p>OTT 보기</p>
          <p>노래 듣기</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">관심사</h3>
          <p>아직 꿈 찾는 중...</p>
          <p>항공 보안에 많은 관심을 갖고 있습니다!</p>
        </div>
      </motion.div>

      <Link
        href="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-full transition-transform transform hover:scale-105"
      >
        ⬅ 홈으로 돌아가기
      </Link>
    </main>
  )
}
