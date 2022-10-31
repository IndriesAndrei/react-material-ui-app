import { Box, Switch } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material";

const Sidebar = () => {
    return (
        <Box 
            flex={1} p={2} 
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
             <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Article />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Storefront />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-link">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar;