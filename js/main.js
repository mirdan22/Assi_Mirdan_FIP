
// video
const video = document.querySelector('video');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
// Team
const popOutBtns = document.querySelectorAll('.pop-out-btn');

const teamMembers = [
  {
    name: 'Mirdan Assi',
    position: 'Designer',
    bio: "Mirdan Assi is an accomplished website designer who specialises in creating engaging and dynamic online experiences. With years of experience in the field, Mirdan has developed a reputation for delivering exceptional results that meet his clients' unique needs and objectives. As the lead designer for the website of Zima energy drink, Mirdan has played a pivotal role in creating an online presence that reflects the brand's values and messaging. He has collaborated closely with the Zima team to design a website that engages visitors and effectively communicates the benefits of their energy drink. Mirdan's expertise in website design and development has been instrumental in creating a seamless user experience that helps visitors navigate the site and learn more about Zima's products. His mastery of design tools such as HTML, CSS, and JavaScript has allowed him to create a visually stunning and intuitive website that is optimised for both desktop and mobile devices. In addition to his work with Zima, Mirdan has worked with numerous other clients in various industries, including healthcare, finance, and e-commerce. His ability to tailor his designs to meet the unique needs of each client has made him a sought-after designer in the industry. Outside of work, Mirdan enjoys keeping up with the latest design trends and experimenting with new techniques to further enhance his skills. He also enjoys playing sports and spending time with his family and friends"
    ,
  },
  {
    name: 'Daniel Alvendo',
    position: 'Devolper',
    bio: "Daniel Alvendo is a skilled programmer with a passion for creating cutting-edge websites that deliver exceptional user experiences. As the lead programmer for the website of Zima energy drink, Daniel has played a critical role in building a robust and dynamic platform that effectively communicates the brand's message and products. With years of experience in the field of web development, Daniel has developed expertise in a wide range of programming languages, including JavaScript, HTML, CSS, and PHP. His mastery of these technologies has allowed him to build websites that are not only visually appealing but also highly functional and user-friendly. Working in collaboration with the Zima team, Daniel has developed a website that is optimised for both desktop and mobile devices, ensuring that visitors have a seamless experience no matter how they access the site. He has also integrated advanced features such as online ordering and secure payment processing, helping to streamline the user experience and improve customer satisfaction. Daniel's skills as a programmer extend beyond website development. He has also worked on various software projects, including mobile applications and custom software solutions for businesses in various industries. When he's not coding, Daniel enjoys staying up-to-date with the latest technology trends and experimenting with new programming languages and frameworks. He also enjoys spending time with his family and friends, travelling, and exploring new cultures.",
  },
  {
    name: 'Jessica Benson',
    position: 'Group Orginazier',
    bio: "Jessica Benson is a talented group organizer with a passion for bringing people together to achieve common goals. As the lead organizer for the website of Zima energy drink, Jessica has played a crucial role in ensuring that the website's content is relevant, informative, and engaging for visitors. With years of experience in event planning and project management, Jessica has developed a keen eye for detail and a talent for bringing together diverse groups of people to collaborate effectively. She has leveraged these skills to build a team of writers, designers, and programmers who work together to deliver a website that effectively communicates the brand's message and products. Jessica's approach to group organization is based on clear communication, effective delegation, and a focus on results. She works closely with her team to ensure that everyone is on the same page and that the project is moving forward according to plan. Her ability to keep everyone motivated and engaged has helped to foster a positive team culture and ensure that deadlines are met on time. In addition to her work with Zima, Jessica has organized various other events and projects, including conferences, fundraisers, and community initiatives. Her ability to bring people together and drive results have made her a respected leader in the industry. Outside of work, Jessica enjoys volunteering in her community, practicing yoga, and spending time with her family and friends.",
  },
];

