import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  getRole,
  removeSession,
} from '../../../services/LocalStorageService/LocalStorageService'
import { AnnouncementPanel } from '../../../components/compIndex'

function StudentDash() {
  const history = useHistory()
  useEffect(() => {
    let checkAuth = getRole() === '2'
    if (!checkAuth) {
      removeSession()
      history.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Student
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                removeSession()
                history.push('/login')
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <AnnouncementPanel />
    </div>
  )
}

export default StudentDash
