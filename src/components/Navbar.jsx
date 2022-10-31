import { Pets, Mail, Notifications } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar  } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div") (( { theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

// display these only on devices bigger than small (600px)
const Icons = styled(Box) (( { theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox =styled(Box) (({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"} }}>React Material UI</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none"} }} />
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }} 
                        src="/static/images/avatar/1.jpg" 
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar 
                        sx={{ width: 30, height: 30 }} 
                        src="/static/images/avatar/1.jpg"
                        onClick={(e) => setOpen(true)}
                    />
                    <Typography variant="span">Andrei</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;