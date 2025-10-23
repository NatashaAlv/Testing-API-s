fetch("https://graphql.anilist.co", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    query: `
      query {
        Media(id: 1, type: ANIME) {
          id
          title {
            romaji
            english
          }
          description
        }
      }
    `
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
