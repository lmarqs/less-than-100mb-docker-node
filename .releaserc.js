module.exports = {
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    ["@semantic-release/npm", {
      "npmPublish": false,
      "tarballDir": "dist"
    }],
    ["@semantic-release/github", {
      "assets": "dist/*.tgz"
    }],
    ["@semantic-release/exec", {
      "prepareCmd": "docker build . --tag lmarqs/less-than-100mb-docker-node"
    }],
    ["semantic-release-docker", {
      "name": "lmarqs/less-than-100mb-docker-node"
    }]
  ]
}
