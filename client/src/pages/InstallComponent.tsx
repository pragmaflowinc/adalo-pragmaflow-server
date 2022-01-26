import { useState } from 'react'
import { useInstallComponentMutation } from '../generated/graphql'
import { FormControl, CardHeader, CardContent, Button, TextField, Box, Typography, Link, Card, CardActions, Snackbar } from '@mui/material'
import LocationIcon from '@mui/icons-material/LocationOn'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import ContactsIcon from '@mui/icons-material/Contacts';
import NfcIcon from '@mui/icons-material/Nfc';
import StorageIcon from '@mui/icons-material/Storage';
import HttpsIcon from '@mui/icons-material/Https';
import CachedIcon from '@mui/icons-material/Cached';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import TimerIcon from '@mui/icons-material/Timer';
import DirectionsIcon from '@mui/icons-material/Directions';
import LinkIcon from '@mui/icons-material/Link';
import MailchimpSubscribe from "react-mailchimp-subscribe" 
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import CreateIcon from '@mui/icons-material/Create';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import HttpIcon from '@mui/icons-material/Http';
import PaidIcon from '@mui/icons-material/Paid';
import BarChartIcon from '@mui/icons-material/BarChart';
import MicIcon from '@mui/icons-material/Mic';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ChatIcon from '@mui/icons-material/Chat';
import UploadIcon from '@mui/icons-material/Upload';

const url = "https://pragmaflow.us20.list-manage.com/subscribe/post?u=e0b0c6210f007d12879685ac3&amp;id=01a6a73410";


