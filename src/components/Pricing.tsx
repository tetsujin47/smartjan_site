import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { styled } from '@mui/system'

// カスタムスタイルを定義
const HighlightedText = styled('span')({
  color: 'rgba(37, 40, 221, 0.9)', // ここで指定したい色に変更
})

const tiers = [
  {
    title: 'スタンダード',
    price: '0',
    description: [
      'カメラで麻雀牌自動読み取り',
      '詳細な点数計算設定',
      '符計算結果表示',
      '3人及び4人麻雀に対応',
    ],
  },
  {
    title: 'プレミアム',
    subheader: 'おすすめ',
    price: '100',
    description: [
      'カメラで麻雀牌自動読み取り',
      '詳細な点数計算設定',
      '符計算結果表示',
      '3人及び4人麻雀に対応',
      '広告非表示機能',
    ],
    buttonText: 'Start now',
    buttonVariant: 'contained',
  },
]

export default function Pricing() {
  return (
    <Container
      fixed
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          textAlign: 'left',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '24px', sm: '2rem' }, // 文字サイズを大きくする
            textAlign: 'left',
            backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
            paddingRight: '16px', // 右側に余白を追加
            paddingLeft: '16px', // 左側に余白を追加
          }}
        >
          選べる２つの料金プラン
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            fontWeight: 'bold',
            textAlign: 'left', // テキストを中央揃え
            backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
            paddingBottom: '16px', // 下側には余白を追加しない
            paddingRight: '16px', // 右側に余白を追加
            paddingLeft: '16px', // 左側に余白を追加
            '@media (max-width: 600px)': {
              fontSize: '10px',
            },
          }}
        >
          <HighlightedText>There are 2plans to Choosed</HighlightedText>
        </Typography>
        <Typography
          variant="h6"
          color="text.primary"
          sx={{
            textAlign: 'left', // テキストを中央揃え
            fontWeight: { xs: 'normal', sm: 'bold' },
            backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
            paddingBottom: { xs: '12px', sm: '32px' }, // 下側には余白を追加しない
            paddingRight: '16px', // 右側に余白を追加
            paddingLeft: '16px', // 左側に余白を追加
            '@media (max-width: 600px)': {
              fontSize: '12px',
            },
          }}
        >
          スマート雀では2つのプランからご自身に合ったプランをお選びいただけます。
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
            sx={{
              '@media (max-width: 600px)': {
                mx: '12px',
              },
            }} // Adding horizontal margin
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'プレミアム' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'プレミアム' ? 'primary.main' : undefined,
                background:
                  tier.title === 'プレミアム'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: tier.title === 'プレミアム' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'プレミアム' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: tier.title === 'プレミアム' ? 'grey.50' : undefined,
                  }}
                >
                  {tier.title === 'プレミアム' ? (
                    <>
                      <Typography
                        component="h3"
                        variant="h6"
                        sx={{
                          '@media (max-width: 600px)': {
                            fontSize: '16px',
                          },
                        }}
                      >
                        月額&nbsp;
                      </Typography>
                      <Typography
                        component="h3"
                        variant="h2"
                        sx={{
                          '@media (max-width: 600px)': {
                            fontSize: '24px',
                          },
                        }}
                      >
                        {tier.price}円
                      </Typography>
                    </>
                  ) : (
                    <Typography
                      component="h3"
                      variant="h6"
                      sx={{
                        '@media (max-width: 600px)': {
                          fontSize: '16px',
                        },
                      }}
                    >
                      月額無料
                    </Typography>
                  )}
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'プレミアム'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'プレミアム' ? 'grey.200' : undefined,
                        fontWeight:
                          line === '広告非表示機能' ? '900' : 'normal', // 条件に基づいて太字に設定
                        fontSize:
                          line === '広告非表示機能'
                            ? { xs: '20px', sm: '1.5rem' }
                            : { xs: '14px', sm: '1rem' }, // 条件に基づいてフォントサイズを変更
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
