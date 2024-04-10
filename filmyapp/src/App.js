import SideBar from './sideBar';
import SearchPage from './searchPage';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <Grid container xs={12}>
      <Grid item > {/* Adjust the width of the sidebar */}
        <SideBar />
      </Grid>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Adjust the width of the main content and center its content */}
        <SearchPage />
      </Grid>
    </Grid>

  );
}

export default App;
