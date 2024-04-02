import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Link href="https://flowbite.com/" underline="none" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
              <Typography variant="h6" component="span" className="text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container justifyContent="space-between" spacing={6}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</Typography>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                  </li>
                  <li>
                    <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</Typography>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</Typography>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2" className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()} <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.</Typography>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><InstagramIcon /></Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><TwitterIcon /></Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><GitHubIcon /></Link>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
