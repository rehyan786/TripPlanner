import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { Dialog, DialogContent, DialogDescription, DialogHeader ,DialogTitle} from "@/components/ui/dialog";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './Header.css'

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const login = useGoogleLogin({
    onSuccess: (resp) => {
      getUserProfile(resp);
    },
    onError: (error) => console.log(error)
  });

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'Application/json'
        }
      }
    )
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        setOpenDialog(false);
        window.location.reload();
      });
  };

  useEffect(() => {
    //console.log(user);
  }, []);

  return (
    <div className='navbar p-3 shadow-sm flex justify-between items-center bg-transparent'>
      <img className="logo" src="\JMD__LOGO__1_-1-removebg-preview.png" alt="Logo" />

      <div className="link">
          <ul>
            <li>Home</li>
             <li className='top'>Explore Dubai <i className="fas fa-chevron-down"></i></li>
                
            <li>
              Visa Services <i className="fas fa-chevron-down"></i>
            </li>
            <li>Destinations</li>
            <li>About</li>
            <li>Omed Vovage</li>
          </ul>
        </div>
      <div className='flex' >
      
        {user ?
          <div className='flex items-center gap-3'>
            <a href='/create-trip'>
              <Button variant="outline" className="rounded-full">+ Create trip</Button>
            </a>
            <a href='/my-trips'>
              <Button variant="outline" className="rounded-full">My trips</Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt="Profile" />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Log out</h2>
              </PopoverContent>
            </Popover>
          </div> :
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        }
      </div>
            <Dialog open={openDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="sr-only">Google Sign In</DialogTitle> 
                <DialogDescription>
                  <img src="logo.svg" alt="Logo" />
                  <h2 className='font-bold text-lg mt-7'>Sign in with Google</h2>
                  <p className='mt-1'>Securely sign in with Google account</p>
                  <Button onClick={login} className='w-full mt-5 flex gap-4 items-center'>
                    <FcGoogle className='h-7 w-7 flex' />Sign In with Google
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

    </div>
  );
}

export default Header;