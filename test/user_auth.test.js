const expect = require('chai').expect;
const axios = require('axios');
headers = { Authorization: 'Bearer 32c1583f7a2c3d03bc54ebe1ddcffe94e7c8b6d0'};

const queryListRepos =
`query {
  viewer {
    repositories(first:1) {
      nodes {
        name
      }
    }
  }
}`;

describe('test', () => {
  it('test', async () => {
    let res = await axios({
      method: "post",
      url: "https://api.github.com/graphql",
      //data: { query: 'query {repository(owner:"test007-github", name:"monkey"){name}}'},
      //data: { query: 'query {viewer{repository(name:"monkey"){name id}}}'},
      data: { query:  queryListRepos},
      headers: headers
    });
    console.log(JSON.stringify(res.data, null, 2));
    expect(res.status).to.equal(200);

  })
})