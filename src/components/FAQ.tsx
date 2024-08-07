import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button } from '@mui/material'

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  // カスタムスタイルを定義
  const HighlightedText = styled('span')({
    color: 'rgba(37, 40, 221, 0.9)', // ここで指定したい色に変更
  })

  return (
    <Container
      fixed
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        // position: 'relative',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        // sx={{
        //   width: { sm: '100%', md: '60%' },
        //   textAlign: { sm: 'left', md: 'center' },
        // }}
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '20px', sm: '2rem' }, // 文字サイズを大きくする
          textAlign: 'left', // テキストを中央揃え
          backgroundRepeat: 'no-repeat', // 画像の繰り返しを防ぐ
          // paddingTop: '60px', // 上側に余白を追加
          paddingRight: '16px', // 右側に余白を追加
          paddingBottom: '0px', // 下側には余白を追加しない
          paddingLeft: '16px', // 左側に余白を追加
        }}
      >
        スマート雀に関するよくある質問
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
          paddingBottom: '24px', // 下側には余白を追加しない
          paddingLeft: '16px', // 左側に余白を追加
          '@media (max-width: 600px)': {
            fontSize: '10px',
          },
        }}
      >
        <HighlightedText>FAQ</HighlightedText>
      </Typography>
      <Box sx={{ width: '100%', paddingBottom: '24px' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{
                '@media (max-width: 600px)': {
                  fontSize: '12px',
                }, // 文字サイズを大きくする
              }}
            >
              サブスクリプションの解約方法を教えてください。
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: { sm: '100%', md: '70%' },
                '@media (max-width: 600px)': {
                  fontSize: '12px',
                }, // 文字サイズを大きくする
              }}
            >
              定期購読を解約するには、iOSの設定アプリを開き、[サブスクリプション]をタップしてから、このアプリのサブスクリプションを選択して解約してください。解約手続きが完了するまで、次回の課金が行われることがあります。詳細については
              <Link
                href="https://support.apple.com/ja-jp/118428"
                target="_blank"
                rel="noopener noreferrer"
              >
                Appleのサポート
              </Link>
              をご確認ください。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{
                  '@media (max-width: 600px)': {
                    fontSize: '12px',
                  }, // 文字サイズを大きくする
              }}
            >
              チーポンカンの設定方法が分からない。
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: { sm: '100%', md: '70%' },
                fontSize: {
                  '@media (max-width: 600px)': {
                    fontSize: '12px',
                  }, // 文字サイズを大きくする
                },
              }}
            >
              鳴いた牌と手牌を入力後に鳴きたい牌をタップすることで、鳴いたり、牌の変更や削除を行うことが可能です。
              <br />
              チーをする場合は最も小さい牌を選択すると、チーを設定することができます。
              <br />
              また、喰い下がりは自動で計算に含まれる仕様としております。
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box
        sx={{
          width: '100%',
          paddingBottom: '24px',
          display: 'flex', // フレックスボックスにする
          flexDirection: 'column', // 垂直方向に並べる
          justifyContent: 'center', // 水平方向の中央揃え
          alignItems: 'center', // 垂直方向の中央揃え
          backgroundColor: '#f0f0f0', // 薄暗いグレーの背景色
          margin: '16px 0', // 上下の外側余白
          borderRadius: '8px', // 少し丸みを追加
        }}
      >
        <Typography
          variant="body2"
          gutterBottom
          sx={{ maxWidth: { sm: '100%', md: '70%', paddingTop: '16px' } }}
        >
          上記で解決しない場合
        </Typography>
        <Button
          color="primary"
          variant="contained"
          component="a"
          href="https://docs.google.com/forms/d/1xYx0kpBq9lsxbHJO6IHsgx3rfo6_BOleRS_ODpC38M4/"
          target="_blank"
          sx={{ width: '60%', maxWidth: '400px', borderRadius: '999px' }}
        >
          お問合せ
        </Button>
      </Box>
    </Container>
  )
}
