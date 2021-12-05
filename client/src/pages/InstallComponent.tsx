import React, { useEffect, useState } from 'react'
import { useUninstallComponentMutation, useGetAdaloSessionLazyQuery, useGetAdaloOrganizationsLazyQuery, useInstallComponentMutation, GetAdaloOrganizationsDocument } from '../generated/graphql'
import { InputLabel, MenuItem, FormControl, Select, CardHeader, CardContent, Button, TextField, Box, Typography, Link, Card, CardActions } from '@mui/material'
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
}]

interface OrgType {
   __typename?: "OrganizationSchema" | undefined; 
   id: number; 
   name: string; 
   Libraries: Array<{ 
     __typename?: "LibrarySchema" | undefined; 
     id: string; name?: string | null | undefined; 
  }>
}

export function InstallComponent() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 
  const [sessionToken, setSessionToken] = useState('')
  const [organization, setOrganization] = useState<OrgType>({ id: 0, name:'', Libraries: [] })
  const [getAdaloSession, { data, loading: loadingSession, error }] = useGetAdaloSessionLazyQuery()
  const [getOrganizationInformation, { data: orgData}] = useGetAdaloOrganizationsLazyQuery()
  const [installComponent, { data: installData }] = useInstallComponentMutation({ refetchQueries: [{ query: GetAdaloOrganizationsDocument, variables: { sessionToken }}]})
  const [uninstallComponent, { data: uninstallData }] = useUninstallComponentMutation({ refetchQueries: [{ query: GetAdaloOrganizationsDocument, variables: { sessionToken }}]})
  const [loginError, setLoginError] = useState('')
  useEffect(() => {
    if (error) {
      setLoginError('There was a problem logging in, please check your username and password and try again')
    }
  }, [error])
  useEffect(() => {
    if (orgData) {
      const updatedOrg = orgData.getAdaloOrganizations.find(org => org.id === organization.id)
      if (updatedOrg) {
        setOrganization(updatedOrg)
      }
    }
  }, [orgData, organization])

  useEffect(() => {
    if (data) {
      setSessionToken(data.getAdaloSession)
      getOrganizationInformation({
        variables: {
          sessionToken: data.getAdaloSession
        }
      })
    }
  }, [data, getOrganizationInformation])
  return (
    <div>
      <Typography variant="h1">Install a component</Typography>
      <Typography variant="h2">If you can take a second</Typography>
      <Typography>If you can take a second to click this link <Link target="_blank" href="https://www.adalo.com/?via=pragmaflow">https://www.adalo.com/?via=pragmaflow</Link> we would really appreciate it. It just let's Adalo know that you all care about the work we are doing!</Typography>
      <Typography>Here you will be able to install components into your organization that are developed by PragmaFlow.</Typography>
      <Typography>To get started please enter your Adalo login credentials so the system can get a session token and install the components on your behalf.</Typography>
      <Typography>We do not log or store your credentials in any way, this site is on GitHub <Link href="https://github.com/pragmaflowinc/adalo-pragmaflow-server">here</Link> if you want to see.</Typography>
      <Typography>If you want to stay up to date with changes and additions to this site, leave us your email. This is a mailchimp form so you need to go through the mailchimp process.</Typography>
      <MailchimpSubscribe url={url} />

      <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Step 1: Get a session token to authorize the application to install components</Typography>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          alignItems: 'center',
          display: 'flex'
        }}>
        <TextField variant="standard" value={username} label="Adalo Username" onChange={e => {
          const newUsername = e.currentTarget.value
          setUsername(newUsername)
        }}/>
        <TextField type="password" variant="standard" value={password} label="Adalo Password" onChange={e => {
          const newPassword = e.currentTarget.value
          setPassword(newPassword)
        }}/>
        <Button
        onClick={(e: any) => {
          getAdaloSession({
            variables: {
              email: username,
              password
            }
          })
        }} variant="contained">Get token</Button>
    </Box>
    { loginError && <Typography color="error">{loginError}</Typography> }
    <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Step 2: Select which organization you want to install the components for (in case you belong to many organizations.</Typography>
    <Box sx={{ marginTop: 1, marginBottom: 1}}>
    <FormControl fullWidth>
  <InputLabel id="organization-label">Organization</InputLabel>
  <Select
    labelId="organization-label"
    id="demo-simple-select"
    value={organization.id}
    label="Organization"
    variant="standard"
    sx={{ maxWidth: 350 }}
    onChange={e => {
      const newOrganization = orgData?.getAdaloOrganizations.find(org => org.id === e.target.value) 
      if (newOrganization) {
        setOrganization(newOrganization)
      }
    }}
  >
    {
      orgData && orgData.getAdaloOrganizations.map(org => (
        <MenuItem sx={{ color: 'black' }} value={org.id}>{org.name}</MenuItem>
      ))
    }
  </Select>
</FormControl>
    </Box>
    <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Step 3: Choose which components you would like to install/uninstall from your projects. Once you get a token the install/unistall buttons will appear.</Typography>
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
            { sessionToken && <CardActions>
              {
                organization.Libraries.some(lib => lib.id === component.id) ? (
                  <Button color="error" onClick={e => {
                    uninstallComponent({
                      variables: {
                        componentId: component.id,
                        organizationId: `${organization.id}`,
                        sessionToken
                      }
                    })
                  }}>
                    Unistall
                  </Button>
                ) : (
                  <Button onClick={e => {
                    installComponent({
                      variables: {
                        componentId: component.id,
                        libraryName:component.libraryName,
                        organizationId: `${organization.id}`,
                        sessionToken
                      }
                    })
                  }}>
                    Install
                  </Button>
                )
              }
              
            </CardActions> }
          </Card>
        ))
      }
    </Box>
    </div>
  )
}