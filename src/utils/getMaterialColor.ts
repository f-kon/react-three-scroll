import { useMemo } from "react"

const PALLETE = [
  // 濃い紺青（Deep Navy）：
  "#001F3F",
  // 濁ったボルドー（Muted Burgundy）：
  "#8B001C",
  // アンティークゴールド（Antique Gold）：
  "#DAA520",
  // くすんだオリーブ（Dusty Olive）：
  "#6B8E23",
  // モーヴ（Mauve）：
  "#8B668B",
  // 落ち着いたブラウングレー（Subdued Brown-Gray）：
  "#8B8682",
  // シャビーローズ（Shabby Rose）：
  "#D2B48C",
  // アースグリーン（Earth Green）：
  "#556B2F",
  // レトロオレンジ（Retro Orange）：
  "#FF4500",
  // ウォームグレー（Warm Gray）：
  "#808069",
] as const

/**
 * カラーパレットから色を取得します
 */
export const useColor = () => {
  const seed = useMemo(() => Math.floor(Math.random() * PALLETE.length), [])
  return PALLETE[seed]
}