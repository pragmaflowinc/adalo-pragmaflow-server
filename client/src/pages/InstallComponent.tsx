import { useState, createElement } from 'react'
import { useGetComponentsQuery, useInstallComponentMutation } from '../generated/graphql'
import { Link as NavLink } from 'react-router-dom'
import { CardHeader, CardContent, Button, TextField, Box, Typography, Link, Card, CardActions, Snackbar } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import * as MaterialIcons from '@mui/icons-material'
import ArticleIcon from '@mui/icons-material/Article';
import { styled } from '@mui/system'
import { UnmaintainedWarning } from "./WarningReposUnmaintained";


const url = "https://pragmaflow.us20.list-manage.com/subscribe/post?u=e0b0c6210f007d12879685ac3&amp;id=01a6a73410";

const StyledLink = styled(NavLink)`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: underline;
    color: #18212D;
}
`

export function InstallComponent() {
  const [accessToken, setAccessToken] = useState('')
  const [open, setOpen] = useState(false);
  const [installationMessage, setInstallationMessage] = useState('');
  const [installComponent] = useInstallComponentMutation()
  const { data: componentData } = useGetComponentsQuery()
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h1">Install a component</Typography>
      <UnmaintainedWarning />
      <Typography>To sign up for adalo using our referal link <Link target="_blank" href="https://www.adalo.com/?via=pragmaflow">Click Here</Link> we would really appreciate it.</Typography><br />
      <Typography>Here you will be able to install components into your organization that are developed by PragmaFlow.</Typography>
      <Typography>To get started you will need an access token so we can install the components on your behalf. To get a token read this: <br />
      <Link target="_blank" href="https://developers.adalo.com/docs/workflow/managing-private-libraries/#sharing-private-libraries-with-other-developers">https://developers.adalo.com/docs/workflow/managing-private-libraries/#sharing-private-libraries-with-other-developers</Link>
      </Typography><br />
    
      <MailListSubForm />

      <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Step 1: Paste your developer token here</Typography>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
          alignItems: 'center',
          display: 'flex'
        }}>
        <TextField variant="standard" value={accessToken} label="Adalo Access Token" onChange={e => {
          const newAccessToken = e.currentTarget.value
          setAccessToken(newAccessToken)
        }}/>
    </Box>
    <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Step 2: Choose which components you would like to install/uninstall from your projects. Once you get a token the install/unistall buttons will appear.</Typography>
    <Box sx={{
      display: 'grid',
      gap: 5,
      gridTemplateColumns: "repeat(auto-fill, 350px)",
      flexWrap: 'wrap'
    }}>
      {
        componentData?.getComponents.map(component => (
          <Card key={component.componentId} sx={{ color: 'black', ":root": { 'display': 'flex' } }}>
            <CardHeader title={component.name} />
            <CardContent>
              <Box sx={{ display: 'grid', justifyItems: 'center' }}>
                {/* @ts-ignore */}
                {MaterialIcons[component.icon] && createElement(MaterialIcons[component.icon], { color: "primary", sx: { fontSize: 196 }})}
                <Typography sx={{ marginTop: 1}} color="background">{component.description}</Typography>
              </Box>
              <div style={{ flexGrow: 1 }}></div>
              <Link href={component.githubUrl} sx={{ margin: 1, fontSize: 32 }}><GitHubIcon /></Link>
              { component.youtubeUrl && <Link href={component.youtubeUrl} sx={{ margin: 1, fontSize: 32 }}><YouTubeIcon /></Link> }
              <StyledLink to={`/component-docs/${component.libraryName}`}><ArticleIcon sx={{ color: 'primary' }} /></StyledLink>
            </CardContent>
            { accessToken && (<CardActions>
              <Button onClick={async (e) => {
                try {
                  const success = await installComponent({
                    variables: {
                      componentId: component.componentId,
                      accessToken
                    }
                  })
                  if (success) {
                    setInstallationMessage("Installation Successful")
                  } else {
                    setInstallationMessage("Installation Failed, possibly wrong token, or you already installed it")
                  }
                } catch {
                  setInstallationMessage("Installation Failed, possibly wrong token, or you already installed it")
                  
                }
                setOpen(true)
                  }}>
                    Install
                  </Button>
            </CardActions> )
            }
          </Card>
        ))
      }
    </Box>
    <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message={installationMessage}
/>
    </div>
  )
}