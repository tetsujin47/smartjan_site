import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

// カスタムスタイルを定義
const HighlightedText = styled('span')({
  color: '#0A66C2', // ここで指定したい色に変更
})

const Welcome = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: {
            xs: '27vh', // Mobile devices
            sm: '32vh', // Small screens
            md: '50vh', // Medium screens
            lg: '70vh', // Large screens
            xl: '80vh', // Extra large screens
          },
          backgroundImage: 'url(/titleimg.jpeg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          position: 'relative', // 相対位置指定を有効化
          overflow: 'hidden', // 画像が縦長にならないようにオーバーフローを隠す
          id: 'welcome',
          mt: 10, // 上部にマージンを追加
          // backgroundColor: '#f0f0f0', // 薄暗いグレーの背景色
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)', // 中心に表示するための変換
            color: 'rgba(239, 231, 231, 0.915)', // 文字色を白に近い柔らかい色に設定
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // ぼかし効果を追加
            lineHeight: 1.4, // 行間を設定
            whiteSpace: 'nowrap', // スケールが変更されても勝手に改行されないようにする
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            bottom: {
              xs: '-14%',       // モバイルデバイス（小さい画面）
              sm: '-14%',      // スモールサイズの画面
              md: '-14%',     // ミディアムサイズの画面
              lg: '-12%',     // ラージサイズの画面
              xl: '-14%'   // ラージサイズの画面
            },
            fontSize: {
              xs: '1.2rem', // モバイルデバイス（小さい画面）
              sm: '1.5rem',   // スモールサイズの画面
              md: '2.5rem', // ミディアムサイズの画面
              lg: '3rem',   // ラージサイズの画面
              xl: '3.5rem'   // ラージサイズの画面
            }
          }}
        >
          スマホのカメラで
          <br />
          麻雀点数計算が簡単に
          <br />
          符計算にも便利
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%', // ボックスの幅を指定
          // padding: '10px', // 内側の余白を指定
          backgroundColor: '#f0f0f0', // ボックスの背景色を指定
          display: 'flex',
          gap: '16px', // テキストと画像の間にスペースを追加

          alignItems: 'center', // 垂直方向の中央揃え
          justifyContent: 'center', // 水平方向の中央揃え
          '@media (min-width: 600px)': {
            flexDirection: 'row', // 600px以上の場合にボックス内のアイテムを横に並べる
          }
        }}
      >
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem', // 文字サイズを大きくする
            textAlign: 'center', // テキストを中央揃え
            backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
            '@media (max-width: 600px)': {
      fontSize: '1rem', // スマホサイズの文字サイズ
    },
          }}
        >
          いますぐ<HighlightedText>スマート雀</HighlightedText>をダウンロード{' '}
          <HighlightedText>＞＞</HighlightedText>
        </Typography>
        <div>
          <a
            href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                width: '150px', // 画像の幅を設定
                height: '80px', // 画像の高さを設定
                backgroundImage: 'url(/get_from_appstore.jpeg)', // クリック可能な画像のURL
                backgroundSize: 'contain', // 画像をコンテナ内に収める
                backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
                backgroundPosition: 'center',
              }}
            />
          </a>
        </div>
      </Box>
    </>
  )
}

export default Welcome
