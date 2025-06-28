// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { IoIosSend } from "react-icons/io";
// import GlobalAPI from '@/service/GlobalAPI';

// function InfoSection({ tripInfo }) {
//   const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');

//   const handlePhotoFetched = (url) => {
//     setPhotoUrl(url);
//   };

//   return (
//     <div className='bg-white '>
//       <GlobalAPI
//         name={tripInfo?.tripData?.destination + ', best tourist spots hd photos'}
//         address={tripInfo?.tripData?.destination}
//         onPhotoFetched={handlePhotoFetched}
//       />
//       <img src={photoUrl} alt="Destination" className='h-[340px] w-full object-cover rounded' />
//       <div className='flex justify-between items-baseline'>
//         <div className='my-5 flex flex-col gap-2'>
//           <h2 className='font-bold text-3xl mt-2'>
//             {(JSON.parse(localStorage.getItem('user'))?.name?.split?.(' ')[0] || 'User')}'s Trip :
//          </h2>

//           <h2 className='font-semibold text-xl'>Starting from : {tripInfo?.tripData?.source}</h2>
//           <h2 className='font-semibold text-xl'>Travelling to : {tripInfo?.tripData?.destination}</h2>
//           <div className='flex gap-5'>
//             <h2 className=' mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm justify-between'>📅 For {tripInfo?.userSelection?.days} {tripInfo?.userSelection?.days > 1 ? "days" : "day"}</h2>
//             <h2 className=' mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm justify-between'>🥂 With {tripInfo?.userSelection?.companions}</h2>
//             <h2 className=' mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm justify-between'>💵 {tripInfo?.userSelection?.budget} budget</h2>
//           </div>
//         </div>
//         <Button>
//           <IoIosSend className='justify-end' />
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;


// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { IoIosSend } from "react-icons/io";
// import { FaWhatsapp } from "react-icons/fa";
// import GlobalAPI from '@/service/GlobalAPI';

// function InfoSection({ tripInfo }) {
//   const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');

//   const handlePhotoFetched = (url) => {
//     setPhotoUrl(url);
//   };

//   const userName = JSON.parse(localStorage.getItem('user'))?.name?.split?.(' ')[0] || 'User';
//   const whatsappNumber = '971562561568'; // Replace with your company number

//   const tripSummary = `Hi, I just planned a trip from ${tripInfo?.tripData?.source} to ${tripInfo?.tripData?.destination} for ${tripInfo?.userSelection?.days} day(s) with ${tripInfo?.userSelection?.companions}. Budget: ${tripInfo?.userSelection?.budget}.`;
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tripSummary)}`;

//   return (
//     <div className='bg-white'>
//       <GlobalAPI
//         name={tripInfo?.tripData?.destination + ', best tourist spots hd photos'}
//         address={tripInfo?.tripData?.destination}
//         onPhotoFetched={handlePhotoFetched}
//       />
//       <img src={photoUrl} alt="Destination" className='h-[340px] w-full object-cover rounded' />
//       <div className='flex justify-between items-baseline'>
//         <div className='my-5 flex flex-col gap-2'>
//           <h2 className='font-bold text-3xl mt-2'>
//             {userName}'s Trip :
//           </h2>

//           <h2 className='font-semibold text-xl'>Starting from : {tripInfo?.tripData?.source}</h2>
//           <h2 className='font-semibold text-xl'>Travelling to : {tripInfo?.tripData?.destination}</h2>
//           <div className='flex gap-5'>
//             <h2 className='mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm'>📅 For {tripInfo?.userSelection?.days} {tripInfo?.userSelection?.days > 1 ? "days" : "day"}</h2>
//             <h2 className='mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm'>🥂 With {tripInfo?.userSelection?.companions}</h2>
//             <h2 className='mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm'>💵 {tripInfo?.userSelection?.budget} budget</h2>
//           </div>
//         </div>

//         {/* WhatsApp Share Button */}
//         <Button asChild className='bg-green-500 hover:bg-green-600 text-white'>
//           <a
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className='flex items-center gap-2 px-3 py-2 rounded'
//           >
//             <FaWhatsapp size={20} />
//             Share
//           </a>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;




import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoIosSend } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import GlobalAPI from '@/service/GlobalAPI';

function InfoSection({ tripInfo }) {
  const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg');

  const handlePhotoFetched = (url) => {
    setPhotoUrl(url);
  };

  const whatsappNumber = '918877410425'; // Replace with your business number

  const message = `
Hi, I’d like to book a trip from ${tripInfo?.tripData?.source} to ${tripInfo?.tripData?.destination}.

Here are the details:

🚆 Train or ✈️ Flight Name: __________  
🏨 Hotel Name: __________  
📅 Travel Date: __________  
👥 Number of Travelers: __________  
🧳 Budget: ${tripInfo?.userSelection?.budget}  
🔁 Number of Days: ${tripInfo?.userSelection?.days}  
🗣️ Special Requests (if any): __________  

Please confirm the availability and booking process.
Thank you!
`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='bg-white'>
      <GlobalAPI
        name={tripInfo?.tripData?.destination + ', best tourist spots hd photos'}
        address={tripInfo?.tripData?.destination}
        onPhotoFetched={handlePhotoFetched}
      />

      <img src={photoUrl} alt="Destination" className='h-[340px] w-full object-cover rounded' />

      <div className='flex justify-between items-baseline'>
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='font-bold text-3xl mt-2'>
            {(JSON.parse(localStorage.getItem('user'))?.name?.split?.(' ')[0] || 'User')}'s Trip :
          </h2>

          <h2 className='font-semibold text-xl'>Starting from: {tripInfo?.tripData?.source}</h2>
          <h2 className='font-semibold text-xl'>Travelling to: {tripInfo?.tripData?.destination}</h2>

          <div className='flex gap-5'>
            <h2 className='mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm'>
              📅 For {tripInfo?.userSelection?.days} {tripInfo?.userSelection?.days > 1 ? 'days' : 'day'}
            </h2>
            <h2 className='mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm'>
              🥂 With {tripInfo?.userSelection?.companions}
            </h2>
            <h2 className='mt-1 p-1 px-3 bg-gray-200 rounded-full text-gray-700 sm:text-xs md:text-sm'>
              💵 {tripInfo?.userSelection?.budget} budget
            </h2>
          </div>
        </div>

        <Button asChild>
          <a
            href={whatsappLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-2 items-center'
          >
            <FaWhatsapp size={18} />
            Share
          </a>
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
