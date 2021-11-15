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

const InstallableComponents = [{
  id: "c350cf63-8142-49a3-b578-3fa2159cafe7",
  name: "Geolocation",
  libraryName: "pf-geo-location-steven",
  description: "This component allows reading the current location information of the device your app is running on.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-geolocation",
  icon: <LocationIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "8d471b8f-b04c-4405-aa65-88b53479a52b",
  name: "Biometric Login",
  libraryName: "pragmaflow-biometrics",
  description: "This component allows users to login to their Adalo account using biometrics on supported devices.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-biometric-login",
  icon: <FingerprintIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "0b6ea620-0419-4eb3-baad-f13d5af5a605",
  name: "Contact List",
  libraryName: "phone-contacts",
  description: "This component allows users to access their phone contact list within an Adalo app.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-phone-contacts",
  icon: <ContactsIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "944b88fc-6630-4467-8622-ff34b6ef42df",
  name: "Nfc",
  libraryName: "adalo-nfc",
  description: "This component allows users to have the ability to read Nfc tag ids.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-nfc",
  icon: <NfcIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "e5c223ff-3cd8-4e4f-b2c0-293122969997",
  name: "Local Storage",
  libraryName: "adalo-local-storage",
  description: "This component allows app designers to persist data on the phone via local storage.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-local-storage",
  icon: <StorageIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "fb55da5a-76a5-435b-bde8-a4f6a673e4ab",
  name: "Encryption Toolkit",
  libraryName: "pf-encryption-toolkit",
  description: "This suite of components facilitate encypting and decrypting data being saved in the Adalo database.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-encrypted-data",
  icon: <HttpsIcon sx={{ fontSize: 196}}  color="primary" />
},{
  id: "5c55a27d-d88d-45c8-b321-0b263637134f",
  name: "Data Loader",
  libraryName: "pf-adalo-data-preloader",
  description: "This is a utility that will allow you to preload the data for your screens.",
  githubUrl: "https://github.com/pragmaflowinc/adalo-data-preloader",
  icon: <CachedIcon sx={{ fontSize: 196}}  color="primary" />
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
      <Typography>Here you will be able to install components into your organization that are developed by PragmaFlow.</Typography>
      <Typography>To get started please enter your Adalo login credentials so the system can get a session token and install the components on your behalf.</Typography>
      <Typography>We do not log or store your credentials in any way, this site is on GitHub <Link href="https://github.com/pragmaflowinc/adalo-pragmaflow-server">here</Link> if you want to see.</Typography>
      
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