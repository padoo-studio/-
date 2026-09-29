import { useState } from 'react'
import './App.css'

function Puppy({ happy }) {
  return (
    <svg className={`puppy ${happy ? 'is-happy' : ''}`} viewBox="0 0 600 480" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="puppy-title">
      <title id="puppy-title">동그란 얼굴과 늘어진 귀를 가진 귀여운 강아지</title>
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path className="ground" d="M122 419H478" strokeWidth="1.5" />
        <g className="tail"><path d="M391 348C456 363 464 303 439 295C415 286 423 326 395 320" fill="white" /><path d="M460 283L469 271M477 303L491 299" strokeWidth="2" /></g>
        <path d="M236 284C219 313 211 349 210 385C188 385 174 403 181 415C187 427 231 425 254 418C278 426 323 427 347 418C369 426 411 427 416 414C423 398 403 384 386 385C386 341 374 306 359 284" fill="white" />
        <path d="M254 337L249 407Q242 421 227 419M346 337L351 407Q358 421 373 419M215 408V419M199 407V419M385 408V419M401 407V419" />
        <path d="M237 300Q301 321 362 299L358 314Q301 337 242 315Z" fill="white" />
        <circle cx="301" cy="326" r="12" fill="white" /><path d="M298 326H304M301 323V329" strokeWidth="2" />
        <g className="head">
          <path d="M225 143C196 112 162 132 154 166C144 204 131 251 152 265C177 282 212 238 224 215M376 143C405 112 439 132 447 166C457 204 470 251 449 265C424 282 389 238 377 215" fill="white" />
          <path d="M205 208C205 147 238 113 280 110Q291 92 308 108Q328 95 334 115C377 124 396 161 396 207C416 241 397 288 353 301Q301 319 247 301C203 288 184 246 205 208Z" fill="white" />
          <path d="M181 157Q166 184 164 218M420 157Q435 184 437 218" strokeWidth="2" />
          {happy ? <><path d="M246 216Q257 202 268 216M334 216Q345 202 356 216" /></> : <><ellipse cx="256" cy="214" rx="4.5" ry="7" fill="currentColor" stroke="none" /><ellipse cx="346" cy="214" rx="4.5" ry="7" fill="currentColor" stroke="none" /></>}
          <path d="M291 237Q301 232 311 237Q310 247 301 250Q292 247 291 237Z" fill="currentColor" />
          <path d="M301 250V257Q289 273 277 259M301 257Q313 273 325 259" />
          <path d="M290 268V279Q301 294 312 279V268M301 277V286" fill="white" />
          <path d="M234 240H245M357 240H368" strokeWidth="2" />
        </g>
        <g className="heart"><path d="M428 132C414 122 403 111 410 103C417 94 427 100 428 107C432 94 446 97 447 106C449 116 437 126 428 132Z" fill="white" strokeWidth="2.5" /></g>
        <path d="M134 284V300M126 292H142M462 205V219M455 212H469" strokeWidth="2" />
        <circle cx="180" cy="100" r="3" strokeWidth="2" /><circle cx="462" cy="366" r="3" strokeWidth="2" />
      </g>
    </svg>
  )
}

function App() {
  const [happy, setHappy] = useState(false)
  return (
    <div className="page">
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Little Paws 홈"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.8"><path d="M10 19Q16 11 22 19C30 27 22 30 16 27C10 30 2 27 10 19Z"/><ellipse cx="7" cy="13" rx="3" ry="4" transform="rotate(-25 7 13)"/><ellipse cx="13" cy="6" rx="2.7" ry="4"/><ellipse cx="21" cy="7" rx="2.7" ry="4" transform="rotate(15 21 7)"/><ellipse cx="27" cy="14" rx="2.7" ry="4" transform="rotate(25 27 14)"/></g></svg>little paws<span>®</span></a>
        <span className="header-note">작은 발걸음, 커다란 행복.</span>
        <span className="edition">EST. 2026</span>
      </header>
      <main>
        <div className="eyebrow"><span /> A LITTLE FRIEND, A LOT OF LOVE</div>
        <h1>행복은 가끔,<br />네 발로 찾아와요.</h1>
        <p className="intro">말없이 곁에 있어도 좋은 친구.<br className="mobile-break" /> 오늘의 작은 행복을 만나보세요.</p>
        <div className="illustration">
          <span className="hand-note">say hello!<svg viewBox="0 0 75 40" fill="none" aria-hidden="true"><path d="M4 4C9 30 38 30 65 18M53 15L66 18L61 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          <Puppy happy={happy} />
          <span className="drawing-caption">100% GOOD DOG.</span>
        </div>
        <button className="pet-button" onClick={() => setHappy(!happy)} aria-pressed={happy}>{happy ? '한 번 더 쓰다듬기' : '살짝 쓰다듬어 주세요'}<span aria-hidden="true">{happy ? '♡' : '↗'}</span></button>
        <p className="response" aria-live="polite">{happy ? '꼬리로 대답하는 중. 좋아한다는 뜻이에요!' : '작은 인사 하나면, 우리는 벌써 친구.'}</p>
      </main>
      <footer><span>LESS NOISE. MORE WAGS.</span><span className="footer-center">흑과 백 사이, 가득한 사랑.</span><span>MADE WITH ♡</span></footer>
    </div>
  )
}
export default App