popOutBtns.forEach((btn, index) => {
  const teamMember = teamMembers[index];
  const popOutContainer = document.createElement('div');
  popOutContainer.classList.add('pop-out-container');
  
  popOutContainer.innerHTML = `
    <h2>${teamMember.name}</h2>
    <p>${teamMember.bio}</p>
    <span class="pop-out-container-close">&times;</span>
  `;

  
  popOutContainer.style.textAlign = 'left';
  popOutContainer.style.fontSize = '15px';
  popOutContainer.style.lineHeight = "1.5";
  popOutContainer.style.width = '800px';
  popOutContainer.style.height = '500px';
  popOutContainer.style.padding = '20px';

  popOutContainer.style.backgroundColor = 'white';
  popOutContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  popOutContainer.style.position = 'fixed';
popOutContainer.style.top = '50%';
popOutContainer.style.left = '50%';
popOutContainer.style.transform = 'translate(-50%, -50%)';

  
  btn.addEventListener('click', () => {
    document.body.appendChild(popOutContainer);
    popOutContainer.style.display = 'block';

    const popOutContainerClose = popOutContainer.querySelector('.pop-out-container-close');
    popOutContainerClose.addEventListener('click', () => {
      popOutContainer.style.display = 'none';
    });
  });
});


// pop-out 404

const drinkSections = document.querySelectorAll('.energy-box');


drinkSections.forEach((section) => {
  section.addEventListener('click', () => {
 
    const popOut = document.createElement('div');
    popOut.classList.add('pop-out');


    const closeButton = document.createElement('button');
    closeButton.classList.add('pop-out__close');
    closeButton.textContent = 'X';


    const drinkDetails = document.createElement('div');
    drinkDetails.classList.add('pop-out__details');
    drinkDetails.innerHTML = section.innerHTML;


    popOut.appendChild(closeButton);
    popOut.appendChild(drinkDetails);


    document.body.appendChild(popOut);


    closeButton.addEventListener('click', () => {

      document.body.removeChild(popOut);
    });
  });
});


// burger menu

const mobileNav = document.getElementById('mobile-nav');
const mobileNavList = mobileNav.querySelector('ul');


mobileNav.addEventListener('click', () => {
 
  mobileNavList.classList.toggle('active');
});





const buyButtons = document.querySelectorAll('.buy-button');




buyButtons.forEach(button => {

  button.addEventListener('click', event => {
    event.preventDefault();
 

    const popOutSection = document.createElement('div');
    popOutSection.innerHTML = '<h2>404 - Page Not Found</h2>';

   
    popOutSection.style.position = 'fixed';
    popOutSection.style.top = '50%';
    popOutSection.style.left = '50%';
    popOutSection.style.transform = 'translate(-50%, -50%)';
    popOutSection.style.backgroundColor = 'orange';
    popOutSection.style.color = 'white' ;
    popOutSection.style.borderRadius = '10px' 

    popOutSection.style.width = '500px';
    popOutSection.style.height = '300px';
    popOutSection.style.padding = '20px';

  
    document.body.appendChild(popOutSection);


    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.bottom = '20px';
    closeButton.style.left = '50%';
    closeButton.style.transform = 'translateX(-50%)';
    closeButton.style.backgroundColor = 'white';
    closeButton.style.color = 'orange';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '10px';
    closeButton.style.width = '100px';
    closeButton.style.height = '50px';
    closeButton.style.fontSize = '20px';

  

    popOutSection.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
      popOutSection.remove();
    });
  });
});





// video
// const video = document.querySelector('video');

// video.addEventListener('click', () => {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });
// Team
// const popOutBtns = document.querySelectorAll('.pop-out-btn');

