import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [showExplanation, setShowExplanation] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const [choice, setChoice] = useState(null)

  const handleChoice = (selected) => {
    setChoice(selected)
  }

  return (
    <>
      <Head>
        <title>哈基米南北绿豆 - Hakimi North-South Mung Bean</title>
        <meta name="description" content="探索哈基米南北绿豆的神秘世界" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header className="header">
          <h1 className="title">🫘 哈基米南北绿豆 🫘</h1>
          <p className="subtitle">Hakimi North-South Mung Bean</p>
        </header>

        <main className="main">
          <div className="card intro-card">
            <h2>什么是"哈基米"？</h2>
            <p>
              "哈基米"(Hakimi) 是一个网络流行梗，源自一个关于选择的测试。
              这个梗通常用来测试对方的态度和选择倾向。
            </p>
            <button
              className="button"
              onClick={() => setShowExplanation(!showExplanation)}
            >
              {showExplanation ? '隐藏详情' : '了解更多'}
            </button>
          </div>

          {showExplanation && (
            <div className="card explanation-card">
              <h3>📖 背景故事</h3>
              <p>
                "哈基米"这个梗的完整表达通常是："哈基米，南北绿豆"。
                它源自网络上的一个选择测试，用来询问对方的偏好和态度。
              </p>
              <ul>
                <li><strong>南豆</strong> (南方绿豆) - 代表一种选择</li>
                <li><strong>北豆</strong> (北方绿豆) - 代表另一种选择</li>
              </ul>
              <p>
                这个梗后来演变成了一种有趣的互动方式，用来测试关系和了解对方的想法。
              </p>
            </div>
          )}

          <div className="card game-card">
            <h2>🎮 互动体验</h2>
            <p>现在轮到你做选择了！</p>
            <button
              className="button primary"
              onClick={() => setShowGame(!showGame)}
            >
              {showGame ? '重新开始' : '开始测试'}
            </button>
          </div>

          {showGame && (
            <div className="card choice-card">
              <h3>你会选择哪一个？</h3>
              <div className="choices">
                <button
                  className={`choice-button north ${choice === 'north' ? 'selected' : ''}`}
                  onClick={() => handleChoice('north')}
                >
                  <div className="bean-icon">🫘</div>
                  <h4>北方绿豆</h4>
                  <p>代表：理性、稳重、传统</p>
                </button>
                <button
                  className={`choice-button south ${choice === 'south' ? 'selected' : ''}`}
                  onClick={() => handleChoice('south')}
                >
                  <div className="bean-icon">🌱</div>
                  <h4>南方绿豆</h4>
                  <p>代表：感性、灵活、创新</p>
                </button>
              </div>

              {choice && (
                <div className="result">
                  <h4>你选择了：{choice === 'north' ? '北方绿豆' : '南方绿豆'} ✨</h4>
                  <p>
                    {choice === 'north'
                      ? '你是一个注重稳定和传统的人，喜欢深思熟虑后做决定。'
                      : '你是一个充满活力和创造力的人，勇于尝试新事物。'}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="card meme-card">
            <h2>🎭 文化意义</h2>
            <div className="meme-content">
              <p>
                "哈基米南北绿豆"作为一个网络梗，体现了现代中文互联网文化的几个特点：
              </p>
              <div className="features">
                <div className="feature">
                  <span className="emoji">💬</span>
                  <h4>语言创造力</h4>
                  <p>结合了音译和本土元素</p>
                </div>
                <div className="feature">
                  <span className="emoji">🤝</span>
                  <h4>社交互动</h4>
                  <p>用于测试和加深关系</p>
                </div>
                <div className="feature">
                  <span className="emoji">😄</span>
                  <h4>幽默表达</h4>
                  <p>轻松有趣的沟通方式</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>一个关于网络文化和选择的趣味探索 🌟</p>
        </footer>
      </div>
    </>
  )
}
