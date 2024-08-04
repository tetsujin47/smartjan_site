import {
  Box,
  Typography,
  Container,
  Paper,
  StepLabel,
  Stepper,
  Step,
} from '@mui/material'
import { styled } from '@mui/system'
import CircleIcon from '@mui/icons-material/Circle'

// カスタムスタイルを定義
const HighlightedText = styled('span')({
  color: 'rgba(37, 40, 221, 0.9)', // ここで指定したい色に変更
})

const steps = ['STEP1', 'STEP2', 'STEP3']

const descriptions = [
  '「カメラ」アイコンをタップしてカメラを起動します。',
  'あがり牌をカメラで読み込みます。',
  '必要に応じて役設定(リーチ役やチー・ポン・カンなど)を行うと点数結果が表示されます。',
]

const images = [
  'STEP1.jpeg', // STEP1の画像
  'STEP2.jpeg', // STEP2の画像
  'STEP3.jpeg', // STEP3の画像
]

function CustomStepIcon() {
  return <CircleIcon style={{ color: '#0A66C2' }} />
}

const Features = () => {
  return (
    <>
      <Container
        fixed
        id="features"
        sx={{ pt: { xs: 4, sm: 12 }, pb: { xs: 4, sm: 12 } }}
      >
        <Typography
          variant="h1"
          color="text.primary"
          sx={{
            fontWeight: 'bold',
            fontSize: '2rem', // 文字サイズを大きくする
            textAlign: 'left', // テキストを中央揃え
            backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
            // paddingTop: '40px', // 上側に余白を追加
            paddingRight: '16px', // 右側に余白を追加
            // paddingBottom: '0px', // 下側には余白を追加しない
            paddingLeft: '16px', // 左側に余白を追加
          }}
        >
          スマート雀とは？
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            fontWeight: 'bold',
            textAlign: 'left', // テキストを中央揃え
            backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
            paddingTop: '0px', // 上側に余白を追加
            paddingRight: '16px', // 右側に余白を追加
            paddingBottom: '16px', // 下側には余白を追加
            paddingLeft: '16px', // 左側に余白を追加
          }}
        >
          <HighlightedText>What is Smart Jan</HighlightedText>
        </Typography>
        <Typography
          variant="h6"
          color="text.primary"
          sx={{
            fontWeight: 'bold',
            textAlign: 'left', // テキストを中央揃え
            // fontSize: '1.5rem', // 文字サイズを大きくする
            backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
            paddingTop: '0px', // 上側に余白を追加
            paddingRight: '16px', // 右側に余白を追加
            paddingBottom: { xs: 0, sm: 4 }, // 下側には余白を追加
            paddingLeft: '16px', // 左側に余白を追加
          }}
        >
          スマート雀はカメラで牌を瞬時に読み取り、簡単な操作で麻雀点数計算できるアプリです。
          <br />
          また、点数計算結果とともに役名や飜・符が表示され計算の学習に役立てることができます。
        </Typography>
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            margin: 'auto',
            mt: 5,
          }}
        >
          <Stepper activeStep={-1} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label} completed>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {label}
                  </Typography>
                </StepLabel>
                <Paper
                  elevation={3}
                  sx={{ padding: 2, marginTop: 1, marginBottom: 2 }}
                >
                  <img
                    src={images[index]}
                    alt={`${label} image`}
                    style={{
                      width: '80%',
                      height: 'auto',
                      display: 'block',
                      margin: '0 auto 10px auto',
                    }}
                  />
                  <Typography variant="body2">{descriptions[index]}</Typography>
                </Paper>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </>
  )
}

export default Features
