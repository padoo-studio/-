import { useState } from 'react'
import './App.css'

function Jaguar({ happy }) {
  const spots = [[245,174,10],[354,174,10],[301,151,9],[222,234,8],[379,234,8],[229,347,8],[373,349,8],[278,365,9],[321,388,9]]
  return (
    <svg className={`jaguar ${happy ? 'is-happy' : ''}`} viewBox="0 0 600 480" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="jaguar-title">
      <title id="jaguar-title">둥근 귀와 장미 모양 얼룩무늬, 긴 꼬리를 가진 귀여운 아기 재규어</title>
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M122 419H478" strokeWidth="1.5" />
        <g className="tail">
          <path d="M380 374C433 399 492 366 483 314C479 289 452 282 447 301C442 319 463 328 459 348C455 369 422 368 389 349" fill="white" />
          <path d="M454 327L478 319M459 343L483 337M450 360L470 359M431 368L439 382" strokeWidth="3" />
        </g>
        <path d="M236 284C219 313 211 349 210 385C188 385 174 403 181 415C187 427 231 425 254 418C278 426 323 427 347 418C369 426 411 427 416 414C423 398 403 384 386 385C386 341 374 306 359 284" fill="white" />
        <path d="M254 337L249 407Q242 421 227 419M346 337L351 407Q358 421 373 419M215 408V419M199 407V419M385 408V419M401 407V419" />
        <path d="M281 324Q300 337 320 324" strokeWidth="2.5" />
        <g className="head">
          <path d="M216 165C180 151 176 111 198 101C220 91 243 111 246 134M356 134C359 111 382 91 404 101C426 111 422 151 386 165" fill="white" />
          <path d="M211 141C198 132 194 117 205 115C215 113 224 123 226 131M390 141C403 132 407 117 396 115C386 113 377 123 375 131" strokeWidth="2.5" />
          <path d="M202 207C202 147 243 118 300 118C358 118 400 147 400 207C418 243 398 285 357 301Q301 322 245 301C204 285 184 244 202 207Z" fill="white" />
          {happy ? <path d="M246 216Q257 202 268 216M334 216Q345 202 356 216" /> : <><ellipse cx="256" cy="214" rx="4.5" ry="7" fill="currentColor" stroke="none" /><ellipse cx="346" cy="214" rx="4.5" ry="7" fill="currentColor" stroke="none" /></>}
          <path d="M300 242C273 223 258 240 265 260C270 280 291 284 300 271C311 284 332 280 337 260C344 240 327 223 300 242Z" strokeWidth="2.5" />
          <path d="M289 240Q300 234 312 240L301 251Z" fill="currentColor" />
          <path d="M301 250V257Q289 270 280 258M301 257Q313 270 322 258" />
          <path d="M289 278Q301 290 313 278M255 250L232 246M253 261L228 264M348 250L371 246M350 261L375 264" strokeWidth="2.5" />
          <g fill="currentColor" stroke="none"><circle cx="277" cy="248" r="1.7"/><circle cx="274" cy="255" r="1.7"/><circle cx="325" cy="248" r="1.7"/><circle cx="328" cy="255" r="1.7"/><circle cx="282" cy="178" r="2.5"/><circle cx="320" cy="178" r="2.5"/></g>
        </g>
        <g className="rosettes" strokeWidth="2.5">
          {spots.map(([x,y,r]) => <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}><path d={`M${-r} 0C${-r-3} ${-r} -3 ${-r-3} 0 ${-r}C${r} ${-r-4} ${r+4} -3 ${r} 1C${r+3} ${r} 3 ${r+3} 0 ${r}C${-r} ${r+3} ${-r-3} 5 ${-r} 0Z`} /><circle r="1.8" fill="currentColor" stroke="none" /></g>)}
        </g>
        <g className="heart"><path d="M451 157C437 147 426 136 433 128C440 119 450 125 451 132C455 119 469 122 470 131C472 141 460 151 451 157Z" fill="white" strokeWidth="2.5" /></g>
        <path d="M134 284V300M126 292H142M463 225V239M456 232H470" strokeWidth="2" />
        <circle cx="162" cy="141" r="3" strokeWidth="2" /><circle cx="486" cy="397" r="3" strokeWidth="2" />
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
          <Jaguar happy={happy} />
          <span className="drawing-caption">100% LITTLE JAGUAR.</span>
        </div>
        <button className="pet-button" onClick={() => setHappy(!happy)} aria-pressed={happy}>{happy ? '한 번 더 쓰다듬기' : '살짝 쓰다듬어 주세요'}<span aria-hidden="true">{happy ? '♡' : '↗'}</span></button>
        <p className="response" aria-live="polite">{happy ? '살며시 눈을 감았어요. 마음에 들었나 봐요!' : '작은 인사 하나면, 우리는 벌써 친구.'}</p>
      </main>
      <footer><span>LITTLE PAWS. WILD HEART.</span><span className="footer-center">흑과 백 사이, 가득한 사랑.</span><span>MADE WITH ♡</span></footer>
    </div>
  )
}
export default App
