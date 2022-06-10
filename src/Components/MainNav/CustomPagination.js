import { Pagination, ThemeProvider, unstable_createMuiStrictModeTheme } from "@mui/material";
import { color } from "@mui/system";
import React from "react";



const CustomPagination = ({ setPage }) => {
  const changeHandler = (page) => {
    {
      setPage(page);
      window.scroll(0, 0);
    }
  };

  return (
    <div
    style={{
        width: "100%",
        display:"flex",
        justifyContent:"center",
        marginTop:10,
      
    }}
    
    >
        
      <Pagination
        count={15}
        color="primary"
        onChange={(e) => changeHandler(e.target.textContent)}
      />
      
    </div>
  );
};

export default CustomPagination;
