import React from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css'
import { Subscript } from '@mui/icons-material';

export default function App() {
  return (
    <div class="corner">
<Grid container spacing={10}>
    <Grid item>
<Card sx={{ minWidth: 330}} class="cardcorner"> 
  <cardheader>
  <Typography class="plan">
   FREE
  </Typography>
  <Typography class="price">$0<sub>/month</sub></Typography>
  </cardheader>
<CardContent>
  <Typography sx={{ fontSize: 14 }} gutterBottom>
   <ul class="avail">
   <li>Single User</li>
   <li> 5GB Storage</li>
   <li>Unlimited Public Projects</li>
   <li>Community Access</li>
   </ul>
   <ul class="notavail">
    <li>Unlimited Private Projects</li>
    <li>Dedicated Phone Support</li>
    <li>Free Subdomain</li>
    <li>Monthly Status Reports</li>
  </ul>
  </Typography>
</CardContent>
<CardActions>
<Button variant="contained" style={{margin:'0px 0px 0px 70px'}}>Button</Button>
</CardActions>
</Card>
</Grid>

 <Grid item>
<Card sx={{ minWidth: 330}} class="cardcorner">
  <cardheader>
  <Typography class="plan">
   PLUS
  </Typography>
  <Typography class="price">$9<sub>/month</sub></Typography>
  </cardheader>
<CardContent>
  <Typography sx={{ fontSize: 14 }} gutterBottom>
   <ul class="avail">
   <li><b>5 Users</b></li>
   <li> 50GB Storage</li>
   <li>Unlimited Public Projects</li>
   <li>Community Access</li>
   <li>Unlimited Private Projects</li>
    <li>Dedicated Phone Support</li>
    <li>Free Subdomain</li>
   </ul>
   <ul class="notavail">
    <li>Monthly Status Reports</li>
  </ul>
  </Typography>
</CardContent>
<CardActions>
<Button variant="contained" style={{margin:'0px 0px 0px 70px'}}>Button</Button>
</CardActions>
</Card>
</Grid>

<Grid item>
<Card sx={{ minWidth: 330}} class="cardcorner">
  <cardheader>
  <Typography class="plan">
   PRO
  </Typography>
  <Typography class="price">$49<sub>/month</sub></Typography>
  </cardheader>
<CardContent>
  <Typography sx={{ fontSize: 14 }} gutterBottom>
   <ul class="avail">
   <li><b>Unlimited Users</b></li>
   <li> 50GB Storage</li>
   <li>Unlimited Public Projects</li>
   <li>Community Access</li>
   <li>Unlimited Private Projects</li>
    <li>Dedicated Phone Support</li>
    <li><b>Unlimited</b> Free Subdomains</li>
    <li>Monthly Status Reports</li>
   </ul>
  </Typography>
</CardContent> 
<CardActions>
  <div class="Button">
<Button variant="contained" style={{margin:'0px 0px 0px 70px'}}>Button</Button>
</div>
</CardActions>
</Card>
</Grid>

</Grid>
</div>
);
}