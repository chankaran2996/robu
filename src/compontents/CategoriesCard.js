import React from 'react';
// import { Card,CardContent,CardOverflow,Divider,Typography } from '@mui/material';
import { Card,CardContent,CardOverflow,Divider,Typography,AspectRatio } from '@mui/joy';
// import { Card,CardBody,CardTitle } from 'reactstrap';
import "./CategoriesBabber.css"

const CategoriesCard = ({data}) => {
  // return (
  //     <Card className='cards'>
  //       <img src={data.img}/>
  //       <CardBody>
  //           <CardTitle>
  //               <p>{data.titile}</p>
  //           </CardTitle>
  //       </CardBody>
  //     </Card>
  // )
  return(
    <Card variant="outlined" 
    sx={{
      width: 165,
      borderRadius:"20px",
      margin:"10px",
      '&:hover': { boxShadow: "5px 5px 5px 5px" , borderColor: 'neutral.outlinedHoverBorder' },
    }}
    // sx={{ width: 200, borderRadius:"50px" }}
    >
      <CardOverflow>
        <AspectRatio ratio="1"
        sx={{
          margin:"10px"
        }}
        >
          <img
            // sx={{
            //   border:"10px",
            //   margin:"10px"
            //   // borderRadius:"2"
            // }}
            src={data.img}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{data.titile}</Typography>
        {/* <Typography level="body-sm">California</Typography> */}
      </CardContent>
      {/* <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            6.3k views
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow> */}
    </Card>
  )
}

export default CategoriesCard;
