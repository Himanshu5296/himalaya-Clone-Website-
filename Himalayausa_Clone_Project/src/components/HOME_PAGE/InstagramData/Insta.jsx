import * as React from 'react';
import Box from '@mui/material/Box';
import instaLogo from '../../Images/instalogo2.png'
import Modal from '@mui/material/Modal';
import './insta.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [data,setData]=React.useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData=async()=>{
    let res=await fetch('https://instafeed.nfcube.com/feed/v4?charge=0&fu=0&limit=4&account=himalaya-wellness-us.myshopify.com&fid=0&hash=97e31002d3cf6591f86cba680b1d4d89&callback=cache.parse')
    let data=await res.json()
    
    let mainData=data.data
    setData(mainData)
    console.log(mainData[0])
  }
  React.useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className='main-insta-div'>
     
      <div onClick={handleOpen} className='instaImages-div'>
        {
          data.map((item)=>( 
            <div className='images-insta'>
              <img src={item.images.low_resolution.url} alt="logo" className='instaImages' />
              <img src={instaLogo} alt="" className='instahover'/>
            </div>
          ))
        }
      </div>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='hover-box'>
            <div >
              <img src='https://scontent.cdninstagram.com/v/t51.2885-15/279060214_1028931348020017_977861928696093797_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=PCCRJR5vXmsAX8jZyWa&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_mvsPqRFd4VgM-GFTt82x5t_VjvwY9GqyMveOSln-EGw&oe=627A7207' alt="logo" className='logos' />
            </div>
            <div className='caption'>
              <div className='details-insta-div'>
                <div>
                  <img src="https://instafeed.nfcube.com/assets/img/pixel.gif" alt=""className='details' />
                </div>
                <div className='insta-id'>
                  <h5>Himalayausa</h5>
                  <p>@himalayausa</p>
                </div>
              </div>
              <p >
              🌎 Earth Day Give Away! 🌎 Happy Earth Day! To celebrate, we are giving away our 3 amazing Hello products: Hello Energy, Hello Joy and Hello Peace to 6 winners. We also want you to have the chance to treat your homes and gardens with some lovely herbs. Each winner will receive a lavender plant kit from @Modsprout and seeds of Yarrow, a time tested herb used in Hello Peace.
              </p>
              <p> TO ENTER:</p>
              <p>🌎 Like this Post 🌎</p>
              <p>Comment on this post on what you are doing or plan to do to benefit the Earth </p>
              <p>🌎 Follow @himalayausa </p>
              <p>
                Entry closes on 4/25 at 12PM ET. The 6 winners will be drawn at random and will be contacted via Instagram DM from @himalayausa on 4/26. Winner must be 18+ years old. This giveaway is not sponsored by, endorsed by, or affiliated with Instagram.
              </p>
            </div>
          </div>
        </Box>
      </Modal>
      </div>
    </div>
    </>
  );
}
