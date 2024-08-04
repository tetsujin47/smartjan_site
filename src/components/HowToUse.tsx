import { Box, Stepper, Step, StepLabel, Typography, Paper } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

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
];


function CustomStepIcon() {
  return <CircleIcon style={{ color: '#0A66C2' }} />
}

function HowToUse() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto', mt: 5 }}>
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
              <img src={images[index]} alt={`${label} image`} style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto 10px auto'}} />
              <Typography variant="body2">{descriptions[index]}</Typography>
            </Paper>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default HowToUse