const InstallableComponents = [{
  id: "c350cf63-8142-49a3-b578-3fa2159cafe7",
  name: "Geolocation",
  libraryName: "pf-geo-location-steven",
  description: "This component allows reading the current location information of the device your app is running on.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-geolocation",
  youtubeUrl: "",
  icon: <LocationIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "8d471b8f-b04c-4405-aa65-88b53479a52b",
  name: "Biometric Login",
  libraryName: "pragmaflow-biometrics",
  description: "This component allows users to login to their Adalo account using biometrics on supported devices.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-biometric-login",
  youtubeUrl: "",
  icon: <FingerprintIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "0b6ea620-0419-4eb3-baad-f13d5af5a605",
  name: "Contact List",
  libraryName: "phone-contacts",
  description: "This component allows users to access their phone contact list within an Adalo app.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-phone-contacts",
  youtubeUrl: "",
  icon: <ContactsIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "944b88fc-6630-4467-8622-ff34b6ef42df",
  name: "Nfc",
  libraryName: "adalo-nfc",
  description: "This component allows users to have the ability to read Nfc tag ids.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-nfc",
  youtubeUrl: "",
  icon: <NfcIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "e5c223ff-3cd8-4e4f-b2c0-293122969997",
  name: "Local Storage",
  libraryName: "adalo-local-storage",
  description: "This component allows app designers to persist data on the phone via local storage.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-local-storage",
  youtubeUrl: "",
  icon: <StorageIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "fb55da5a-76a5-435b-bde8-a4f6a673e4ab",
  name: "Encryption Toolkit",
  libraryName: "pf-encryption-toolkit",
  description: "This suite of components facilitate encypting and decrypting data being saved in the Adalo database.",
  githubrl: "https://github.com/pragmaflowinc/adalo-encrypted-data",
  youtubeUrl: "",
  icon: <HttpsIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "5c55a27d-d88d-45c8-b321-0b263637134f",
  name: "Data Loader",
  libraryName: "pf-adalo-data-preloader",
  description: "This is a utility that will allow you to preload the data for your screens.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-data-preloader",
  youtubeUrl: "",
  icon: <CachedIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "9bce3f23-9a32-4f70-b7db-698fbd0085c8",
  name: "Ably WebSocket",
  libraryName: "adalo-ably",
  description: "This allows you to create websocket connections between apps for real-time data sharing.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-ably-sockets",
  youtubeUrl: "",
  icon: <CompareArrowsIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "7d081ba1-7c10-4ac1-87de-9b0b8b2414dc",
  name: "Timer Action",
  libraryName: "adalo-timer-action",
  description: "This allows you to create repeating actions using a timer.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-timer-action",
  youtubeUrl: "",
  icon: <TimerIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "3d55348d-92ef-4eeb-b6ee-c469b567e257",
  name: "Driving Directions",
  libraryName: "driving-direction",
  description: "This is a map that lets you build driving directions between two destinations.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-driving-direction",
  youtubeUrl: "",
  icon: <DirectionsIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "fa9c7d1e-34e2-4549-873c-92f124dffe76",
  name: "Deeper Links",
  libraryName: "adalo-deep-links",
  description: "This will allow you to add deep links into your native apps (not PWA).",
  githubUrl: "https://github.com/pragmaflowinc/adalo-deepish-linking",
  youtubeUrl: "",
  icon: <LinkIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "2d34d4cc-54d0-47a1-b87e-e90ff3ac838d",
  name: "Localization",
  libraryName: "adalo-localize",
  description: "This reads the localization information (language preference, country, on metric system, etc..) of the user. It works really well in Native, it works okay in web.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-localize",
  youtubeUrl: "",
  icon: <LanguageIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "9ecd7d3a-1ad0-4506-b63e-622ab24eafbd",
  name: "Multi-language Translator",
  libraryName: "adalo-multilanguage",
  description: "Allows the auto-magic updating of all logged in user words in your app.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-multilanguage",
  youtubeUrl: "",
  icon: <TranslateIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "c98b6c44-4897-4b7c-a8d9-a901e24caad2",
  name: "Share on Social Media",
  libraryName: "adalo-share-on-social-media",
  description: "Allows end users to share stuff on the large social media platforms.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-social-share",
  youtubeUrl: "",
  icon: <ShareIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "e8cc86d8-00e3-424b-90ff-f9ad4507f1b2",
  name: "Signature Canvas",
  libraryName: "signature-phone-fix",
  description: "Allows signing a document before submitting.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-signature",
  youtubeUrl: "",
  icon: <CreateIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "ace8a817-1001-4aba-8ad3-6fa103641840",
  name: "Arbitrary Javascript",
  libraryName: "adalo-arbitrary-javascript",
  description: "Sometimes you just want to add code.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-arbitrary-javascript",
  youtubeUrl: "",
  icon: <CodeIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "08fb9b8c-b556-40a2-90c2-8f04a9140f15",
  name: "Native Permissions Manager",
  libraryName: "adalo-permission-manager",
  description: "Allows enabling microphone and camera permissions in your native app.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-permission-manager",
  youtubeUrl: "",
  icon: <SecurityIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "b72680c7-9bc1-4368-8d5f-b52e1ed26ed1",
  name: "Better WebView",
  libraryName: "adalo-webview",
  description: "Enhance your WebView by using HTML instead of URLs and capturing user links to make actions.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-webview",
  youtubeUrl: "",
  icon: <HttpIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "6b4f5517-9fd0-4868-a1cd-6e8691339eeb",
  name: "IAPHUB",
  libraryName: "adalo-iaphub",
  description: "IAP with Subscriptions using IAPHUB.com",
  githubUrl: "https://github.com/pragmaflowinc/adalo-iaphub",
  youtubeUrl: "",
  icon: <PaidIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "b9125590-929a-42f7-aafe-1bb0e3d37bc4",
  name: "Quickcharts.io",
  libraryName: "mitch-pf-library",
  description: "Charts record count using filtered list input and grouped by the filter of your choice",
  githubUrl: "https://github.com/pragmaflowinc/adaol-quickcharts.io",
  youtubeUrl: "",
  icon: <BarChartIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "2a2619fa-442a-4c16-bcd4-454e91d7bfa0",
  name: "Audio Recorder (Web only for now)",
  libraryName: "audio-recorder-and-player",
  description: "Record microphone input",
  githubUrl: "https://github.com/pragmaflowinc/adalo-audio-recorder",
  youtubeUrl: "",
  icon: <MicIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "e62e0cd9-65e8-43a8-b17a-4bf40be5307a",
  name: "Pinch/Pan/Zoom Image",
  libraryName: "adalo-pinch-pan-zoom",
  description: "Allows Zooming and Panning on an image (touchscreen only for zoom)",
  githubUrl: "https://github.com/pragmaflowinc/adalo-pinch-pan-zoom",
  youtubeUrl: "",
  icon: <ZoomOutMapIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "db9a158a-35de-48a4-96e8-34c8f3a6a44c",
  name: "QR Scanner",
  libraryName: "pf-qr-code-scanner",
  description: "A fixed version of the QR scanner from the Marketplace",
  githubUrl: "https://github.com/pragmaflowinc/adalo-qr-scanner",
  youtubeUrl: "",
  icon: <QrCodeScannerIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "13e7e9c3-1833-429f-9516-98f3f2e1bbfa",
  name: "Real-Time Chat",
  libraryName: "adalo-real-time-chat",
  description: "Real-Time chat component for Adalo",
  githubUrl: "https://github.com/pragmaflowinc/adalo-realtime-chat",
  youtubeUrl: "",
  icon: <ChatIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "67901f6f-7482-4fe8-bf5b-296f7cebf8d5",
  name: "Spreadsheet Importer (Web only for now)",
  libraryName: "adalo-cvs-import",
  description: "Allow your users to upload spreadsheets into your collection",
  githubUrl: "https://github.com/pragmaflowinc/adalo-cvs-importer",
  youtubeUrl: "",
  icon: <UploadIcon sx={{ fontSize: 196}}  color="primary" />
}]

