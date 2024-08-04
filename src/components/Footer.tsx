import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      furuya shodai and kimura kazuya&nbsp;
      {new Date().getFullYear()}
    </Typography>
  )
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Typography variant="body2" fontWeight={600}>
              スマート雀について
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Link color="text.secondary" href="#">
              特徴
            </Link>
            <Link color="text.secondary" href="#">
              使い方
            </Link>
            <Link color="text.secondary" href="#">
              料金
            </Link>
            <Link color="text.secondary" href="#">
              よくある質問
            </Link>
            <Link color="text.secondary" href="#">
              お知らせ
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="https://kazukimu.github.io/MahjongPointToolUsage/terms_and_conditions.html">
            利用規約
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="https://kazukimu.github.io/MahjongPointToolUsage/privacy_policy.html">
            プライバシーポリシー
          </Link>
          <Copyright />
        </div>
      </Box>
    </Container>
  )
}