// const teamMembers = [
//   {
//     name: 'Mirdan Assi',
//     position: 'Designer',
//     bio: "Mirdan Assi is an accomplished website designer who specialises in creating engaging and dynamic online experiences. With years of experience in the field, Mirdan has developed a reputation for delivering exceptional results that meet his clients' unique needs and objectives. As the lead designer for the website of Zima energy drink, Mirdan has played a pivotal role in creating an online presence that reflects the brand's values and messaging. He has collaborated closely with the Zima team to design a website that engages visitors and effectively communicates the benefits of their energy drink. Mirdan's expertise in website design and development has been instrumental in creating a seamless user experience that helps visitors navigate the site and learn more about Zima's products. His mastery of design tools such as HTML, CSS, and JavaScript has allowed him to create a visually stunning and intuitive website that is optimised for both desktop and mobile devices. In addition to his work with Zima, Mirdan has worked with numerous other clients in various industries, including healthcare, finance, and e-commerce. His ability to tailor his designs to meet the unique needs of each client has made him a sought-after designer in the industry. Outside of work, Mirdan enjoys keeping up with the latest design trends and experimenting with new techniques to further enhance his skills. He also enjoys playing sports and spending time with his family and friends"
//     ,
//   },
//   {
//     name: 'Daniel Alvendo',
//     position: 'Devolper',
//     bio: "Daniel Alvendo is a skilled programmer with a passion for creating cutting-edge websites that deliver exceptional user experiences. As the lead programmer for the website of Zima energy drink, Daniel has played a critical role in building a robust and dynamic platform that effectively communicates the brand's message and products. With years of experience in the field of web development, Daniel has developed expertise in a wide range of programming languages, including JavaScript, HTML, CSS, and PHP. His mastery of these technologies has allowed him to build websites that are not only visually appealing but also highly functional and user-friendly. Working in collaboration with the Zima team, Daniel has developed a website that is optimised for both desktop and mobile devices, ensuring that visitors have a seamless experience no matter how they access the site. He has also integrated advanced features such as online ordering and secure payment processing, helping to streamline the user experience and improve customer satisfaction. Daniel's skills as a programmer extend beyond website development. He has also worked on various software projects, including mobile applications and custom software solutions for businesses in various industries. When he's not coding, Daniel enjoys staying up-to-date with the latest technology trends and experimenting with new programming languages and frameworks. He also enjoys spending time with his family and friends, travelling, and exploring new cultures.",
//   },
//   {
//     name: 'Jessica Benson',
//     position: 'Group Orginazier',
//     bio: "Jessica Benson is a talented group organizer with a passion for bringing people together to achieve common goals. As the lead organizer for the website of Zima energy drink, Jessica has played a crucial role in ensuring that the website's content is relevant, informative, and engaging for visitors. With years of experience in event planning and project management, Jessica has developed a keen eye for detail and a talent for bringing together diverse groups of people to collaborate effectively. She has leveraged these skills to build a team of writers, designers, and programmers who work together to deliver a website that effectively communicates the brand's message and products. Jessica's approach to group organization is based on clear communication, effective delegation, and a focus on results. She works closely with her team to ensure that everyone is on the same page and that the project is moving forward according to plan. Her ability to keep everyone motivated and engaged has helped to foster a positive team culture and ensure that deadlines are met on time. In addition to her work with Zima, Jessica has organized various other events and projects, including conferences, fundraisers, and community initiatives. Her ability to bring people together and drive results have made her a respected leader in the industry. Outside of work, Jessica enjoys volunteering in her community, practicing yoga, and spending time with her family and friends.",
//   },
// ];

// popOutBtns.forEach((btn, index) => {
//   const teamMember = teamMembers[index];
//   const popOutContainer = document.createElement('div');
//   popOutContainer.classList.add('pop-out-container');
  
//   popOutContainer.innerHTML = `
//     <h2>${teamMember.name}</h2>
//     <p>${teamMember.bio}</p>
//     <span class="pop-out-container-close">&times;</span>
//   `;

  
//   popOutContainer.style.textAlign = 'left';
//   popOutContainer.style.fontSize = '15px';
//   popOutContainer.style.lineHeight = "1.5";
//   popOutContainer.style.width = '800px';
//   popOutContainer.style.height = '500px';
//   popOutContainer.style.padding = '20px';

//   popOutContainer.style.backgroundColor = 'white';
//   popOutContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
//   popOutContainer.style.position = 'fixed';
// popOutContainer.style.top = '50%';
// popOutContainer.style.left = '50%';
// popOutContainer.style.transform = 'translate(-50%, -50%)';

  
//   btn.addEventListener('click', () => {
//     document.body.appendChild(popOutContainer);
//     popOutContainer.style.display = 'block';

//     const popOutContainerClose = popOutContainer.querySelector('.pop-out-container-close');
//     popOutContainerClose.addEventListener('click', () => {
//       popOutContainer.style.display = 'none';
//     });
//   });
// });
