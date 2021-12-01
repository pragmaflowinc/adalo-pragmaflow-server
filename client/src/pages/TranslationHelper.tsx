import React, { useState, useEffect } from 'react'
import { Box, Button, CircularProgress, TextField, Typography, Select, MenuItem } from '@mui/material'
import { useGetAdaloSessionLazyQuery, useGetAdaloBundleLazyQuery, useGetAdaloAppsLazyQuery } from '../generated/graphql'
import { CSVLink } from "react-csv";

/** Based on shakhal/find_values.js */
function searchAndUpdate(obj: any, list: string[]): string[] {
  if (!obj) { return list; }
  if (obj.type === 'action') { return list; }
  if (obj instanceof Array) {
    for (var i in obj) {
      list =  list.concat(searchAndUpdate(obj[i], []))
    }
    return list
  }
  if (obj.text && typeof obj.text === "string") {
    list.push(obj.text)
  }
  if (obj.placeholder && typeof obj.placeholder === "string") {
    list.push(obj.placeholder)
  }
  if (obj.label && typeof obj.label === "string") {
    list.push(obj.label)
  }

  if ((typeof obj === "object") && (obj !== null)) {
    var children = Object.keys(obj)
    if (children.length > 0) {
      for (var j = 0; j < children.length; j++) {
        list = list.concat(searchAndUpdate(obj[children[j]], []))
      }
    }
  }
  return list
}


export function TranslationHelper() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 
  const [sessionToken, setSessionToken] = useState('')
  const [loginError, setLoginError] = useState('')
  const [bundleErrorMessage, setBundleErrorMessage] = useState('')
  const [apps, setApps] = useState<Array<{ id: string, name: string }>>()
  const [appId, setAppId] = useState('')
  const [getAdaloSession, { data, loading: loadingSession, error }] = useGetAdaloSessionLazyQuery()
  const [getAdaloApps, { data: appsData, loading: appsLoading, error: appsError}] = useGetAdaloAppsLazyQuery()
  const [getAdaloBundle, { data: bundleData, loading: bundleLoading, error: bundleError}] = useGetAdaloBundleLazyQuery()
  const [csvData, setCsvData] = useState<string[][]>()
  useEffect(() => {
    if (error) {
      setLoginError('There was a problem logging in, please check your username and password and try again')
    }
  }, [error])
  useEffect(() => {
    if (bundleError) {
      setBundleErrorMessage("There was a problem getting your app, are you sure the app id is correct?")
    }
  }, [bundleError])
  useEffect(() => {
    if (data) {
      setSessionToken(data.getAdaloSession)
    }
  }, [data])
  useEffect(() => {
    if (appsData) {
      setApps(appsData.getAppsList)
    }
  }, [appsData])
  useEffect(() => {
    if (bundleData) {
      
      const jsonBundle = JSON.parse(bundleData.getBundle)
      const words = Object.keys(jsonBundle.components).flatMap(key => {
        const screen = jsonBundle.components[key]
        return screen.layout.body.flatMap((object: any) => searchAndUpdate(object, []))
      }) 
      const uniq = Array.from(new Set(words)) as string[]
      
      const csv = uniq.map(word => [word])
      csv.unshift(["Key", "Translation Text", "Language Name"])
      console.log(JSON.stringify(csv))
      setCsvData(csv)
    }
  }, [bundleData])
  return (
    <Box>
      <Typography variant="h1">Translation helper</Typography>
      <Typography>When using the Translator component on large projects, finding all the translations is long! By using this page you can quickly generate and download a CSV file with all the words you will need to translate. Once you create the translations in the CSV you can upload the translations into Adalo.</Typography>
      <Typography>Loading the apps from Adalo (step 2) takes awhile, if you already know your app id, skip to step 3 and save yourself some time.</Typography>
      <Typography>The easiest way to find your app id is to go to https://app.adalo.com, open the app you want to translate and copy the id from the url. It will look something like this.</Typography>
      <Typography>https://app.adalo.com/apps/abcdefgh-ijkl-mnop-qrst-uvwxyz123456, the app id is the abcdefgh... part of the url. If you are confused by this, just go through step 1 and 2.</Typography>
      <Typography sx={{ marginTop: 5, marginBottom: 1 }}>Step 1: Get a session token to allow this page to get the list of apps (only if you don't know your app id, skip to step 3 if you do)</Typography>
      <Box>
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
        disabled={!username || !password}
        onClick={(e: any) => {
          getAdaloSession({
            variables: {
              email: username,
              password
            }
          })
        }} variant="contained">{loadingSession ? <CircularProgress color="info" size="1em" /> : "Get token"}</Button>
        </Box>
        { loginError && <Typography color="error">{loginError}</Typography> }
        <Typography sx={{ marginTop: 5, marginBottom: 1 }}>Step 2: Get the list of apps from Adalo (this might take up to a couple of minutes)</Typography>
        <Box>
        <Button onClick={e => {
          getAdaloApps({
            variables: {
              sessionToken
            }
          })
        }}
        variant="contained"
        disabled={!sessionToken}>
          {appsLoading ? <CircularProgress color="info" size="1em" /> : "Get List of Apps"}
        </Button>
        </Box>
        { appsError && <Typography color="error">{JSON.stringify(appsError)}</Typography> }
        <Typography sx={{ marginTop: 5, marginBottom: 1 }}>Step 3: If you did step 1 and 2, select an app from the drop-down, if you know the app id, enter it into the textbox</Typography>
        <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '36ch' },
          alignItems: 'center',
          display: 'flex'
        }}>
        {apps && <Select
    labelId="app-label"
    id="demo-simple-select"
    value={appId}
    label="Select an App"
    variant="standard"
    sx={{ maxWidth: 350 }}
    onChange={e => {
      const appId = e.target.value
      setAppId(appId)
    }}
  >
    {
      apps && apps.map(app => (
        <MenuItem sx={{ color: 'black' }} value={app.id}>{app.name}</MenuItem>
      ))
    }
  </Select>}
        <TextField variant="standard" value={appId} label="Adalo App Id" onChange={e => {
          const newAppId = e.currentTarget.value
          setAppId(newAppId)
        }}/>
        </Box>
        <Typography sx={{ marginTop: 5, marginBottom: 1 }}>Step 4: Click the process button</Typography>
        <Box>
    <Button
    disabled={!appId}
    variant="contained"
    onClick={e => {
      setBundleErrorMessage('')
      getAdaloBundle({
        variables: {
          appId
        }
      })
    }}>{bundleLoading ? <CircularProgress color="info" size="1em" /> : "Process the App"}</Button>
    </Box>
    { bundleErrorMessage && <Typography color="error">{bundleErrorMessage}</Typography> }
    <Typography sx={{ marginTop: 5, marginBottom: 1 }}>Step 5: Download the CSV file</Typography>
    <Box>
    { csvData && <CSVLink data={csvData}>Download me</CSVLink>}
    </Box>
    </Box>
    </Box>
  )
}