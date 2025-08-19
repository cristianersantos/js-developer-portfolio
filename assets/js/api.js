
//async function é a função que vai buscar os dados, não precisa ser executada imediatamente.

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/cristianersantos/js-developer-portfolio/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
