module.exports = {
  server: {
    api: {
      host: process.env.IP || "0.0.0.0",
      port: process.env.PORT || 8081,
    },
    web: {
      host: "0.0.0.0",
      port: 8080,
    },
  },
  database: {
    elasticsearch: {
      url: process.env.ES_URL || "localhost:9200",
    },
  },
  auth: {
    secret: process.env.PLUNKER_SECRET || "Plunker development secret",
  },
  shared: {
    url: {
      api: "http://104.131.221.124:8081/api",
      run: "http://run.plnkr.co",
      shot: "http://shot.plunker.co",
      web: "http://104.131.221.124:8081",
    },
  },
};