import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArticleIcon from '@mui/icons-material/Article';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const BottomNavigationComp = () => {
  const history= useHistory()

  return (
    <Box sx={{ width: '97vw' }}>
      <BottomNavigation
        style={{background:'#def0f2', position:'fixed', bottom:0, left:0, right:0}}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction onClick={() => { history.replace('/')}} label="Reports" icon={<ArticleIcon />} />
        {/* <BottomNavigationAction onClick={()=> history.replace('/appointments')} label="Appointments" icon={<MedicalServicesIcon />} /> */}
        <BottomNavigationAction onClick={()=> {history.replace('/search')}} label="Search Report" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
export default  BottomNavigationComp;