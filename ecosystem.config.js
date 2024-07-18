module.exports = {
    apps: [
      {
        name: "frontend",
        script: "http-server",
        args: "-p 3000 -c-1 build/",
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  