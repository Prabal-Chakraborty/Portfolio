// scroll to top
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 300)
  })
  
  document.querySelector('.scrollTop').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
    })
  })
  
  window.onload = function () {
    window.scrollTo({
      top: 0,
    })
  }
  
  let data = [

    {
        project_image: 'images/projects/smoothlypay.png',
        project_name: 'SmoothlyPay',
        project_live: 'https://main--poetic-florentine-d8cce8.netlify.app/',
        project_repo: 'https://github.com/Prabal-Chakraborty/SmoothlyPay/',
      },
      
      {
        project_image: 'images/projects/DiscordClone.png',
        project_name: 'Discord Clone',
        project_live: 'https://earnest-bombolone-2c26ad.netlify.app/',
        project_repo: 'https://github.com/Prabal-Chakraborty/Discord-Clone/',
      },

      {
        project_image: 'images/projects/PrabalPortfolio.png',
        project_name: 'Portfolio',
        project_live: 'https://prabal-chakraborty.github.io/Porifolio-Website/',
        project_repo: 'https://github.com/Prabal-Chakraborty/Porifolio-Website/',
      },

      {
        project_image: 'images/projects/modernChair.png',
        project_name: 'Modern Chair',
        project_live: 'https://prabal-chakraborty.github.io/Modern-Chair/',
        project_repo: 'https://github.com/Prabal-Chakraborty/Modern-Chair',
      },

      {
        project_image: 'images/projects/razorpayClone.png',
        project_name: 'RazorPay Website Clone',
        project_live: 'https://fanciful-rolypoly-a70f68.netlify.app/',
        project_repo: 'https://github.com/Prabal-Chakraborty/RazorPay-Clone/',
      },

      {
        project_image: 'images/projects/RFID.jpg',
        project_name: 'RFID Attendance System using IoT',
        project_live: 'https://github.com/Prabal-Chakraborty/RFID-Attendance-Ststem-Using-IoT/',
        project_repo: 'https://github.com/Prabal-Chakraborty/RFID-Attendance-Ststem-Using-IoT/',
      },

  ]
  
  // loading the projects
  const projectsList = document.querySelector('.projects-list')
  
  data.forEach((d) => {
    projectsList.innerHTML += `
    <div class="project-card">
    ${
      d.react
        ? `<div class="react-label"><img src="images/icons/react-js.svg" alt="react-icon"></img></div>`
        : ''
    }
    ${
      d.next
        ? `<div class="react-label"><img src="images/icons/next.svg" alt="react-icon"></img></div>`
        : ''
    }
    <div class="project-img">
        <img src=${d.project_image} alt="project-img">
    </div>
    <div class="project-info">
        <h3>${d.project_name}</h3>
        <div class="links">
            <a href=${d.project_live} target="_blank" class="url">
            <img src="images/icons/link.png" alt="link">
        </a>
        <a href=${d.project_repo} target="_blank" class="code">
            <img src="images/icons/coding.png" alt="code">
        </a>
        </div>
    </div>
  </div>
    `
  })
  