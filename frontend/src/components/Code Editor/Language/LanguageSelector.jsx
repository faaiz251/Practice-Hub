import React from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { LANGUAGE_VERSIONS } from "../../../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "#42a5f5";

const LanguageSelector = ({ language, onSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="language-selector">
    <Box sx={{ ml: 2, mb: 4 }}>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          color: "gray",
        }}
      >
        Language:
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ textTransform: "none" }}
      >
        {language}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: { backgroundColor: "#110c1b" },
        }}
      >
        {languages.map(([lang, version]) => (
          <MenuItem
            key={lang}
            onClick={() => {
              onSelect(lang);
              handleClose();
            }}
            sx={{
              color: lang === language ? ACTIVE_COLOR : "#fff",
              backgroundColor: lang === language ? "#424242" : "transparent",
              "&:hover": {
                color: ACTIVE_COLOR,
                backgroundColor: "#424242",
              },
            }}
          >
            {lang}&nbsp;
            <Typography
              component="span"
              sx={{ color: "gray", fontSize: "0.875rem" }}
            >
              ({version})
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
    </div>
  );
};

export default LanguageSelector;
