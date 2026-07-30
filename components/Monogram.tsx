/**
 * H814 모노그램. 점토 면 위 아이보리 글자.
 * About 아바타 · 헤더 마크 · 소셜 배너가 모두 이 하나를 쓴다.
 * 외부 이미지 파일에 의존하지 않으므로 다크모드가 자동으로 따라온다.
 */
const Monogram = ({
  size = 192,
  compact = false,
  className = '',
}: {
  size?: number
  compact?: boolean
  className?: string
}) => {
  const label = compact ? 'H' : 'H814'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Hyo814"
      className={className}
    >
      <rect width="64" height="64" rx="3" className="fill-clayfield" />
      <text
        x="32"
        y="32"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-gowun-batang), Georgia, serif"
        fontSize={compact ? 34 : 21}
        fontWeight={700}
        letterSpacing={compact ? 0 : 0.5}
        fill="#F7F3EC"
      >
        {label}
      </text>
      {/* 측정 기록의 밑줄. 이 사이트가 하는 일의 표식이다. */}
      <rect
        x={compact ? 24 : 16}
        y="45"
        width={compact ? 16 : 32}
        height="1.5"
        fill="#F7F3EC"
        opacity="0.45"
      />
    </svg>
  )
}

export default Monogram