interface OrgType {
   __typename?: "OrganizationSchema" | undefined; 
   id: number; 
   name: string; 
}

export function InstallComponent() {
  const [accessToken, setAccessToken] = useState('')
  const [open, setOpen] = useState(false);
  const [installationMessage, setInstallationMessage] = useState('');
  const [installComponent, { data: installData }] = useInstallComponentMutation()

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h1">Install a component</Typography>
      <Typography>Click this link <Link target="_blank" href="https://www.adalo.com/?via=pragmaflow">https://www.adalo.com/?via=pragmaflow</Link> we would really appreciate it. It just let's Adalo know that you all care about the work we are doing!</Typography>
      <Typography>Here you will be able to install components into your organization that are developed by PragmaFlow.</Typography>
      <Typography>To get started you will need an access token so we can install the components on your behalf. To get a token read this: <br />
      <Link target="_blank" href="https://developers.adalo.com/docs/workflow/managing-private-libraries/#sharing-private-libraries-with-other-developers">https://developers.adalo.com/docs/workflow/managing-private-libraries/#sharing-private-libraries-with-other-developers</Link>
      </Typography>
      <Typography>This site is on GitHub <Link href="https://github.com/pragmaflowinc/adalo-pragmaflow-server">here</Link> if you want to see how it works, or build your own marketplace.</Typography>
      <Typography>If you want to stay up to date with changes and additions to this site, leave us your email. This is a mailchimp form so you need to go through the mailchimp process.</Typography>
      <MailchimpSubscribe url={url} />

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
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }}>
      {
        InstallableComponents.map(component => (
          <Card key={component.id} sx={{ maxWidth: '350px', color: 'black' }}>
            <CardHeader title={component.name} />
            <CardContent sx={{ display: 'grid', justifyItems: 'center' }}>
              {component.icon}
              <Typography sx={{ marginTop: 1}} color="background">{component.description}</Typography>
              <Link href={component.githubUrl} sx={{ marginTop: 1}}>{component.githubUrl}</Link>
            </CardContent>
            { accessToken && (<CardActions>
              <Button onClick={async (e) => {
                try {
                  const success = await installComponent({
                    variables: {
                      componentId: component.id,
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