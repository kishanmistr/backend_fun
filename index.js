require('dotenv').config()

const express = require('express')
const app = express()

const port = 3000

const githubData = {

    "login": "kishanmistr",
    "id": 73922188,
    "node_id": "MDQ6VXNlcjczOTIyMTg4",
    "avatar_url": "https://avatars.githubusercontent.com/u/73922188?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kishanmistr",
    "html_url": "https://github.com/kishanmistr",
    "followers_url": "https://api.github.com/users/kishanmistr/followers",
    "following_url": "https://api.github.com/users/kishanmistr/following{/other_user}",
    "gists_url": "https://api.github.com/users/kishanmistr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kishanmistr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kishanmistr/subscriptions",
    "organizations_url": "https://api.github.com/users/kishanmistr/orgs",
    "repos_url": "https://api.github.com/users/kishanmistr/repos",
    "events_url": "https://api.github.com/users/kishanmistr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kishanmistr/received_events",
    "type": "User",
    "site_admin": false,
    "name": "code_with_kishan",
    "company": null,
    "blog": "",
    "location": "navsari",
    "email": null,
    "hireable": null,
    "bio": "web designer",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-11-04T03:03:01Z",
    "updated_at": "2024-02-09T12:34:07Z"

  }

app.get('/', (req,res) => {

    res.send('hi kishan')

} )

app.get('/github', (req,res) => {

    res.json(githubData)


} )

app.listen(process.env.PORT,  () => {

    console.log(`${process.env.PORT}`);
} )

