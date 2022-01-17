const linksSocialMedia = {
  github: 'anabeatrizstahl',
  youtube: 'PinchiitoFarias',
  instagram: 'stahlbia',
  facebook: 'ana.b.stahl',
  twitter: 'stahlbia'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class') //toda vez que o for termina, a const deixa de existir, sendo assim, não precisa ser let para mudar o valor
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textcontent = data.name
      userBio.textcontent = data.bio
      userLink.href = data.html_url
      userImage.scr = data.avatar_url
      userLogin.textcontent = data.login
    })
}

getGitHubProfileInfos()
