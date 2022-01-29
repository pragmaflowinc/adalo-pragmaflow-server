import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography} from "@mui/material";

export function GeoLocationDocs() {
  return (
    <div>
      <Typography variant="h1">GeoLocation Details</Typography>
      <Typography variant="subtitle1">
        About the components in the GeoLocation package
      </Typography>
      <Typography>
        There are 3 components you get when you install the GeoLocation package.
      </Typography>
        <ol>
          <li>GeoLocation PragmaFlow</li>
          <li>GeoFiltered List</li>
          <li>GeoDistance</li>
        </ol>

      <Typography variant="h2">GeoLocation PragmaFlow</Typography>
      <Typography>
        This component is a button that allows you to read location information
        from the user.
      </Typography>
      <TableContainer component={Paper} style={{ marginBottom: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Label for the button</TableCell>
              <TableCell>text</TableCell>
              <TableCell>This is the text that will be displayed on the button. It supports formating the font family, font weight, and color</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Icon</TableCell>
              <TableCell>icon</TableCell>
              <TableCell>This is the icon that will appear to the right of the button text</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Background Color</TableCell>
              <TableCell>color</TableCell>
              <TableCell>The background color of the button</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>How many milliseconds to wait before giving up</TableCell>
              <TableCell>number</TableCell>
              <TableCell>This is the location timeout in milliseconds. If a location request is made and it does not reply in this amount of time and error will be raised</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>How many milliseconds old can a location be?</TableCell>
              <TableCell>number</TableCell>
              <TableCell>Location data is sometimes cached, rather than making a new lookup for the location you might get cached data as a reply. This settings indicates how old the cached location can be and still be considered good.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>use high accuracy location?</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>This indicates if you want to use the devices high accuracy mode. If you do not need pinpoint locations you can turn this off</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Only update on significant changes (iOS)</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>On an iOS phone, while watching the location in real-time, this flag will only notify the app if location has moved a significant amount. Using this in your app will reduce the number of refreshes your app will make if the user does not move</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Continuously read the location</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>This flag will put the component into watch mode and continuously stream the location information to the app.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Get location on page load?</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>This flag will trigger the component to read the location without the button being clicked on.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number of miliseconds before refresh</TableCell>
              <TableCell>number</TableCell>
              <TableCell>When continuously reading the location is enabled, this is the interval time to read the locations.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trigger when there is an error reading the location</TableCell>
              <TableCell>action</TableCell>
              <TableCell>This event gets fired when there is an error reading a location.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trigger when the location has been updated</TableCell>
              <TableCell>action</TableCell>
              <TableCell>This event gets fired when new location data is available</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      <TableContainer component={Paper} style={{ marginBottom: 10 }}>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell colSpan={3}>Action: Trigger when there is an error reading the location</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>GeoLocationPermission error code</TableCell>
              <TableCell>number</TableCell>
              <TableCell>Possible values are
                <ol>
                  <li>Location permission is not granted</li>
                  <li>Location provider not available</li>
                  <li>Location request timed out</li>
                  <li>Google play service is not installed or has an older version (android only)</li>
                  <li>Location service is not enabled or location mode is not appropriate for the current request (android only)</li>
                  <li value="-1">Unknown</li>
                  </ol>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Additional Information</TableCell>
              <TableCell>text</TableCell>
              <TableCell>Extra details about what when wrong when trying to read the data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Current heading</TableCell>
              <TableCell>number</TableCell>
              <TableCell>Degrees from 0 to 360, 0 representing true north, 90 is east, 180 is south, 270 is west. If the user is not moving this will be empty</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accuracy of location</TableCell>
              <TableCell>number</TableCell>
              <TableCell>Expressed in meters, of the statistical probability that the current location is 1 sigma accurate to that lat/long. On a web browser, rather than 1 sigma it is 95% confident</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Current altitude</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The distance, in meters, above the WSG84 ellipsoid (aka sea level)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accuracy of the altitude</TableCell>
              <TableCell>number</TableCell>
              <TableCell>same as location accuracy above, but for altitude rather than location</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Current speed</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The current rate the user is moving, measured in meters per second (m/s)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Timestamp when location was read</TableCell>
              <TableCell>number</TableCell>
              <TableCell>A number representing the time when the location was last read, expressed in milliseconds since January 1st, 1970. (see <a href="https://currentmillis.com/">https://currentmillis.com/</a>)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell colSpan={3}>Action: Triggered when the location has been updated</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Current latitude</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The current north/south position on the surface, measured in degrees, from the equator</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Current latitude</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The current east/west position on the surface, measured in degrees, from the prime meridian</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Current heading</TableCell>
              <TableCell>number</TableCell>
              <TableCell>Degrees from 0 to 360, 0 representing true north, 90 is east, 180 is south, 270 is west. If the user is not moving this will be empty</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accuracy of location</TableCell>
              <TableCell>number</TableCell>
              <TableCell>Expressed in meters, of the statistical probability that the current location is 1 sigma accurate to that lat/long. On a web browser, rather than 1 sigma it is 95% confident</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Current altitude</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The distance, in meters, above the WSG84 ellipsoid (aka sea level)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accuracy of the altitude</TableCell>
              <TableCell>number</TableCell>
              <TableCell>same as location accuracy above, but for altitude rather than location</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Current speed</TableCell>
              <TableCell>number</TableCell>
              <TableCell>The current rate the user is moving, measured in meters per second (m/s)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Timestamp when location was read</TableCell>
              <TableCell>number</TableCell>
              <TableCell>A number representing the time when the location was last read, expressed in milliseconds since January 1st, 1970. (see <a href="https://currentmillis.com/">https://currentmillis.com/</a>)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h2">FAQ</Typography>
      <Typography variant="h3">I do not get any location data from my PWA app on an iPhone</Typography>
      <Typography>
        By default the web browser on an iPhone does not have access to location. You need to enable it by following these steps
        <ol>
        <li>
        On your iPhone or iPad, tap Settings Privacy. Location Services.
        </li>
        <li>
          Tap your browser app, like Safari Websites or Chrome.
        </li>
        <li>
          Choose location access for the browser app: While Using the App, Ask Next Time or Never.
        </li>
        </ol>
      </Typography>
    </div>
  );
}
